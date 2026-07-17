import { cp, mkdir } from "node:fs/promises";
await mkdir("_site/vendor", { recursive: true });
await cp("index.html", "_site/index.html");
await cp("node_modules/mammoth/mammoth.browser.min.js", "_site/vendor/mammoth.browser.min.js");
await cp("node_modules/pdfjs-dist/legacy/build/pdf.mjs", "_site/vendor/pdf.mjs");
await cp("node_modules/pdfjs-dist/legacy/build/pdf.worker.mjs", "_site/vendor/pdf.worker.mjs");
