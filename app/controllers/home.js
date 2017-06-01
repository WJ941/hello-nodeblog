var express = require('express'),
  router = express.Router(),
  Article = require('../models/article');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {
  var articles = [new Article(), new Article()];
    res.render('blog/index', {
      title: 'Node Blog Home',
      articles: articles
    });
});

router.get('/about', function (req, res, next) {
  var articles = [new Article(), new Article()];
    res.render('blog/index', {
      title: 'About me',
      articles: articles
    });
});

router.get('/contact', function (req, res, next) {
  var articles = [new Article(), new Article()];
    res.render('blog/index', {
      title: 'Contact me',
      articles: articles
    });
});
