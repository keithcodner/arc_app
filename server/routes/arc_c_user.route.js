const express = require('express');
const router = express.Router();
const ARC_C_Controller = require('../controllers/arc_c_user.controller');
const auth = require('../middleware/auth.middleware');
const Role = require('../utils/userRoles.utils');
const awaitHandlerFactory = require('../middleware/awaitHandlerFactory.middleware');

const { createUserSchema, updateUserSchema, validateLogin } = require('../middleware/validators/arcValidator.middleware');

//localhost:3000/api/arc_db/arc_c_users
router.get('/', /*auth(),*/ awaitHandlerFactory(ARC_C_Controller.getAllCUsers)); 

//localhost:3000/api/arc_db/arc_c_users/c_usr_id/1
router.get('/c_usr_id/:c_usr_id', /*auth(),*/ awaitHandlerFactory(ARC_C_Controller.getCUserById)); 

//localhost:3000/api/arc_db/arc_c_users/c_usr_an_id/QWERT123
router.get('/c_usr_an_id/:c_usr_an_id', /*auth(),*/ awaitHandlerFactory(ARC_C_Controller.getCUserByANId)); 

//http://localhost:3000/api/arc_db/arc_c_users/c_usrs
router.post('/c_usrs/', /*auth(),*/ awaitHandlerFactory(ARC_C_Controller.createUser)); 

//localhost:3000/api/arc_db/arc_c_users/c_usr_id/3
router.patch('/c_usr_id/:c_usr_id', /*auth(),*/ awaitHandlerFactory(ARC_C_Controller.updateUser)); 

//localhost:3000/api/arc_db/arc_c_users/c_usr_id/3
router.delete('/c_usr_id/:c_usr_id', /*auth(),*/ awaitHandlerFactory(ARC_C_Controller.deleteUser)); 

/*
http://localhost:3000/api/arc_db/arc_r_users
http://localhost:3000/api/arc_db
http://localhost:3000/api/arc_db/arc_cmd_table
http://localhost:3000/api/arc_db/arc_cmd_lst_table
http://localhost:3000/api/arc_db/arc_c_users/c_usr_an_id/QWERT124
http://localhost:3000/api/arc_db/c_usr_an_id/c_usr_id/QWERT123

*/


module.exports = router;