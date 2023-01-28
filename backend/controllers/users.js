// CommonJS syntax
const { v4: uuidv4 } = require('uuid');
const { MongoClient } = require('mongodb');

const getUser = async (req, res) => {
   const client = new MongoClient(process.env.ATLAS_URI);
   try {
      console.log('Connecting to db...')
      await client.connect()
      console.log('Connection Made!')
      const database = client.db('app-data')
      const users = database.collection('users')
      const returnedUsers = await users.find().toArray()
      console.log('Found!')
      res.send(returnedUsers)
   } finally {
      await client.close()
   }
}

const createUser = async (req, res) => {
   const client = new MongoClient(process.env.ATLAS_URI);
   try {
      console.log('Connecting to db...')
      await client.connect()
      console.log('Connection Made!')
      const database = client.db('app-data')
      const users = database.collection('users')
      console.log('Found!')
      await users.insertOne(req.body);
      res.send(`Added to database`)
   } finally {
      await client.close()
   }
}

const getUserid = (req, res) => {
   const {id} = req.params;
   const foundUser = users.find((user) => user.id === id);
   res.send(foundUser);
}

const deleteUser = (req, res) => {
   const {id} = req.params;
   users = users.filter((user) => user.id !== id);
   res.send(`User with the id: ${id} deleted from the database`);
}

const updateUser = (req, res) => {
   const { id } = req.params;
   const { firstName, lastName, age } = req.body;

   const user = users.find((user) => user.id === id);

   if (firstName) user.firstName = firstName;
   if (lastName) user.lastName = lastName;
   if (age) user.age = age;

   res.send(`User with the id ${id} has been updated`);
}

module.exports = {
   getUser,
   createUser,
   getUserid,
   deleteUser,
   updateUser
}
