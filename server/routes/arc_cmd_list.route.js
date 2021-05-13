const express = require('express');
const router = express.Router();
const ARC_CMD_LIST_Controller = require('../controllers/arc_cmd_list.controller');
const auth = require('../middleware/auth.middleware');
const Role = require('../utils/userRoles.utils');
const awaitHandlerFactory = require('../middleware/awaitHandlerFactory.middleware');

const { createUserSchema, updateUserSchema, validateLogin } = require('../middleware/validators/arcValidator.middleware');

//localhost:3000/api/arc_db/arc_cmd_list_table
router.get('/', /*auth(),*/ awaitHandlerFactory(ARC_CMD_LIST_Controller.getAll_CMD_LIST_Items)); 

//localhost:3000/api/arc_db/arc_cmd_list_table/cmd_lst_id/1
router.get('/cmd_lst_id/:cmd_lst_id', /*auth(),*/ awaitHandlerFactory(ARC_CMD_LIST_Controller.get_CMD_LIST_ItemById)); 

//localhost:3000/api/arc_db/arc_cmd_list_table/cmd_list_usr_an_id/QWERT123
router.get('/cmd_lst_an_id/:cmd_lst_an_id', /*auth(),*/ awaitHandlerFactory(ARC_CMD_LIST_Controller.get_CMD_LIST_ItemsByANId));  

//http://localhost:3000/api/arc_db/arc_cmd_list_table/cmd_list_item
router.post('/cmd_list_item/', /*auth(),*/ awaitHandlerFactory(ARC_CMD_LIST_Controller.create_CMD_LIST_Items)); 

//localhost:3000/api/arc_db/arc_cmd_list_table/cmd_lst_id/3
router.patch('/cmd_lst_id/:cmd_lst_id', /*auth(),*/ awaitHandlerFactory(ARC_CMD_LIST_Controller.update_CMD_LIST_Items)); 

//localhost:3000/api/arc_db/arc_cmd_list_table/cmd_lst_id/3
router.delete('/cmd_lst_id/:cmd_lst_id', /*auth(),*/ awaitHandlerFactory(ARC_CMD_LIST_Controller.delete_CMD_LIST_Items)); 

/*
// http://localhost:3000/api/arc_db/arc_cmd_list_table (get all)
// http://localhost:3000/api/arc_db/arc_cmd_list_table/cmd_lst_id/1  (get by table id)
// http://localhost:3000/api/arc_db/arc_cmd_list_table/cmd_list_usr_an_id/QWERT123  (get by table an id)
// http://localhost:3000/api/arc_db/arc_cmd_list_table/cmd_list_item (post)
// http://localhost:3000/api/arc_db/arc_cmd_list_table/cmd_lst_id/3  (patch)
// http://localhost:3000/api/arc_db/arc_cmd_list_table/cmd_lst_id/3  (delete)
// sample data
    {
        "cmd_lst_an_id" : "ABC12349",
        "cmd_exec_name" : "VIBRATE_DEFAULT",
        "cmd_lst_exec_description" : "Vibrate Robot",
        "cmd_lst_status" : "Active",
        "cmd_lst_type" : "Action",
        "cmd_lst_date_created" : "2021-03-05 00:52:44"
    }
*/



module.exports = router;