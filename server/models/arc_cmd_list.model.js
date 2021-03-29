const query = require('../db/db-connection');
const { multipleColumnSet } = require('../utils/common.utils');
const Role = require('../utils/userRoles.utils');

class ARC_CMD_LIST_Model {
    tableName = 'arc_cmd_lst_table';

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

        // return back the first row (item)
        return result[0];
    }

    create = async ({ cmd_lst_an_id,cmd_exec_name,cmd_lst_exec_description,cmd_lst_status,cmd_lst_type,cmd_lst_date_created}) => {
        const sql = `INSERT INTO ${this.tableName}
        (cmd_lst_an_id,cmd_exec_name,cmd_lst_exec_description,cmd_lst_status,cmd_lst_type,cmd_lst_date_created) VALUES (?,?,?,?,?,?)`;

        const result = await query(sql, [cmd_lst_an_id,cmd_exec_name,cmd_lst_exec_description,cmd_lst_status,cmd_lst_type,cmd_lst_date_created]);
        const affectedRows = result ? result.affectedRows : 0;

        return affectedRows;
    }

    update = async (params, cmd_lst_id) => {
        const { columnSet, values } = multipleColumnSet(params)

        const sql = `UPDATE ${this.tableName} SET ${columnSet} WHERE cmd_lst_id = ?`;

        const result = await query(sql, [...values, cmd_lst_id]);

        return result;
    }


    delete = async (cmd_lst_id) => {
        const sql = `DELETE FROM ${this.tableName}
        WHERE cmd_lst_id = ?`;
        const result = await query(sql, [cmd_lst_id]);
        const affectedRows = result ? result.affectedRows : 0;

        return affectedRows;
    }
    /**/
}

module.exports = new ARC_CMD_LIST_Model;