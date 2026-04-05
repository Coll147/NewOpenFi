const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('pages/index', {
    title: 'OpenFi Network'
  });
});

router.get('/dashboard/devices', (req, res) => {
  res.render('pages/dashboard/devices', {
    title: 'OpenFi - Devices'
  });
});

router.get('/dashboard/system', (req, res) => {
  res.render('pages/dashboard/system', {
    title: 'OpenFi - System'
  });
});

module.exports = router;
