const express = require('express');
const app = express();
const PORT = 3000;

// Simple route
app.get('/', (req, res) => {
 res.send('Hello World! This is my demo Node.js app.');
});
// Start server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
}); 
