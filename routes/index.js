var express = require('express');
var router = express.Router();

// /* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* 品牌管理页面*/ 
router.get("/brand.html",function(req,res){
  res.render("brand",{ title: ' 品牌管理页面' })
})

/* 手机管理页面*/ 
router.get("/phone.html",function(req,res){
  res.render("phone",{ title: '手机管理页面' })
})

/* 用户登录页面localhost:3000/users/login.html*/
router.get("/login.html",function(req,res){
  res.render("login");
})

/* 用户注册页面localhost:3000/users/register.html*/
router.get("/register.html",function(req,res){
  res.render("register");
})


// //导入mongodb模块并创建一个 MongoClient 对象
// var MongoClient = require("mongodb").MongoClient;
// //配置好指定的 URL 和 端口号
// var url = "mongodb://127.0.0.1:27017";
// /* 用户管理*/
// router.get("/userInfo.html", function (req, res) {
//   // 连接服务器和数据库
//   MongoClient.connect(url, { useNewUrlParser: true }, function (error, client) {
//     if (error) {
//       console.log("连接服务器失败");
//       res.render("error", { message: "连接服务器失败", error: error });
//       return;
//     }
//     //连接数据库
//     var db = client.db("MS");
//     //查询MongoDB数据
//     db.collection("user").find().toArray(function (err, docs) {
//       if (error) {
//         console.log("查询用户数据失败");
//         res.render("error", { message: "查询失败", error: error });
//       } else {
//         console.log(docs);
//         res.render("userInfo", { list: docs });
//       }
//       //关闭数据库连接
//       client.close();
//     })
//   })
// })

module.exports = router;
