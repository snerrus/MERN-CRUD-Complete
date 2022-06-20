let express = require('express');
let cors = require('cors');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');

let  app = express();
let employeeRoutes = require('../Routes/Employee.route');
let employeeModel = require('../Model/Employee');

const username = "priyapandey";
const password = "Jadugar1106";
const cluster = "firstcluster";
let dbname = "employeeDetails";


mongoose.Promise = global.Promise;

// Connect Mongodb Database
mongoose.connect(
    'mongodb+srv://priyapandey:Jadugar1106@firstcluster.juvxu.mongodb.net/employeeDetails',
    {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    }).then(
    () => { console.log('Database is connected') },
    err => { console.log('There is problem while connecting database ' + err) }
);

// Conver incoming data to JSON format
app.use(bodyParser.json());

console.log(app);

app.use(cors());

// app.get("/view", (req,res) => {
//     res.send({"workled": "reply"});
//     // employeeModel.find(function (err, employee) {
//     //     if (err) {
//     //         console.log(err);
//     //     }
//     //     else {
//     //         res.json(employee);
//     //         console.log(employee);
//     //     }
//     // });
// }); 

app.use('/', employeeRoutes);

// app.post("/addemployee", (req,res) => {
//     res.send("<h1>This is a about page backend call</h1>")
// }); 

app.listen(8000, ()=>{
    console.log("server running on 8000!");
})

