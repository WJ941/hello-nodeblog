var express = require('express');
	router = express.Router(),
	mongoose = require('mongoose'),
	Article = require('../models/article');
	// schema = new mongoose.Schema({ name: 'string', size: 'string' }),
	// Article = mongoose.model('Article',schema);

module.exports = function (app) {
	app.use('/admin',router);
};

// router.get('/',function(req,res,next){
// 	Article.find(function(err,articles){
// 		if(err) return next(err);
// 		res.render('admin/index',{
// 			title: 'Node Blog Admin',
// 			articles: articles
// 		});
// 	});
// });
router.get('/', function (req, res, next) {
  var articles = [new Article(), new Article()];
    res.render('admin/index', {
      title: 'Node Blog Home',
      articles: articles
    });
});