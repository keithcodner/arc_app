const ARC_CMD_LIST_Model = require('../models/arc_cmd_list.model');
const HttpException = require('../utils/HttpException.utils');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

/******************************************************************************
 *                              User Controller
 ******************************************************************************/
class ARC_CMD_LIST_Controller {
    getAll_CMD_LIST_Items = async (req, res, next) => {
        let ARC_CMD_LIST_items = await ARC_CMD_LIST_Model.find();
        if (!ARC_CMD_LIST_items.length) {
            throw new HttpException(404, 'Item not found');
        }

        res.send(ARC_CMD_LIST_items);
    };

    get_CMD_LIST_ItemById = async (req, res, next) => {
        const ARC_CMD_LIST_items = await ARC_CMD_LIST_Model.findOne({ cmd_lst_id: req.params.cmd_lst_id });
        if (!ARC_CMD_LIST_items) {
            throw new HttpException(404, 'Item not found');
        }

        const { cmd_lst_id, ...userNotFound } = ARC_CMD_LIST_items;

        res.send(userNotFound);
    };

    get_CMD_LIST_ItemsByANId = async (req, res, next) => {
        const ARC_CMD_LIST_items = await ARC_CMD_LIST_Model.findOne({ cmd_lst_an_id: req.params.cmd_lst_an_id });
        if (!ARC_CMD_LIST_items) {
            throw new HttpException(404, 'Item not found');
        }

        const { r_usr_an_id, ...userNotFound } = ARC_CMD_LIST_items;

        res.send(userNotFound);
    };

    create_CMD_LIST_Items = async (req, res, next) => {

        const result = await ARC_CMD_LIST_Model.create(req.body);

        if (!result) {
            throw new HttpException(501, 'Something went wrong');
        }

        res.status(201).send('Item was created!');
    };

    update_CMD_LIST_Items = async (req, res, next) => {
        
        const { confirm_password, ...restOfUpdates } = req.body;

        // do the update query and get the result
        // it can be partial edit
        const result = await ARC_CMD_LIST_Model.update(restOfUpdates, req.params.cmd_lst_id);

        if (!result) {
            throw new HttpException(404, 'Something went wrong');
        }

        const { affectedRows, changedRows, info } = result;

        const message = !affectedRows ? 'Item not found' :
            affectedRows && changedRows ? 'Item updated successfully' : 'Updated faild';

        res.send({ message, info });
    };

    delete_CMD_LIST_Items = async (req, res, next) => {
        const result = await ARC_CMD_LIST_Model.delete(req.params.cmd_lst_id);
        if (!result) {
            throw new HttpException(404, 'Item not found');
        }
        res.send('Item has been deleted');
    };

/*
    getUserByuserName = async (req, res, next) => {
        const user = await UserModel.findOne({ username: req.params.username });
        if (!user) {
            throw new HttpException(404, 'Item not found');
        }

        const { password, ...userWithoutPassword } = user;

        res.send(userWithoutPassword);
    };

    getCurrentUser = async (req, res, next) => {
        const { password, ...userWithoutPassword } = req.currentUser;

        res.send(userWithoutPassword);
    };

    userLogin = async (req, res, next) => {
        this.checkValidation(req);

        const { email, password: pass } = req.body;

        const user = await UserModel.findOne({ email });

        if (!user) {
            throw new HttpException(401, 'Unable to login!');
        }

        const isMatch = await bcrypt.compare(pass, user.password);

        if (!isMatch) {
            throw new HttpException(401, 'Incorrect password!');
        }

        // user matched!
        const secretKey = process.env.SECRET_JWT || "";
        const token = jwt.sign({ user_id: user.id.toString() }, secretKey, {
            expiresIn: '24h'
        });

        const { password, ...userWithoutPassword } = user;

        res.send({ ...userWithoutPassword, token });
    };

    checkValidation = (req) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            throw new HttpException(400, 'Validation faild', errors);
        }
    }

    // hash password if it exists
    hashPassword = async (req) => {
        if (req.body.password) {
            req.body.password = await bcrypt.hash(req.body.password, 8);
        }
    }
    */
}



/******************************************************************************
 *                               Export
 ******************************************************************************/
module.exports = new ARC_CMD_LIST_Controller;