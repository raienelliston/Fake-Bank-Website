const express = require('express');
const router = express.Router();
const accountRoutes = require('./routes/accountRoutes');
const middleware = require('./middleware/middleware');
const cors = require('cors');
const app = express();
require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` })

// Server variables
const port = process.env.PORT || 5000;
const host = process.env.HOST || 'localhost';
const frontendHost = process.env.FRONTEND_URL || 'localhost:3000';

// Middleware
app.use(express.json());
app.use(middleware);
app.use(cors());

// Routes
app.use('/account', accountRoutes);

// Start listening
app.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});