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

    create = async ({ set_an_id,set_name,set_val,set_op1,set_op2,set_op3,set_op4,set_op5,set_op_bulk1,set_op_bulk2}) => {
        const sql = `INSERT INTO ${this.tableName}
        (set_an_id,set_name,set_val,set_op1,set_op2,set_op3,set_op4,set_op5,set_op_bulk1,set_op_bulk2) VALUES (?,?,?,?,?,?,?,?,?,?)`;

        const result = await query(sql, [set_an_id,set_name,set_val,set_op1,set_op2,set_op3,set_op4,set_op5,set_op_bulk1,set_op_bulk2]);
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