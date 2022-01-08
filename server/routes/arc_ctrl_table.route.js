const express = require('express');
const router = express.Router();
const ARC_CTRL_Controller = require('../controllers/arc_ctrl_table.controller');
const auth = require('../middleware/auth.middleware');
const Role = require('../utils/userRoles.utils');
const awaitHandlerFactory = require('../middleware/awaitHandlerFactory.middleware');

const { createUserSchema, updateUserSchema, validateLogin } = require('../middleware/validators/arcValidator.middleware');


//localhost:3000/api/arc_db/arc_ctrl_table
router.get('/', /*auth(),*/ awaitHandlerFactory(ARC_CTRL_Controller.getAll_CTRL_Data)); 

//localhost:3000/api/arc_db/arc_ctrl_table/ctrl_id/1
router.get('/ctrl_id/:ctrl_id', /*auth(),*/ awaitHandlerFactory(ARC_CTRL_Controller.get_CTRL_ById)); 

//localhost:3000/api/arc_db/arc_ctrl_table/ctrl_usr_an_id/QWERT123
router.post('/ctrl_usr_an_id/:ctrl_usr_an_id', /*auth(),*/ awaitHandlerFactory(ARC_CTRL_Controller.get_CTRL_ByANId)); 

//localhost:3000/api/arc_db/arc_ctrl_table/ctrl_an_id/QWERT123
router.get('/c_usr_an_id/:c_usr_an_id', /*auth(),*/ awaitHandlerFactory(ARC_CTRL_Controller.get_CTRL_By_C_User)); 

//http://localhost:3000/api/arc_db/arc_ctrl_table/mk_ctrl
router.post('/mk_ctrl/', /*auth(),*/ awaitHandlerFactory(ARC_CTRL_Controller.create_CTRL_Data)); 

//localhost:3000/api/arc_db/arc_ctrl_table/ctrl_id/3
router.patch('/ctrl_id/:ctrl_id', /*auth(),*/ awaitHandlerFactory(ARC_CTRL_Controller.update_CTRL_Data)); 

//localhost:3000/api/arc_db/arc_ctrl_table/ctrl_id/3
router.delete('/ctrl_id/:ctrl_id', /*auth(),*/ awaitHandlerFactory(ARC_CTRL_Controller.delete_CTRL_Data)); 

/*
// http://localhost:3000/api/arc_db/arc_ctrl_table (get all)
// http://localhost:3000/api/arc_db/arc_ctrl_table/ctrl_id/1  (get by table id)
// http://localhost:3000/api/arc_db/arc_ctrl_table/ctrl_usr_an_id/QWERT123  (get by table an id)
// http://localhost:3000/api/arc_db/arc_ctrl_table/mkctrl (post)
// http://localhost:3000/api/arc_db/arc_ctrl_table/ctrl_id/3  (patch)
// http://localhost:3000/api/arc_db/arc_ctrl_table/ctrl_id/3  (delete)
// sample data
     {
    "ctrl_an_id" : "ctrl_an_id",
    "c_usr_an_id" : "c_usr_an_id",
    "ctrl_arrow_up" : "ctrl_arrow_up",
    "ctrl_arrow_down" : "ctrl_arrow_down",
    "ctrl_arrow_left" : "ctrl_arrow_left",
    "ctrl_arrow_right" : "ctrl_arrow_right",
    "ctrl_index_left" : "ctrl_index_left",
    "ctrl_index_right" : "ctrl_index_right",
    "ctrl_btn_y" : "ctrl_btn_y",
    "ctrl_btn_x" : "ctrl_btn_x",
    "ctrl_btn_b" : "ctrl_btn_b",
    "ctrl_btn_a" : "ctrl_btn_a",
    "ctrl_btn_start" : "ctrl_btn_start",
    "ctrl_btn_select" : "ctrl_btn_select",
    "ctrl_combo_1" : "ctrl_combo_1",
    "ctrl_combo_2" : "ctrl_combo_2",
    "ctrl_combo_3" : "ctrl_combo_3",
    "ctrl_combo_4" : "ctrl_combo_4",
    "ctrl_combo_5" : "ctrl_combo_5",
    "ctrl_combo_6" : "ctrl_combo_6"
}

    ctrl_an_id,r_usr_an_id,c_usr_an_id,r_usr_code_name,ctrl_exec_name,ctrl_exec_params,ctrl_exec_data,ctrl_status,ctrl_op1,ctrl_op2,ctrl_op3,ctrl_date_created,ctrl_date_executed
*/



module.exports = router;