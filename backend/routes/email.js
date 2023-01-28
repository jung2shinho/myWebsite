// “routes/user.js”: Exposes the REST API endpoints and performs their business logic against the Atlas cluster.
const express = require('express');
const { getEmail, createEmail, getEmailId,
   deleteEmail, updateEmail } = require("../controllers/email.js")

const router = express.Router();

// all routes in here are starting with /users
router.get('/', getEmail)
router.post('/', createEmail)
router.get('/:id', getEmailId)
router.delete('/:id', deleteEmail)
router.patch('/:id', updateEmail)

module.exports = router;