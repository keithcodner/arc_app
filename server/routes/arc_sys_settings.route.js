const express = require('express');
const router = express.Router();
const ARC_Sys_Settings_Controller = require('../controllers/arc_sys_settings.controller');
const auth = require('../middleware/auth.middleware');
const Role = require('../utils/userRoles.utils');
const awaitHandlerFactory = require('../middleware/awaitHandlerFactory.middleware');

const { createUserSchema, updateUserSchema, validateLogin } = require('../middleware/validators/arcValidator.middleware');


//localhost:3000/api/arc_db/arc_sys_settings
router.get('/', /*auth(),*/ awaitHandlerFactory(ARC_Sys_Settings_Controller.getAll_Sys_Settings)); 

//localhost:3000/api/arc_db/arc_sys_settings/set_id/1
router.get('/set_id/:set_id', /*auth(),*/ awaitHandlerFactory(ARC_Sys_Settings_Controller.get_Sys_Settings_ById)); 

//localhost:3000/api/arc_db/arc_sys_settings/set_an_id/QWERT123
router.get('/set_an_id/:set_an_id', /*auth(),*/ awaitHandlerFactory(ARC_Sys_Settings_Controller.get_Sys_Settings_ByANId)); 

//http://localhost:3000/api/arc_db/arc_sys_settings/mk_settings
router.post('/mk_settings/', /*auth(),*/ awaitHandlerFactory(ARC_Sys_Settings_Controller.create_Sys_Settings)); 

//localhost:3000/api/arc_db/arc_sys_settings/set_id/3
router.patch('/set_id/:set_id', /*auth(),*/ awaitHandlerFactory(ARC_Sys_Settings_Controller.update_Sys_Settings)); 

//localhost:3000/api/arc_db/arc_sys_settings/set_id/3
router.delete('/set_id/:set_id', /*auth(),*/ awaitHandlerFactory(ARC_Sys_Settings_Controller.delete_Sys_Settings)); 

/*
// http://localhost:3000/api/arc_db/arc_sys_settings (get all)
// http://localhost:3000/api/arc_db/arc_sys_settings/set_id/1  (get by table id)
// http://localhost:3000/api/arc_db/arc_sys_settings/set_an_id/QWERT123  (get by table an id)
// http://localhost:3000/api/arc_db/arc_sys_settings/mkcmd (post)
// http://localhost:3000/api/arc_db/arc_sys_settings/set_id/3  (patch)
// http://localhost:3000/api/arc_db/arc_sys_settings/set_id/3  (delete)
// sample data
{
    "set_an_id" : "set_an_id",
    "set_name" : "set_name",
    "set_val" : "set_val",
    "set_op1" : "set_op1",
    "set_op2" : "set_op2",
    "set_op3" : "set_op3",
    "set_op4" : "set_op4",
    "set_op5" : "set_op5",
    "set_op_bulk1" : "set_op_bulk1",
    "set_op_bulk2" : "set_op_bulk2"
}

    cmd_an_id,r_usr_an_id,c_usr_an_id,r_usr_code_name,cmd_exec_name,cmd_exec_params,cmd_exec_data,cmd_status,cmd_op1,cmd_op2,cmd_op3,cmd_date_created,cmd_date_executed
*/



module.exports = router;