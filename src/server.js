const express = require('express')
const app = express()

app.use('/public', express.static('public'))
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
  res.render('pages/index', {
    title: 'OpenFi Network'
  });
});

app.get('/dashboard/devices', (req, res) => {
  res.render('pages/dashboard/devices', {
    title: 'OpenFi - Devices'
  });
});


// Routes
const apiRoutes = require('./routes/api.routes');
const webRoutes = require('./routes/web.routes');

app.use('/api', apiRoutes);
app.use('/', webRoutes);


// Error responses
app.use((req, res) => {
  res.status(404).render('pages/misc/404');
});

// Extras
app.listen(80, () => {
  console.log(`all ready; http://localhost:80`)
})