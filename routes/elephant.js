var express = require('express');
var router = express.Router();

/* GET home page. 
router.get('/', function(req, res, next) {
  res.render('elephant', { title: 'Search Results Elephant' });
});
*/
const elephant_controlers= require('../controllers/elephant');

// A little function to check if we have an authorized user and continue on
//or
// redirect to login.
const secured = (req, res, next) => {
if (req.user){
return next();
}
res.redirect("/login");
}

/* GET elephants */
router.get('/', elephant_controlers.elephant_view_all_Page );


/* GET detail elephant page */
router.get('/detail', secured, elephant_controlers.elephant_view_one_Page);

/* GET create elephant page */
router.get('/create', secured, elephant_controlers.elephant_create_Page);

/* GET create update page */
router.get('/update', secured, elephant_controlers.elephant_update_Page);

/* GET delete elephant page */
router.get('/delete', secured, elephant_controlers.elephant_delete_Page);


module.exports = router;