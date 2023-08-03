const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Set the response headers
  res.writeHead(200, {'Content-Type': 'text/plain'});

  // Send the message as a response
  res.end('I Am Happy To Learn Full Stack Web Development From PW Skills!\n');
});

// Set the server port
const port = 5000;

// Start the server
server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
