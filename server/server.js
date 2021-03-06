const express = require('express');
const apiRouter = require('./routes');
const dotenv = require('dotenv');
const cors = require("cors");
//const HttpException = require('./utils/HttpException.utils');
//const errorMiddleware = require('./middleware/error.middleware');
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
app.use('/api/arc_db', apiRouter);

// 404 error
app.all('*', (req, res, next) => {
    const err = new HttpException(404, 'Endpoint Not Found');
    next(err);
});

// Error middleware
//app.use(errorMiddleware);


app.listen(process.env.PORT || '3000', () =>{

    console.log(`Server is running on port: {process.env.PORT || '3000'}`);
    console.log(process.env.DB_USER);
});

