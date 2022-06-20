// Imported required packages
const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose');

// All the express routes
const employeeRoutes = require('../Routes/Employee.route');

const username = "priyapandey";
const password = "Jadugar1106";
const cluster = "firstcluster";
const dbname = "employeeDetails";
    

// MongoDB Databse url
var mongoDatabase = 'mongodb+srv://username:<password>@firstcluster.juvxu.mongodb.net/?retryWrites=true&w=majority';

// Created express server
const app = express();
mongoose.Promise = global.Promise;

// Connect Mongodb Database
mongoose.connect(mongoDatabase, { useNewUrlParser: true,useFindAndModify: false,
    useUnifiedTopology: true }).then(
    () => { console.log('Database is connected') },
    err => { console.log('There is problem while connecting database ' + err) }
);


// Conver incoming data to JSON format
app.use(bodyParser.json());

// Enabled CORS
app.use(cors());

// Setup for the server port number
// const port = process.env.PORT || 3000;

// // Routes Configuration
// app.use('/employees', employeeRoutes);

// // Staring our express server
// const server = app.listen(port, function () {
//     console.log('Server Lisening On Port : ' + port);
// });

app.use(employeeRoutes);

app.listen(3000, () => {
  console.log("Server is running at port 3000");
});