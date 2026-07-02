const http = require("http");
const fs = require("fs");
const path = require("path");

const root = __dirname;
const port = Number(process.env.PORT || 5178);
const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8"
};

http.createServer((request, response) => {
  const url = new URL(request.url, "http://127.0.0.1");
  const target = path.join(root, url.pathname === "/" ? "index.html" : decodeURIComponent(url.pathname));

  if (!target.startsWith(root)) {
    response.writeHead(403);
    response.end("forbidden");
    return;
  }

  fs.readFile(target, (error, body) => {
    if (error) {
      response.writeHead(404);
      response.end("not found");
      return;
    }

    response.writeHead(200, { "content-type": types[path.extname(target)] || "application/octet-stream" });
    response.end(body);
  });
}).listen(port, "127.0.0.1", () => {
  console.log(`蓮Type: http://127.0.0.1:${port}/`);
});
