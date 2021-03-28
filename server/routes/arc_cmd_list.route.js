const express = require('express');
const router = express.Router();
const ARC_CMD_LIST_Controller = require('../controllers/arc_cmd_list.controller');
const auth = require('../middleware/auth.middleware');
const Role = require('../utils/userRoles.utils');
const awaitHandlerFactory = require('../middleware/awaitHandlerFactory.middleware');

const { createUserSchema, updateUserSchema, validateLogin } = require('../middleware/validators/arcValidator.middleware');

//localhost:3000/api/arc_db/arc_cmd_list_table
router.get('/', /*auth(),*/ awaitHandlerFactory(ARC_CMD_LIST_Controller.getAll_CMD_LIST_Users)); 

//localhost:3000/api/arc_db/arc_cmd_list_table/cmd_list_usr_id/1
router.get('/cmd_list_usr_id/:cmd_list_usr_id', /*auth(),*/ awaitHandlerFactory(ARC_CMD_LIST_Controller.get_CMD_LIST_UserById)); 

//localhost:3000/api/arc_db/arc_cmd_list_table/cmd_list_usr_an_id/QWERT123
router.get('/cmd_list_usr_an_id/:cmd_list_usr_an_id', /*auth(),*/ awaitHandlerFactory(ARC_CMD_LIST_Controller.get_CMD_LIST_UserByANId)); 

//http://localhost:3000/api/arc_db/arc_cmd_list_table/c_usrs
router.post('/cmd_list_usrs/', /*auth(),*/ awaitHandlerFactory(ARC_CMD_LIST_Controller.create_CMD_LIST_User)); 

//localhost:3000/api/arc_db/arc_cmd_list_table/cmd_list_usr_id/3
router.patch('/cmd_list_usr_id/:cmd_list_usr_id', /*auth(),*/ awaitHandlerFactory(ARC_CMD_LIST_Controller.update_CMD_LIST_User)); 

//localhost:3000/api/arc_db/arc_cmd_list_table/cmd_list_usr_id/3
router.delete('/cmd_list_usr_id/:cmd_list_usr_id', /*auth(),*/ awaitHandlerFactory(ARC_CMD_LIST_Controller.delete_CMD_LIST_User)); 

/*
// http://localhost:3000/api/arc_db/arc_cmd_list_table (get all)
// http://localhost:3000/api/arc_db/arc_cmd_list_table/cmd_list_usr_id/1  (get by table id)
// http://localhost:3000/api/arc_db/arc_cmd_list_table/cmd_list_usr_an_id/QWERT123  (get by table an id)
// http://localhost:3000/api/arc_db/arc_cmd_list_table/c_usrs (post)
// http://localhost:3000/api/arc_db/arc_cmd_list_table/cmd_list_usr_id/3  (patch)
// http://localhost:3000/api/arc_db/arc_cmd_list_table/cmd_list_usr_id/3  (delete)
// sample data
    {
        "cmd_lst_an_id" : "cmd_lst_an_id",
        "cmd_exec_name" : "cmd_exec_name",
        "cmd_lst_exec_description" : "cmd_lst_exec_description",
        "cmd_lst_status" : "cmd_lst_status",
        "cmd_lst_type" : "cmd_lst_type",
        "cmd_lst_date_created" : "cmd_lst_date_created
    }
*/



module.exports = router;