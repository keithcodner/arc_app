const query = require('../db/db-connection');
const { multipleColumnSet } = require('../utils/common.utils');
const Role = require('../utils/userRoles.utils');

class ARC_R_Model {
    tableName = 'arc_r_usr_table';

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

        // return back the first row (user)
        return result[0];
    }

    create = async ({ r_usr_an_id,r_usr_code_name,r_usr_ip,r_usr_status,r_usr_type,r_usr_op1,r_usr_op2,r_usr_date_created}) => {
        const sql = `INSERT INTO ${this.tableName}
        (r_usr_an_id,r_usr_code_name,r_usr_ip,r_usr_status,r_usr_type,r_usr_op1,r_usr_op2,r_usr_date_created) VALUES (?,?,?,?,?,?,?,?)`;

        const result = await query(sql, [r_usr_an_id,r_usr_code_name,r_usr_ip,r_usr_status,r_usr_type,r_usr_op1,r_usr_op2,r_usr_date_created]);
        const affectedRows = result ? result.affectedRows : 0;

        return affectedRows;
    }

    update = async (params, r_usr_id) => {
        const { columnSet, values } = multipleColumnSet(params)

        const sql = `UPDATE ${this.tableName} SET ${columnSet} WHERE r_usr_id = ?`;

        const result = await query(sql, [...values, r_usr_id]);

        return result;
    }


    delete = async (r_usr_id) => {
        const sql = `DELETE FROM ${this.tableName}
        WHERE r_usr_id = ?`;
        const result = await query(sql, [r_usr_id]);
        const affectedRows = result ? result.affectedRows : 0;

        return affectedRows;
    }
    /**/
}

module.exports = new ARC_R_Model;