const express = require('express');

const router = express.Router();

// @route GET api/users
// @desc Test Route
// @access public
router.get('/', (req, res) => {
  res.send('User Route');
});

module.exports = router;