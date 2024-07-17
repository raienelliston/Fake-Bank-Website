const express = require('express');
const router = express.Router();

exports.status = (req, res) => {
    res.status(200).json({ status: 'ok' });
};