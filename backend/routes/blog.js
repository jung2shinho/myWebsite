// “routes/user.js”: Exposes the REST API endpoints and performs their business logic against the Atlas cluster.
const express = require('express');
const { getBlogEntry, createBlogEntry, getBlogEntryId,
   deleteBlogEntryId, updateBlogEntryId } = require("../controllers/blog.js")

const router = express.Router();

// all routes in here are starting with /users
router.get('/', getBlogEntry)
router.post('/', createBlogEntry)
router.get('/:id', getBlogEntryId)
router.delete('/:id', deleteBlogEntryId)
router.patch('/:id', updateBlogEntryId)

module.exports = router;