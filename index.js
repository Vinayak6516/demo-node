const express = require('express');
const app = express();
const PORT = 3000;
var StatsD = require('hot-shots');
var dogstatsd = new StatsD();
dogstatsd.increment('page.views')

app.get('/', (req, res) => {
 res.send("Hello World! This is my demo Node.js app for Better's DevOps Internship.");
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
}); 
