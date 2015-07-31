var view = require('co-views');

module.exports = view(__dirname + '/../view', {
	map: { html: 'swig' } // TODO try different ones
});
