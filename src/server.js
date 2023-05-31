'use strict';

const PORT = process.env.PORT || 3000,
  express = require('express'),
  app = express(),
  mongoose = require('mongoose');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
