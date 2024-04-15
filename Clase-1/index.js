const http = require('node:http')
const pc = require('picocolors')
const { findAvaliablePort } = require('../port')
const desiredPORT = process.env.PORT ?? 3000

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end('Hello World\n')
})

findAvaliablePort(desiredPORT).then(port => {
  server.listen(port, () => {
    console.log(pc.green(`Server running at http://localhost:${port}/`))
  })
})
