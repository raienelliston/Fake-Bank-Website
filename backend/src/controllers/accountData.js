const express = require('express');
const router = express.Router();

exports.status = (req, res) => {
    res.status(200).json({ status: 'ok' });
};

exports.logic = (req, res) => {
    res.status(200).json({ status: 'ok' });
}

exports.accountDetails = (req, res) => {
    res.status(200).json({ status: 'ok' });
}

exports.requestTransfer = (req, res) => {
    res.status(200).json({ status: 'ok' });
}