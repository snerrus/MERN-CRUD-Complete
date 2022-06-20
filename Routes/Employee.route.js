// Importing important packages
let express = require('express');
let bodyParser = require('body-parser');
// Using express and routes
let app = express();
let employeeRoute = express.Router();

// Employee module which is required and imported
let employeeModel = require('../Model/Employee');

// To Get List Of Employees
employeeRoute.route('/').get(function (req, res) {
    employeeModel.find(function (err, employee) {
        if (err) {
            console.log(err);
        }
        else {
            res.json(employee);
        }
    });
});

// To Add New Employee
employeeRoute.route('/addemployee').post(function (req, res) {
    // let id = req.body;
    // console.log(id);
    // res.status(200).json({ 'employee': 'Employee Added Successfully' });
    let employee = new employeeModel(req.body);
    employee.save()
        .then(game => {
            res.status(200).json({ 'employee': 'Employee Added Successfully' });
        })
        .catch(err => {
            res.status(400).send("Something Went Wrong");
        });
});

// To Get Employee Details By Employee ID
employeeRoute.route('/editemployee/:id').get(function (req, res) {
    let id = req.params.id;
    employeeModel.findById(id, function (err, employee) {
        res.json(employee);
    });
});

//  To Update The Employee Details
employeeRoute.route('/updateemployee/:id').post(function (req, res) {
    employeeModel.findById(req.params.id, function (err, employee) {
        if (!employee)
            return next(new Error('Unable To Find Employee With This Id'));
        else {
            employee.firstName = req.body.firstName;
            employee.lastName = req.body.lastName;
            employee.email = req.body.email;
            employee.phone = req.body.phone;

            employee.save().then(emp => {
                res.json('Employee Updated Successfully');
            })
                .catch(err => {
                    res.status(400).send("Unable To Update Employee");
                });
        }
    });
});

// To Delete The Employee
employeeRoute.route('/deleteemployee/:id').get(function (req, res) {
    employeeModel.findByIdAndRemove({ _id: req.params.id }, function (err, employee) {
        if (err) res.json(err);
        else res.json('Employee Deleted Successfully');
    });
});

module.exports = employeeRoute;