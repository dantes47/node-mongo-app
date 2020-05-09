const {Router} = require('express'),
	    router = Router(),
	    App = require('../models/app.js')

router.get('/', async (req, res) => {
	const app = await App.find({}).lean()

	res.render('index', {
		title: 'Main Page',
		isIndex: true,
		app
	})
})

router.get('/new', (req, res) => {
	res.render('new', {
		title: 'New Item',
		isNew: true
	})
})

router.post('/new', async(req, res) => {
	const app = new App({
		title: req.body.title
	})

	await app.save()
	res.redirect('/')
})

module.exports = router

