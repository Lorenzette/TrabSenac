const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const authRoutes = require('./routes/auth.routes');
app.use('/auth', authRoutes);

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});
