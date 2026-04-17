/* eslint-disable @typescript-eslint/no-require-imports */

const http = require("http");
const fs = require("fs");
const path = require("path");

const port = process.env.PORT || 5000;
const basePath = process.env.BASE_PATH || "/portfolio";
const exportDir = path.resolve(__dirname, "out");

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".map": "application/octet-stream",
  ".woff2": "font/woff2",
  ".woff": "font/woff",
  ".ttf": "font/ttf",
  ".ico": "image/x-icon",
};

function send(res, statusCode, body) {
  res.writeHead(statusCode, { "Content-Type": "text/plain; charset=utf-8" });
  res.end(body);
}

function resolveExportPath(pathname) {
  if (pathname === "/" || pathname === basePath) {
    return { redirect: `${basePath}/` };
  }

  if (!pathname.startsWith(`${basePath}/`)) {
    return { statusCode: 404, body: "Not found" };
  }

  const relativePath = pathname.slice(basePath.length).replace(/^\/+/, "");
  const requestedPath = relativePath === "" ? "index.html" : relativePath;
  const filePath = path.resolve(exportDir, requestedPath);

  if (!filePath.startsWith(`${exportDir}${path.sep}`)) {
    return { statusCode: 403, body: "Forbidden" };
  }

  return { filePath };
}

const server = http.createServer((req, res) => {
  try {
    const url = new URL(req.url || "/", `http://${req.headers.host}`);
    const result = resolveExportPath(url.pathname);

    if (result.redirect) {
      res.writeHead(302, { Location: result.redirect });
      res.end();
      return;
    }

    if (!result.filePath) {
      send(res, result.statusCode || 404, result.body || "Not found");
      return;
    }

    fs.stat(result.filePath, (error, stats) => {
      if (error || !stats.isFile()) {
        send(res, 404, "Not found");
        return;
      }

      const ext = path.extname(result.filePath).toLowerCase();
      const mime = mimeTypes[ext] || "application/octet-stream";

      res.writeHead(200, { "Content-Type": mime });
      fs.createReadStream(result.filePath).pipe(res);
    });
  } catch {
    send(res, 500, "Server error");
  }
});

server.listen(port, () => {
  console.log(`Serving static export at http://localhost:${port}${basePath}/`);
});
