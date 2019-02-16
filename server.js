'use strict';

const express = require('express');

const app = express(); 
require('dotenv').config();

const PORT = process.env.PORT || 3000;

//where to server html and such from.
app.use(express.static('./public'));

app.get('/hello', (request, response)=>{
  response.send('hello');
})

app.get('/data', (request, response) => {
  let airplanes = {
    departure: Date.now(),
    canFly: true,
    pilot: 'Well Trained',
    wantsASnack : true,
  }

  response.status(200).json(airplanes);
});

app.get('/', (request, response) => {
  response.status(200).redirect('/index.html');
});

app.use('*', (request, response) => response.send(`Sorry, that route does not exist`));

app.listen(PORT, () => console.log(`listening on port ${PORT}`));

