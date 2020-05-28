  
//requirements
const router = require("express").Router();
const User = require("../models/user");

//our router methods used in the other file
//post method to add more users
router.post("/api/newUser", (req, res) => {
    console.log(req.body);
    User.create(req.body).then(dbEntry => {
        res.json(dbEntry)
        console.log("User Added: ", dbEntry);
    })
    .catch(error => {
        res.status(400).json(error);
    });
});

//get method will get all users and sort by hire date
router.get("/api/users/byDate", (req, res) => {
    User.find({}).sort({ hireDate: -1 })
    .then(dbEntry => {
        res.json(dbEntry);
    })
    .catch(error => {
        res.status(400).json(error);
    });
});

//get method will get all users and sort it by username
router.get("/api/users/byUsername", (req, res) => {
    User.find({}).sort({ userName: -1 })
    .then(dbEntry => {
        res.json(dbEntry);
    })
    .catch(error => {
        res.status(400).json(error);
    });
});

//get method will get all  users and sort it by first Name
router.get("/api/users/byfirstName", (req, res) => {
    User.find({}).sort({ firstName: -1 })
    .then(dbEntry => {
        res.json(dbEntry);
    })
    .catch(error => {
        res.status(400).json(error);
    });
});

//get method will get all users and sort it by last Name
router.get("/api/users/bylastName", (req, res) => {
    User.find({}).sort({ lastName: -1 })
    .then(dbEntry => {
        res.json(dbEntry);
    })
    .catch(error => {
        res.status(400).json(error);
    });
});

//get method will to find a specific user from the database
router.get("/api/users/:userName", (req, res) => {
    //collect the username we are searching for out of the request parameters
    const searchUser = req.params.userName;

    User.find({ userName: searchUser }).then(dbEntry => {
        res.json(dbEntry);
    }).catch(error => {
        res.status(400).json(error);
    });
});

module.exports = router;