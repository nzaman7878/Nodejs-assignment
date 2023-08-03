const fs = require('fs');

const architectureInfo = `
Node.js Architecture:
Node.js is built on the V8 JavaScript engine, which is an open-source JavaScript engine developed by Google. It allows JavaScript code to be executed outside the browser, on the server-side.

Node.js Architecture Components:
- V8 Engine: Responsible for executing JavaScript code.
- Libuv: Provides an event loop and I/O functionalities.
- C++ Bindings: Node.js includes C++ bindings that enable JavaScript code to interact with lower-level system resources.
- Node.js Core Modules: A set of essential modules for various tasks.

Node.js Advantages:
- Non-blocking I/O: Node.js is designed to handle asynchronous operations efficiently.
- Scalability: Node.js can handle a large number of concurrent connections.
- Fast Execution: Node.js code is executed quickly due to the V8 engine.
`;

fs.writeFile('nodejs_architecture.txt', architectureInfo, (err) => {
  if (err) {
    console.error('Error writing to file:', err);
  } else {
    console.log('Architecture information written to nodejs_architecture.txt');
  }
});
