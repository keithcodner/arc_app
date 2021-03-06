const express = require('express');
const router = express.Router();
const ARC_C_Controller = require('../controllers/arc_c_user.controller');
const auth = require('../middleware/auth.middleware');
const Role = require('../utils/userRoles.utils');
const awaitHandlerFactory = require('../middleware/awaitHandlerFactory.middleware');

const { createUserSchema, updateUserSchema, validateLogin } = require('../middleware/validators/arcValidator.middleware');


router.get('/', auth(), awaitHandlerFactory(ARC_C_Controller.getAllUsers)); // localhost:3000/api/v1/users


module.exports = router;