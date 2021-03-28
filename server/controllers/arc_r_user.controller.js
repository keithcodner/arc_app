const ARC_R_UserModel = require('../models/ARC_R_user.model');
const HttpException = require('../utils/HttpException.utils');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

/******************************************************************************
 *                              User Controller
 ******************************************************************************/
 class ARC_R_Controller {
    getAllCUsers = async (req, res, next) => {
        let ARC_R_users = await ARC_R_UserModel.find();
        if (!ARC_R_users.length) {
            throw new HttpException(404, 'Users not found');
        }

        res.send(ARC_R_users);
    };

    getCUserById = async (req, res, next) => {
        const r_usr_name = await ARC_R_UserModel.findOne({ r_usr_id: req.params.r_usr_id });
        if (!r_usr_name) {
            throw new HttpException(404, 'User not found');
        }

        const { r_usr_an_id, ...userNotFound } = r_usr_name;

        res.send(userNotFound);
    };

    getCUserByANId = async (req, res, next) => {
        const r_usr_name = await ARC_R_UserModel.findOne({ r_usr_an_id: req.params.r_usr_an_id });
        if (!r_usr_name) {
            throw new HttpException(404, 'User not found');
        }

        const { r_usr_an_id, ...userNotFound } = r_usr_name;

        res.send(userNotFound);
    };

    createRUser = async (req, res, next) => {

        const result = await ARC_R_UserModel.create(req.body);

        if (!result) {
            throw new HttpException(501, 'Something went wrong');
        }

        res.status(201).send('User was created!');
    };

    updateRUser = async (req, res, next) => {
        
        const { confirm_password, ...restOfUpdates } = req.body;

        // do the update query and get the result
        // it can be partial edit
        const result = await ARC_R_UserModel.update(restOfUpdates, req.params.r_usr_id);

        if (!result) {
            throw new HttpException(404, 'Something went wrong');
        }

        const { affectedRows, changedRows, info } = result;

        const message = !affectedRows ? 'User not found' :
            affectedRows && changedRows ? 'User updated successfully' : 'Updated faild';

        res.send({ message, info });
    };

    deleteRUser = async (req, res, next) => {
        const result = await ARC_R_UserModel.delete(req.params.r_usr_id);
        if (!result) {
            throw new HttpException(404, 'User not found');
        }
        res.send('User has been deleted');
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
module.exports = new ARC_R_Controller;