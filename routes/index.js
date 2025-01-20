var express = require('express');
var router = express.Router();
const UserSchema = require('../model/users');
const User = require('../model/users');
/* GET home page. */
router.get('/', function(req, res) {
  res.render('home', { title: 'Express' });
});

router.post('/create', async function(req,res){
var {name,password} = req.body;
console.log(req.body);
const user = new User({Username:name, Password:password});
await user.save();
console.log(user);
console.log(req.body)
res.json({
  message:"success",
})
})


module.exports = router;

