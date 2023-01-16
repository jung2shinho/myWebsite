// CommonJS syntax
const { v4: uuidv4 } = require('uuid');
const { MongoClient } = require('mongodb');

const getEmailList = async (req, res) => {
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

const createEmail = async (req, res) => {
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

const getEmailId = async (req, res) => {
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

const deleteEmail = async (req, res) => {
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
const updateEmail = async (req, res) => {
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
   getEmailList,
   createEmail,
   getEmailId,
   deleteEmail,
   updateEmail
}
