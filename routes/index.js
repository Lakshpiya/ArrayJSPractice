var express = require('express');
var router = express.Router();

var sess;

/* GET home page. */
router.get('/', function(req, res, next) {
  sess = req.session;
  sess.Name="RahulIshaaniKalika";
  console.log('GET'+ sess.Name);
  res.render('index', { title: 'Express' });
});

router.post('/index', function(req, res, next) {
  var x=sess.Name;
  var y=sess;
  var z=sess.email;
  console.log('XPost'+x);
  console.log('YPost'+y);
  console.log('ZPost'+z);
});


module.exports = router;
