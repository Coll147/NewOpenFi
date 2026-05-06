const express = require('express');
const router = express.Router();

router.get('/devices', (req, res) => {
  res.render('pages/dashboard/devices', {
    title: 'OpenFi - Devices'
  });
});

router.get('/system', (req, res) => {
  res.render('pages/dashboard/system', {
    title: 'OpenFi - System'
  });
});

module.exports = router;
