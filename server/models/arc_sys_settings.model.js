const query = require('../db/db-connection');
const { multipleColumnSet } = require('../utils/common.utils');
const Role = require('../utils/userRoles.utils');

class ARC_Sys_Settings_Model {
    tableName = 'arc_sys_settings';

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

        return result[0];
    }

    create = async ({ ctrl_an_id,c_usr_an_id,ctrl_arrow_up,ctrl_arrow_down,ctrl_arrow_left,ctrl_arrow_right,ctrl_index_left,ctrl_index_right,ctrl_btn_y,ctrl_btn_x,ctrl_btn_b,ctrl_btn_a,ctrl_btn_start,ctrl_btn_select,ctrl_combo_1,ctrl_combo_2,ctrl_combo_3,ctrl_combo_4,ctrl_combo_5,ctrl_combo_6}) => {
        const sql = `INSERT INTO ${this.tableName}
        (ctrl_an_id,c_usr_an_id,ctrl_arrow_up,ctrl_arrow_down,ctrl_arrow_left,ctrl_arrow_right,ctrl_index_left,ctrl_index_right,ctrl_btn_y,ctrl_btn_x,ctrl_btn_b,ctrl_btn_a,ctrl_btn_start,ctrl_btn_select,ctrl_combo_1,ctrl_combo_2,ctrl_combo_3,ctrl_combo_4,ctrl_combo_5,ctrl_combo_6) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;

        const result = await query(sql, [ctrl_an_id,c_usr_an_id,ctrl_arrow_up,ctrl_arrow_down,ctrl_arrow_left,ctrl_arrow_right,ctrl_index_left,ctrl_index_right,ctrl_btn_y,ctrl_btn_x,ctrl_btn_b,ctrl_btn_a,ctrl_btn_start,ctrl_btn_select,ctrl_combo_1,ctrl_combo_2,ctrl_combo_3,ctrl_combo_4,ctrl_combo_5,ctrl_combo_6]);
        const affectedRows = result ? result.affectedRows : 0;

        return affectedRows;
    }

    update = async (params, set_id) => {
        const { columnSet, values } = multipleColumnSet(params)

        const sql = `UPDATE ${this.tableName} SET ${columnSet} WHERE set_id = ?`;

        const result = await query(sql, [...values, set_id]);

        return result;
    }


    delete = async (set_id) => {
        const sql = `DELETE FROM ${this.tableName}
        WHERE set_id = ?`;
        const result = await query(sql, [set_id]);
        const affectedRows = result ? result.affectedRows : 0;

        return affectedRows;
    }
    /**/
}

module.exports = new ARC_Sys_Settings_Model;