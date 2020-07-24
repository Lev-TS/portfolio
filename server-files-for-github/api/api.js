const express = require('express');
const apiRouter = express.Router();
const contactRouter = require('./contact.js');

apiRouter.use('/contact', contactRouter);

module.exports = apiRouter;