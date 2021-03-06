const { body } = require('express-validator');
const Role = require('../../utils/userRoles.utils');

exports.validateCreateCommandList = [
    body('cmd_lst_an_id')
        .exists()
        .withMessage('Cmd List alpha-numeric id is required')
        .notEmpty()
        .withMessage('Cmd List alpha-numeric id must be filled'),
    body('cmd_exec_name')
        .exists()
        .withMessage('Cmd Exec Name is required')
        .notEmpty()
        .withMessage('Cmd Exec Name must be filled'),
    body('cmd_lst_exec_description')
        .optional(),
    body('cmd_lst_status')
        .exists()
        .withMessage('Cmd List Status is required')
        .notEmpty()
        .withMessage('Cmd List Status must be filled'),
    body('cmd_lst_type')
        .exists()
        .withMessage('Cmd List Type is required')
        .notEmpty()
        .withMessage('Cmd List Type must be filled'),
    body('cmd_lst_date_created')
        .exists()
        .withMessage('Cmd List Created Date is required')
        .notEmpty()
        .withMessage('Cmd List Created Date must be filled')
        .matches('/^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-2])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s]((([01]\d|2[0-3])((:?)[0-5]\d)?|24\:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/')
        .withMessage('start must be in correct format yyyy:mm:dd hh:mm:ss')
];

exports.validateCreateCommand = [
    body('cmd_an_id')
        .exists()
        .withMessage('Cmd alpha-numeric id is required')
        .notEmpty()
        .withMessage('Cmd alpha-numeric id must be filled'),
    body('r_usr_an_id')
        .exists()
        .withMessage('Robot User alpha-numeric id is required')
        .notEmpty()
        .withMessage('Robot User alpha-numeric id must be filled'),
    body('c_usr_an_id')
        .exists()
        .withMessage('Controller User alpha-numeric id is required')
        .notEmpty()
        .withMessage('Controller User alpha-numeric id must be filled'),
    body('r_usr_code_name')
        .exists()
        .withMessage('Robot Codename is required')
        .notEmpty()
        .withMessage('Robot Codename must be filled'),
    body('cmd_exec_name')
        .exists()
        .withMessage('Exec Cmd Name is required')
        .notEmpty()
        .withMessage('Exec Cmd Name must be filled'),
    body('cmd_exec_params')
        .optional(),
    body('cmd_exec_data')
        .optional(),
    body('cmd_status')
        .exists()
        .withMessage('Cmd Status is required')
        .notEmpty()
        .withMessage('Cmd Status must be filled'),
    body('cmd_op1')
        .optional(),
    body('cmd_op2')
        .optional(),
    body('cmd_op3')
        .optional(),
    body('cmd_date_created')
        .exists()
        .withMessage('Cmd List Created Date is required')
        .notEmpty()
        .withMessage('Cmd List Created Date must be filled')
        .matches('/^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-2])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s]((([01]\d|2[0-3])((:?)[0-5]\d)?|24\:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/')
        .withMessage('start must be in correct format yyyy:mm:dd hh:mm:ss'),
    body('cmd_date_executed')
        .optional()
        .matches('/^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-2])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s]((([01]\d|2[0-3])((:?)[0-5]\d)?|24\:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/')
        .withMessage('start must be in correct format yyyy:mm:dd hh:mm:ss')
];

exports.validateCreateControllerUser = [
    body('c_usr_an_id')
        .exists()
        .withMessage('Cmd alpha-numeric id is required')
        .notEmpty()
        .withMessage('Cmd alpha-numeric id must be filled'),
    body('r_usr_an_id')
        .exists()
        .withMessage('Robot User alpha-numeric id is required')
        .notEmpty()
        .withMessage('Robot User alpha-numeric id must be filled'),
    body('c_usr_name')
        .exists()
        .withMessage('Name is required')
        .notEmpty()
        .withMessage('Name must be filled'),
    body('c_usr_pwd')
        .exists()
        .withMessage('Password is required')
        .notEmpty()
        .withMessage('Password must be filled'),
    body('c_usr_pwd_hash')
        .exists()
        .withMessage('Password hash is required')
        .notEmpty()
        .withMessage('Password hash must be filled'),
    body('c_usr_email')
        .exists()
        .withMessage('Email is required')
        .notEmpty()
        .withMessage('Email must be filled'),
    body('c_usr_ip')
        .optional(),
    body('c_usr_status')
        .exists()
        .withMessage('Controller Status is required')
        .notEmpty()
        .withMessage('Controller Status must be filled'),
    body('c_usr_op1')
        .optional(),
    body('c_usr_op2')
        .optional(),
    body('c_usr_type')
        .exists()
        .withMessage('Controller Type is required')
        .notEmpty()
        .withMessage('Controller Type must be filled'),
    body('cmd_date_created')
        .exists()
        .withMessage('Controller Created Date is required')
        .notEmpty()
        .withMessage('Controller Created Date must be filled')
        .matches('/^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-2])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s]((([01]\d|2[0-3])((:?)[0-5]\d)?|24\:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/')
        .withMessage('start must be in correct format yyyy:mm:dd hh:mm:ss')
];

exports.validateCreateRobotUser = [
    body('r_usr_an_id')
        .exists()
        .withMessage('Robot alpha-numeric id is required')
        .notEmpty()
        .withMessage('Robot alpha-numeric id must be filled'),
    body('r_usr_code_name')
        .exists()
        .withMessage('Robot Codename is required')
        .notEmpty()
        .withMessage('Robot Codename must be filled'),
    body('r_usr_ip')
         .optional(),
    body('r_usr_status')
        .exists()
        .withMessage('Robot Status is required')
        .notEmpty()
        .withMessage('Robot Status be filled'),
    body('r_usr_type')
        .exists()
        .withMessage('Robot Type is required')
        .notEmpty()
        .withMessage('Robot Type be filled'),
    body('r_usr_op1')
        .optional(),
    body('r_usr_op2')
        .optional(),
    body('r_usr_date_created')
        .exists()
        .withMessage('Robot Created Date is required')
        .notEmpty()
        .withMessage('Robot Created Date must be filled')
        .matches('/^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-2])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s]((([01]\d|2[0-3])((:?)[0-5]\d)?|24\:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/')
        .withMessage('start must be in correct format yyyy:mm:dd hh:mm:ss')
];

exports.validateUpdateCommandList = [
    body('cmd_lst_an_id')
        .optional(),
    body('cmd_exec_name')
        .optional(),
    body('cmd_lst_exec_description')
        .optional(),
    body('cmd_lst_status')
        .optional(),
    body('cmd_lst_type')
        .optional(),
    body('cmd_lst_date_created')
        .optional()
        .matches('/^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-2])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s]((([01]\d|2[0-3])((:?)[0-5]\d)?|24\:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/')
        .withMessage('start must be in correct format yyyy:mm:dd hh:mm:ss')
];

exports.validateUpdateCommand = [
    body('cmd_an_id')
        .optional(),
    body('r_usr_an_id')
        .optional(),
    body('c_usr_an_id')
        .optional(),
    body('r_usr_code_name')
        .optional(),
    body('cmd_exec_name')
        .optional(),
    body('cmd_exec_params')
        .optional(),
    body('cmd_exec_data')
        .optional(),
    body('cmd_status')
        .optional(),
    body('cmd_op1')
        .optional(),
    body('cmd_op2')
        .optional(),
    body('cmd_op3')
        .optional(),
    body('cmd_date_created')
        .optional()
        .matches('/^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-2])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s]((([01]\d|2[0-3])((:?)[0-5]\d)?|24\:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/')
        .withMessage('start must be in correct format yyyy:mm:dd hh:mm:ss'),
    body('cmd_date_executed')
        .optional()
        .matches('/^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-2])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s]((([01]\d|2[0-3])((:?)[0-5]\d)?|24\:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/')
        .withMessage('start must be in correct format yyyy:mm:dd hh:mm:ss')
];

exports.validateUpdateControllerUser = [
    body('c_usr_an_id')
        .optional(),
    body('r_usr_an_id')
        .optional(),
    body('c_usr_name')
        .optional(),
    body('c_usr_pwd')
        .optional(),
    body('c_usr_pwd_hash')
        .optional(),
    body('c_usr_email')
        .optional(),
    body('c_usr_ip')
        .optional(),
    body('c_usr_status')
        .optional(),
    body('c_usr_op1')
        .optional(),
    body('c_usr_op2')
        .optional(),
    body('c_usr_type')
        .optional(),
    body('cmd_date_created')
        .optional()
        .matches('/^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-2])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s]((([01]\d|2[0-3])((:?)[0-5]\d)?|24\:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/')
        .withMessage('start must be in correct format yyyy:mm:dd hh:mm:ss')
];

exports.validateUpdateRobotUser = [
   body('r_usr_an_id')
        .optional(),
    body('r_usr_code_name')
        .optional(),
    body('r_usr_ip')
         .optional(),
    body('r_usr_status')
        .optional(),
    body('r_usr_type')
        .optional(),
    body('r_usr_op1')
        .optional(),
    body('r_usr_op2')
        .optional(),
    body('r_usr_date_created')
        .optional()
        .matches('/^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-2])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s]((([01]\d|2[0-3])((:?)[0-5]\d)?|24\:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/')
        .withMessage('start must be in correct format yyyy:mm:dd hh:mm:ss')
];




