// “routes/user.js”: Exposes the REST API endpoints and performs their business logic against the Atlas cluster.
const express = require('express');
const { getUser, createUser, getUserid, deleteUser, updateUser } = require("../controllers/users.js")

const router = express.Router();

// all routes in here are starting with /users
router.get('/', getUser)
router.post('/', createUser)
router.get('/:id', getUserid)
router.delete('/:id', deleteUser)
router.patch('/:id', updateUser)

module.exports = router;