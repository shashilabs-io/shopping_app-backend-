require('dotenv').config();
const app = require('./src/app');
const connectDB = require('./src/db/db');
const { connect } = require('./src/broker/broker');

const PORT = process.env.PORT;

connectDB();

connect();

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`);
});