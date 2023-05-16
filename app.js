const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const getEmployees = require('./controllers/employees');
const addEmployee = require('./controllers/addEmployee');
const deleteEmployee = require('./controllers/deleteEmployee');
const editEmployee = require('./controllers/editEmployee');



const app = express();
const port = 3500;

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const JSON_FILE_PATH = './data.json';

app.get('/', (req, res) => {
    res.render('home.ejs');
}
);

app.get('/employees', getEmployees);
app.get('/addEmployee', addEmployee.getAddEmployee);
app.post('/addEmployee', addEmployee.addEmployee);
app.get('/deleteEmployee', deleteEmployee.deleteEmployeeById);
app.get('/updateEmployee', editEmployee.getUpdateEmployeeById);
app.post('/updateEmployee', editEmployee.updateEmployeeById);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
}
);