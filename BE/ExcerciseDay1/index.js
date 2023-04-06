const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

var users = [];

function getUsers() {
    let allUsersStr = fs.readFileSync('index.txt', 'utf8');
    allUsersStr.split('\n').forEach(line => {
        users.push(JSON.parse(line))
    })
    console.log(users)
}

getUsers()

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
        let allUsersString = ""
        for (let user of users) {
            allUsersString += ("\n" + JSON.stringify(user))
        }
        fs.writeFileSync('index.txt', allUsersString)
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
    let userStr = fs.readFileSync('index.txt', 'utf8');
    let newUserStr = userStr + "\n" + JSON.stringify(req.query)
    fs.writeFileSync('index.txt', newUserStr);
    next();
})

app.delete('/users/:id', function (req, res, next) {
    let user = users.find(u => u.id === req.query.id)
    users.splice(user, 1)
    console.log(users)
    let allUsersString = "";
    for (let user of users) {
        if (user == users[0]) {
            allUsersString += JSON.stringify(user)
        } else {
            allUsersString += ("\n" + JSON.stringify(user))
        }
    }
    fs.writeFileSync('index.txt', allUsersString)
    res.send(users)
    next()
})

app.listen(port, function () {
    console.log(`listening on port ${port}`);
})