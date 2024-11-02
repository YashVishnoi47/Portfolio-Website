var express = require('express');
const passport = require('passport');
var router = express.Router();
const userModel = require("./users");
const localstrategy = require("passport-local");
const users = require('./users');
passport.use(new localstrategy(userModel.authenticate()));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',  {isLoggedIn: req.isAuthenticated(),
    user: req.isAuthenticated() ? {name:req.user.username, email:req.user.email}:null
   });
});

// router.get('/', function(req, res, next) {
//   res.render('index', {
//     isLoggedIn: req.isAuthenticated(),
//     user: req.isAuthenticated() ? { name: req.user.username, email: req.user.email } : null,
//     isOwner: req.session.isOwner || false  // Add isOwner based on session data
//   });
// });


router.get('/projects', function(req, res, next) {
  res.render('projects', {isLoggedIn: req.isAuthenticated(),
    user: req.isAuthenticated() ? {name:req.user.username, email:req.user.email}:null
   });
});


router.get('/contact', function(req, res, next) {
  res.render('contact', {isLoggedIn: req.isAuthenticated(),
    user: req.isAuthenticated() ? {name:req.user.username, email:req.user.email}:null
   });
});


router.get('/signup', function(req, res, next) {
  res.render('signup', {isLoggedIn: req.isAuthenticated(),
    user: req.isAuthenticated() ? {name:req.user.username, email:req.user.email}:null
   });
});



router.get('/login', function(req, res, next) {
  res.render('login',{error:req.flash('error')},);
});



// REgister Route

// router.post('/register',function(req,res){
//   var userdata = new userModel({
//     username:req.body.username,
//     passport:req.body.password,
//     email:req.body.email

//   });
//   userModel.register(userdata,req.body.password)
//   .then(function(registereduser){
//     passport.authenticate("local")(req,res,function(){
//       res.redirect('/');
//     })
//   })
// });




router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;

  // Input validation
  if (!username || !email || !password) {
      return res.status(400).json({ error: 'All fields are required.' });
  }

  try {
      // Check if the user already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
          return res.status(400).json({ error: 'User already exists.' });
      }

      // Create a new user
      const newUser = new User({ username, email, password });
      await newUser.save();

      res.status(201).json({ message: 'User registered successfully!' });
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Server error. Please try again later.' });
  }
});




router.post("/login",passport.authenticate('local',{
  successRedirect:'/',
  failureRedirect:'/login',
  failureFlash:true

}),function(req,res){ });



function isLoggedIn(req,res,next){
  if(req.isAuthenticated()){
    return next();
  }

  res.redirect('/')
}



router.get('/logout',function(req,res,next){
  req.logOut(function(err) {
    if (err) {
      return next(err);
    }
    res.redirect('/');
  });
});









module.exports = router;
