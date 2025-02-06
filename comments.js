// Create web server
// Run server
// Listen for requests
// Respond to requests

// Import the express library
const express = require('express');
// Create an express application
const app = express();
// Import the comments module
const comments = require('./comments');

// Create a route for GET /comments
app.get('/comments', (req, res) => {
  // Send back the comments array
  res.json(comments);
});

// Create a route for POST /comments
app.post('/comments', (req, res) => {
  // Get the comment from the request body
  const comment = req.body.comment;
  // Add the comment to the array
  comments.push(comment);
  // Send back the updated array
  res.json(comments);
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

// Run the server with node comments.js
// Make a GET request to http://localhost:3000/comments
// Make a POST request to http://localhost:3000/comments with a JSON body
// Check the comments array to see the new comment
// Make another GET request to http://localhost:3000/comments to see the updated array