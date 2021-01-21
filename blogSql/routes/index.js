const express = require('express');
const router = express.Router();
const db = require('../models/database');
router.use(express.json());
router.use(express.urlencoded({extended: false}));//going to attach body obj to request obj










module.exports = router;