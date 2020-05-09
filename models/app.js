const {Schema, model} = require('mongoose'),
	    schema = new Schema({
	    	title: {
	    		type: String,
	    	  required: true
	    	},
	    	completed: {
	    		type: Boolean,
	    		default: false
	    	}
	    })

	    module.exports = model('App', schema)



