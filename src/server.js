require('dotenv').config();

const PORT = process.env.PORT || 3000,
  express = require('express'),
  app = express(),
  mongoose = require('mongoose'),
  { eventLogger, errorHandler } = require('./middleware');

app.use(eventLogger.logger);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', require('./routes'));

app.use(errorHandler);

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CONNECTION, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  } catch (error) {
    console.log('database connection failed. exiting now...');
    console.error(error);
    process.exit(1);
  }
};

start();
