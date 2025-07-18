const express = require('express');
const app = express();
const PORT = 3000;
var StatsD = require('hot-shots');
var dogstatsd = new StatsD();

// Increment a counter.
dogstatsd.increment('page.views')

app.get('/', (req, res) => {
 res.send('Hello World! This is my demo Node.js app.');
});
// Start server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
}); 
