// CommonJS syntax
const { v4: uuidv4 } = require('uuid');
const { MongoClient } = require('mongodb');

const getBlogEntry = async (req, res) => {
   const client = new MongoClient(process.env.ATLAS_URI);
   try {
      await client.connect()
      const database = client.db('app-data')
      const users = database.collection('blog')
      const returnedEmails= await users.find().toArray()
      res.send(returnedEmails)
   } finally {
      await client.close()
   }
}

const createBlogEntry = async (req, res) => {
   const client = new MongoClient(process.env.ATLAS_URI);
   try {
      await client.connect()
      const database = client.db('app-data')
      const users = database.collection('email-list')
      const returnedEmails= await users.find().toArray()
      res.send(returnedEmails)
   } finally {
      await client.close()
   }
}

const getBlogEntryId = async (req, res) => {
   const client = new MongoClient(process.env.ATLAS_URI);
   try {
      await client.connect()
      const database = client.db('app-data')
      const users = database.collection('email-list')
      const returnedEmails= await users.find().toArray()
      res.send(returnedEmails)
   } finally {
      await client.close()
   }
}

const deleteBlogEntryId = async (req, res) => {
   const client = new MongoClient(process.env.ATLAS_URI);
   try {
      await client.connect()
      const database = client.db('app-data')
      const users = database.collection('email-list')
      const returnedEmails= await users.find().toArray()
      res.send(returnedEmails)
   } finally {
      await client.close()
   }
}
const updateBlogEntryId = async (req, res) => {
   const client = new MongoClient(process.env.ATLAS_URI);
   try {
      await client.connect()
      const database = client.db('app-data')
      const users = database.collection('email-list')
      const returnedEmails= await users.find().toArray()
      res.send(returnedEmails)
   } finally {
      await client.close()
   }
}

module.exports = {
   getBlogEntry,
   createBlogEntry,
   getBlogEntryId,
   deleteBlogEntryId,
   updateBlogEntryId
}
