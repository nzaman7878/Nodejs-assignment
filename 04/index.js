const fs = require('fs');

// Additional advantages of Node.js
const nodejsAdvantages = `
Additional Advantages of Node.js:
Compared to other server-side languages, Node js has distinct advantages. Its asynchronous model and non-blocking I/O operation improve the scalability and performance of web applications built on other frameworks. Node js can easily handle multiple client requests without requiring multiple threads, consuming less memory and resources. Additionally, it is highly scalable and provides high performance. Node js is also flexible with multiple frameworks and makes the development process easier.";

`;

fs.appendFile('nodejs_architecture.txt', nodejsAdvantages, (err) => {
  if (err) {
    console.error('Error appending to file:', err);
  } else {
    console.log('Advantages added to nodejs_architecture.txt');
    
    // Read and print the updated content
    fs.readFile('nodejs_architecture.txt', 'utf8', (readErr, data) => {
      if (readErr) {
        console.error('Error reading file:', readErr);
      } else {
        console.log('Updated content of nodejs_architecture.txt:');
        console.log(data);
      }
    });
  }
});
