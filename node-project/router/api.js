const router = require('express').Router();
const UserController = require('../controllers/user.controller');


router.post('/register', UserController.newUser);
router.get('/getAll', UserController.getAllUsers);
// router.post('/login', UserController.loginUser);


// router.post('/addProduct',ProductController.newProduct);
// router.get('/getAll',ProductController.getAllProducts);

// router.post('/addOrder',checkUserJwt,OrderController.newOrder);

module.exports = router;