import express from 'express';
import bodyParser from 'body-parser';

import usersRoutes from './routes/users.js'; 

const app = express();
const PORT = 5000;

app.use(bodyParser.json()); // indicates that use of json objects

app.use('/users', usersRoutes);

app.get('/', (req, res) => { // sending a get request to our routes
   console.log('[TEST]!');
   res.send('Hello from Homepage.');
} ) 

app.listen(PORT, () => console.log(`Server Running on port: http://localhost:${PORT}`))
