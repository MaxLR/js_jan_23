// Import installed package from node_modules.
const mongoose = require('mongoose');

const dbName = 'belt-review';

mongoose
    .connect(`mongodb://127.0.0.1:27017/${dbName}`, {
        // These may not be needed in newest version?
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log(`Successfully connected to ${dbName}`);
    })
    .catch((error) =>
        console.log(`mongoose connection to ${dbName} failed:`, error)
    );
