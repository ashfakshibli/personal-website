const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

const app = next({ dev: false })
const handle = app.getRequestHandler()
const port = parseInt(process.env.PORT || '3000', 10)
const removedCvPath = '/Ashfak_Shibli_CV_January_2026.pdf'

function sendRemovedCvResponse(req, res) {
  res.writeHead(410, {
    'Cache-Control': 'no-store, max-age=0',
    'Content-Type': 'text/plain; charset=utf-8',
    'X-Robots-Tag': 'noindex, noarchive'
  })

  if (req.method === 'HEAD') {
    res.end()
    return
  }

  res.end('This document has been permanently removed.\n')
}

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true)

    if (parsedUrl.pathname === removedCvPath) {
      sendRemovedCvResponse(req, res)
      return
    }

    handle(req, res, parsedUrl)
  }).listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on port ${port}`)
  })
})
