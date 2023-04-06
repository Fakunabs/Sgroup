const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let users = [];

app.get('/users', function (req, res, next) {
    console.log(users);
    res.send(users);
    next();
})

app.get('/users/:id', function (req, res, next) {
    let user = users.find(user => user.id === req.params.id);
    if (user != null) {
        console.log(user);
        res.send(user);
    } else {
        console.log("user is not found");
        res.send("user is not found");
    }
    next();
})

app.put('/users/:id', function (req, res, next) {
    let user = users.find(user => user.id === req.params.id)
    if (user != null) {
        user.name = req.query.name
        user.gender = req.query.gender
        user.age = req.query.age
        console.log(user);
        res.send(user);
    } else {
        console.log("user is not found");
        res.send("user is not found");
    }
    next()
})

app.post('/users', function (req, res, next) {
    const id = req.query.id;
    const name = req.query.name;
    const gender = req.query.gender;
    const age = req.query.age;

    users.push(req.query)
    console.log(req.query)
    // console.log(typeof req.query) //Object
    res.send(`Received user with parameters: id=${id}, name=${name}, gender=${gender}, age=${age}`);
    next();
})

app.delete('/users/:id', function (req, res, next) {
    let user = users.find(u => u.id === req.query.id)
    users.splice(user, 1)
    console.log(users)
    res.send(users)
})

app.listen(port, function () {
    console.log(`listening on port ${port}`);
})