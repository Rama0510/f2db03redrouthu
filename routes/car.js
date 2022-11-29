var express = require('express');
const car_controlers= require('../controllers/car');
var router = express.Router();
// A little function to check if we have an authorized user and continue on 

// redirect to login. 
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('car', {title:'Search Results car'});
// });
/* GET detail car page */ 
router.get('/detail', car_controlers.car_view_one_Page);
/* GET car */ 
router.get('/', car_controlers.car_view_all_Page );
/* GET create car page */ 
router.get('/create', car_controlers.car_create_Page); 
/* GET create update page */ 
router.get('/update', secured,car_controlers.car_update_Page); 
/* GET delete costume page */ 
router.get('/delete', car_controlers.car_delete_Page); 
// GET request for one car. 
router.get('/cars/:id', car_controlers.car_detail); 
module.exports = router;
 

 
