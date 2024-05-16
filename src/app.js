require('dotenv').config();

const express = require('express');
const app = express();

const userRoutes = require('./routes/userRoutes');

app.use(express.json()); 
app.use('/', userRoutes);



const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
