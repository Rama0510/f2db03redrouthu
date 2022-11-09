var express = require('express');
var router = express.Router();
const car_controllers= require('../controllers/car');

/* GET home page. */
router.get('/',car_controllers.car_view_all_Page);
  


module.exports = router;