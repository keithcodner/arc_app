const express = require('express');
const router = express.Router();
const ARC_C_Controller = require('../controllers/arc_c_user.controller');
const auth = require('../middleware/auth.middleware');
const Role = require('../utils/userRoles.utils');
const awaitHandlerFactory = require('../middleware/awaitHandlerFactory.middleware');

const { createUserSchema, updateUserSchema, validateLogin } = require('../middleware/validators/arcValidator.middleware');


router.get('/', /*auth(),*/ awaitHandlerFactory(ARC_C_Controller.getAllCUsers)); //localhost:3000/api/arc_db/arc_c_users
router.get('/c_usr_id/:c_usr_id', /*auth(),*/ awaitHandlerFactory(ARC_C_Controller.getCUserById)); //localhost:3000/api/arc_db/arc_c_users/c_usr_id/1
router.get('/c_usr_an_id/:c_usr_an_id', /*auth(),*/ awaitHandlerFactory(ARC_C_Controller.getCUserByANId)); //localhost:3000/api/arc_db/arc_c_users/c_usr_an_id/QWERT123


module.exports = router;