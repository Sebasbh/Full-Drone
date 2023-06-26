// index.js
const app = require('./config/server');
const connectToDatabase = require('./config/database');
module.exports = connectToDatabase;


connectToDatabase()
  .then(() => {
    const port = 3000;
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error);
    process.exit(1);
  });
