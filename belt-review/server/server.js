const express = require('express');
const cors = require('cors');
const { catRouter } = require('./routes/cat.routes');

const port = 8000;

require('./config/mongoose.config');

const app = express();

app.use(cors());

app.use(express.json());

app.use('/api/cats', catRouter);

app.listen(port, () =>
  console.log(`Listening on port ${port} for REQuests to RESpond to.`)
);