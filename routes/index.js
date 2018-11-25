var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/* 用户管理页面*/ 
router.get("/userInfo.html",function(req,res){
  res.render("userInfo",{ title: ' 用户管理页面' })
})

/* 品牌管理页面*/ 
router.get("/brand.html",function(req,res){
  res.render("brand",{ title: ' 品牌页面' })
})

/* 品牌管理页面*/ 
router.get("/phone.html",function(req,res){
  res.render("phone",{ title: '手机页面' })
})

module.exports = router;
