const express = require('express');
const router = express.Router();
const database = require('../models/accountDatabase');

exports.status = (req, res) => {
    res.status(200).json({ status: 'ok' });
};

exports.logic = (req, res) => {
    accountData = database.getAccount(req);
    if (accountData[2] = req.body.password) {
        res.status(200).json(JSON.stringify(accountData[3]));
    } else {
        res.status(400).json({ status: 'error' });
    }
}

exports.accountDetails = (req, res) => {
    res.status(200).json({ status: 'ok' });
}

exports.requestTransfer = (req, res) => {
    res.status(200).json({ status: 'ok' });
}