const ARC_CTRL_Model = require('../models/arc_ctrl_table.model');
const HttpException = require('../utils/HttpException.utils');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

/******************************************************************************
 *                              User Controller
 ******************************************************************************/
class ARC_CTRL_Controller {
    getAll_CTRL_Data = async (req, res, next) => {
        let ARC_CTRL_Data = await ARC_CTRL_Model.find();
        if (!ARC_CTRL_Data.length) {
            throw new HttpException(404, 'Ctrl data not found');
        }

        res.send(ARC_CTRL_Data);
    };

    get_CTRL_ById = async (req, res, next) => {
        const ctrl_name = await ARC_CTRL_Model.findOne({ ctrl_id: req.params.ctrl_id });
        if (!ctrl_name) {
            throw new HttpException(404, 'Ctrl data not found');
        }

        //const { ctrl_an_id, ...userNotFound } = ctrl_name;

        res.send(ctrl_name);
    };

    get_CTRL_ByANId = async (req, res, next) => {
        const ctrl_name = await ARC_CTRL_Model.findOne({ ctrl_an_id: req.params.ctrl_an_id });
        if (!ctrl_name) {
            throw new HttpException(404, 'Ctrl data not found');
        }

        const { ctrl_an_id, ...userNotFound } = ctrl_name;

        res.send(userNotFound);
    };
    
    get_CTRL_By_C_User = async (req, res, next) => {
        const ctrl_name = await ARC_CTRL_Model.findOne({ c_usr_an_id: req.params.c_usr_an_id });
        if (!ctrl_name) {
            throw new HttpException(404, 'Ctrl data not found');
        }

        const { c_usr_an_id, ...userNotFound } = ctrl_name;

        res.send(userNotFound);
    };

    create_CTRL_Data = async (req, res, next) => {

        const result = await ARC_CTRL_Model.create(req.body);

        if (!result) {
            throw new HttpException(501, 'Something went wrong');
        }

        res.status(201).send('Ctrl data was created!');
    };

    update_CTRL_Data = async (req, res, next) => {
        
        const { confirm_password, ...restOfUpdates } = req.body;

        // do the update query and get the result
        // it can be partial edit
        const result = await ARC_CTRL_Model.update(restOfUpdates, req.params.ctrl_id);

        if (!result) {
            throw new HttpException(404, 'Something went wrong');
        }

        const { affectedRows, changedRows, info } = result;

        const message = !affectedRows ? 'Ctrl data not found' :
            affectedRows && changedRows ? 'Ctrl data updated successfully' : 'Updated faild';

        res.send({ message, info });
    };

    delete_CTRL_Data = async (req, res, next) => {
        const result = await ARC_CTRL_Model.delete(req.params.ctrl_id);
        if (!result) {
            throw new HttpException(404, 'Ctrl data not found');
        }
        res.send('Ctrl data has been deleted');
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
module.exports = new ARC_CTRL_Controller;