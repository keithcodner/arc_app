const express = require('express');

//Routes
const apiRouter = require('./routes');
const arc_c_users_apiRouter = require('./routes/arc_c_user.route');
const arc_r_users_apiRouter = require('./routes/arc_r_user.route');
const arc_cmd_apiRouter = require('./routes/arc_cmd.route');
const arc_cmd_lst_apiRouter = require('./routes/arc_cmd_list.route');

const dotenv = require('dotenv');
const cors = require("cors");
const HttpException = require('./utils/HttpException.utils');
const errorMiddleware = require('./middleware/error.middleware');
//const userRouter = require('./routes/user.route');

// Init App
const app = express();

// Init environment
dotenv.config();

// parse requests of content-type: application/json
// parses incoming requests with JSON payloads
app.use(express.json());

// enabling cors for all requests by using cors middleware
app.use(cors());

// Enable pre-flight
app.options("*", cors());

app.use(express.json());

app.use('/api/arc_db/arc_c_users', arc_c_users_apiRouter);// for arc_c_users
app.use('/api/arc_db/arc_r_users', arc_r_users_apiRouter);// for arc_r_users
app.use('/api/arc_db/arc_cmd_table', arc_cmd_apiRouter);// for arc_cmd_table
app.use('/api/arc_db/arc_cmd_list_table', arc_cmd_lst_apiRouter);// for arc_cmd_lst_table
app.use('/api/arc_db/c_users', arc_c_users_apiRouter); // Default create


// 404 error
app.all('*', (req, res, next) => {
    const err = new HttpException(404, 'Endpoint Not Found');
    next(err);
});

// Error middleware
app.use(errorMiddleware);


app.listen(process.env.PORT || '3000', () =>{

    console.log(`Server is running on port: {process.env.PORT || '3000'}`);
    //console.log(process.env.SECRET_JWT);
    
});

