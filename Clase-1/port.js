const net = require('node:net')

function findAvaliablePort (port) {
  const server = net.createServer()
  return new Promise((resolve, reject) => {
    server.on('error', reject)
    server.listen(port, () => {
      server.close(() => {
        resolve(port)
      })
    })
  })
}

module.exports = { findAvaliablePort }
