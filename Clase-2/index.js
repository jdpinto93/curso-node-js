const http = require('http')
const desiredPORT = 3000

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  console.log('Request received', req.url)
  res.end('Hello World\n')
})

server.listen(desiredPORT, () => {
  console.log(`Server running at http://localhost:${desiredPORT}/`)
})
