const express = require('express');
const router = express.Router();

/* GET Home Page. */
router.get('/', function(req, res, next) {
  res.json('Hello World');
});

module.exports = router;
