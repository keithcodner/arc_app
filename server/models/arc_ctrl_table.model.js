const query = require('../db/db-connection');
const { multipleColumnSet } = require('../utils/common.utils');
const Role = require('../utils/userRoles.utils');

class ARC_CTRL_Model {
    tableName = 'arc_ctrl_table';

    find = async (params = {}) => {
        let sql = `SELECT * FROM ${this.tableName}`;

        if (!Object.keys(params).length) {
            return await query(sql);
        }

        const { columnSet, values } = multipleColumnSet(params)
        sql += ` WHERE ${columnSet}`;

        return await query(sql, [...values]);
    }

    
    findOne = async (params) => {
        const { columnSet, values } = multipleColumnSet(params)

        const sql = `SELECT * FROM ${this.tableName}
        WHERE ${columnSet}`;

        const result = await query(sql, [...values]);
        
        console.log(result[0]);

        // return back the first row (user)
        return result[0];
    }

    //set_an_id,set_name,set_val,set_op1,set_op2,set_op3,set_op4,set_op5,set_op_bulk1,set_op_bulk2
    //?,?,?,?,?,?,?,?,?,?

    create = async ({ ctrl_an_id,c_usr_an_id,ctrl_arrow_up,ctrl_arrow_down,ctrl_arrow_left,ctrl_arrow_right,ctrl_index_left,ctrl_index_right,ctrl_btn_y,ctrl_btn_x,ctrl_btn_b,ctrl_btn_a,ctrl_btn_start,ctrl_btn_select,ctrl_combo_1,ctrl_combo_2,ctrl_combo_3,ctrl_combo_4,ctrl_combo_5,ctrl_combo_6}) => {
        const sql = `INSERT INTO ${this.tableName}
        (ctrl_an_id,c_usr_an_id,ctrl_arrow_up,ctrl_arrow_down,ctrl_arrow_left,ctrl_arrow_right,ctrl_index_left,ctrl_index_right,ctrl_btn_y,ctrl_btn_x,ctrl_btn_b,ctrl_btn_a,ctrl_btn_start,ctrl_btn_select,ctrl_combo_1,ctrl_combo_2,ctrl_combo_3,ctrl_combo_4,ctrl_combo_5,ctrl_combo_6) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;

        const result = await query(sql, [ctrl_an_id,c_usr_an_id,ctrl_arrow_up,ctrl_arrow_down,ctrl_arrow_left,ctrl_arrow_right,ctrl_index_left,ctrl_index_right,ctrl_btn_y,ctrl_btn_x,ctrl_btn_b,ctrl_btn_a,ctrl_btn_start,ctrl_btn_select,ctrl_combo_1,ctrl_combo_2,ctrl_combo_3,ctrl_combo_4,ctrl_combo_5,ctrl_combo_6]);
        const affectedRows = result ? result.affectedRows : 0;

        return affectedRows;
    }

    update = async (params, ctrl_id) => {
        const { columnSet, values } = multipleColumnSet(params)

        const sql = `UPDATE ${this.tableName} SET ${columnSet} WHERE ctrl_id = ?`;

        const result = await query(sql, [...values, ctrl_id]);

        return result;
    }


    delete = async (ctrl_id) => {
        const sql = `DELETE FROM ${this.tableName}
        WHERE ctrl_id = ?`;
        const result = await query(sql, [ctrl_id]);
        const affectedRows = result ? result.affectedRows : 0;

        return affectedRows;
    }
    /**/
}

module.exports = new ARC_CTRL_Model;