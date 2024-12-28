// Create web server
// Use express to create the web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');

// Use the body-parser middleware
app.use(bodyParser.json());

// Use the express static middleware
app.use(express.static('public'));

// Use the express static middleware
app.use(express.static('public'));

// Read the comments.json file
// Store the comments in the comments variable
let comments = JSON.parse(fs.readFileSync('comments.json'));

// Create a new comment
// POST /comments
app.post('/comments', (req, res) => {
  // Get the comment from the request body
  let comment = req.body;

  // Add the comment to the comments array
  comments.push(comment);

  // Write the comments array to the comments.json file
  fs.writeFileSync('comments.json', JSON.stringify(comments, null, 2));

  // Send a response with the new comment
  res.json(comment);
});

// Get all comments
// GET /comments
app.get('/comments', (req, res) => {
  // Send the comments array as a response
  res.json(comments);
});

// Start the web server on port 3000
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});