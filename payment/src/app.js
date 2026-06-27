const cookieParser = require('cookie-parser');
const express = require('express');
const paymentRoutes = require('./routes/payment.routes');

const app = express();

app.use(cookieParser());
app.use(express.json());

app.use('/api/payments', paymentRoutes);

app.get('/', (req,res)=>{
    res.send('Paymnet API is running..');
})

module.exports = app;