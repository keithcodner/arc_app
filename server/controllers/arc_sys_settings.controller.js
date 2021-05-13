const ARC_Sys_Settings_Model = require('../models/arc_sys_settings.model');
const HttpException = require('../utils/HttpException.utils');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

/******************************************************************************
 *                              User Controller
 ******************************************************************************/
class ARC_Sys_Settings_Controller {
    getAll_Sys_Settings = async (req, res, next) => {
        let ARC_Sys_Settings = await ARC_Sys_Settings_Model.find();
        if (!ARC_Sys_Settings.length) {
            throw new HttpException(404, 'System Settings not found');
        }

        res.send(ARC_Sys_Settings);
    };

    get_Sys_Settings_ById = async (req, res, next) => {
        const sys_setting_name = await ARC_Sys_Settings_Model.findOne({ set_id: req.params.set_id });
        if (!sys_setting_name) {
            throw new HttpException(404, 'System Settings not found');
        }

        const { set_an_id, ...userNotFound } = sys_setting_name;

        res.send(userNotFound);
    };

    get_Sys_Settings_ByANId = async (req, res, next) => {
        const sys_setting_name = await ARC_Sys_Settings_Model.findOne({ set_an_id: req.params.set_an_id });
        if (!sys_setting_name) {
            throw new HttpException(404, 'System Settings not found');
        }

        const { set_an_id, ...userNotFound } = sys_setting_name;

        res.send(userNotFound);
    };

    create_Sys_Settings = async (req, res, next) => {

        const result = await ARC_Sys_Settings_Model.create(req.body);

        if (!result) {
            throw new HttpException(501, 'Something went wrong');
        }

        res.status(201).send('System Settings was created!');
    };

    update_Sys_Settings = async (req, res, next) => {
        
        const { confirm_password, ...restOfUpdates } = req.body;

        // do the update query and get the result
        // it can be partial edit
        const result = await ARC_Sys_Settings_Model.update(restOfUpdates, req.params.set_id);

        if (!result) {
            throw new HttpException(404, 'Something went wrong');
        }

        const { affectedRows, changedRows, info } = result;

        const message = !affectedRows ? 'System Settings not found' :
            affectedRows && changedRows ? 'System Settings updated successfully' : 'Updated faild';

        res.send({ message, info });
    };

    delete_Sys_Settings = async (req, res, next) => {
        const result = await ARC_Sys_Settings_Model.delete(req.params.set_id);
        if (!result) {
            throw new HttpException(404, 'System Settings not found');
        }
        res.send('System Settings has been deleted');
    };

/*
    getUserByuserName = async (req, res, next) => {
        const user = await UserModel.findOne({ username: req.params.username });
        if (!user) {
            throw new HttpException(404, 'User not found');
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
module.exports = new ARC_Sys_Settings_Controller;