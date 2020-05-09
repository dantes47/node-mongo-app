const express = require('express'),
      mongoose = require('mongoose'),
      handle = require('express-handlebars'),
      todo_routes = require('./routes/todos.js'),
      path = require('path'),

    PORT = process.env.PORT || 3000,

    app = express(),
    hbs = handle.create({
       defaultLayout: 'main',
       extname: 'hbs'
    })

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))

app.use(todo_routes)

async function start() {
    try {
      await mongoose.connect('mongodb+srv://Danny:admin@cluster0-hd05u.mongodb.net/todos', {
          useNewUrlParser: true,
          useUnifiedTopology: true
      })
        app.listen(PORT, () => {
    console.log('Server is running now..')
})
    } catch(e) {
        console.log(e)
    }
}    

start()


