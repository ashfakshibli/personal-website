const responseHeaders = {
  'Cache-Control': 'no-store, max-age=0',
  'Content-Type': 'text/plain; charset=utf-8',
  'X-Robots-Tag': 'noindex, noarchive'
};

export function GET() {
  return new Response('This document has been permanently removed.\n', {
    status: 410,
    headers: responseHeaders
  });
}

export function HEAD() {
  return new Response(null, {
    status: 410,
    headers: responseHeaders
  });
}
