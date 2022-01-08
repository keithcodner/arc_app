const query = require('../db/db-connection');
const { multipleColumnSet } = require('../utils/common.utils');
const Role = require('../utils/userRoles.utils');

class ARC_C_Model {
    tableName = 'arc_c_usr_table';

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
        
        console.log(params)
        
        // return back the first row (user)
        return result[0];
    }

    create = async ({ c_usr_an_id, r_usr_an_id, c_usr_name, c_usr_pwd, c_usr_pwd_hash, c_usr_email, c_usr_ip, c_usr_status, c_usr_op1, c_usr_op2, c_usr_type, c_usr_date_created}) => {
        const sql = `INSERT INTO ${this.tableName}
        (c_usr_an_id, r_usr_an_id, c_usr_name, c_usr_pwd, c_usr_pwd_hash, c_usr_email, c_usr_ip, c_usr_status, c_usr_op1, c_usr_op2, c_usr_type, c_usr_date_created) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)`;

        const result = await query(sql, [c_usr_an_id, r_usr_an_id, c_usr_name, c_usr_pwd, c_usr_pwd_hash, c_usr_email, c_usr_ip, c_usr_status, c_usr_op1, c_usr_op2, c_usr_type, c_usr_date_created]);
        const affectedRows = result ? result.affectedRows : 0;

        return affectedRows;
    }

    update = async (params, c_usr_id) => {
        const { columnSet, values } = multipleColumnSet(params)

        const sql = `UPDATE ${this.tableName} SET ${columnSet} WHERE c_usr_id = ?`;

        const result = await query(sql, [...values, c_usr_id]);

        return result;
    }


    delete = async (c_usr_id) => {
        const sql = `DELETE FROM ${this.tableName}
        WHERE c_usr_id = ?`;
        const result = await query(sql, [c_usr_id]);
        const affectedRows = result ? result.affectedRows : 0;

        return affectedRows;
    }
    /**/
}

module.exports = new ARC_C_Model;