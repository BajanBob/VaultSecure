// Copies the app's third-party libraries from node_modules into www/vendor so the app works offline.
const fs = require('fs');
const path = require('path');
const LIBS = [["qrcode-generator","qrcode.js","qrcode.js"],["jsqr","dist/jsQR.js","jsQR.js"],["jszip","dist/jszip.min.js","jszip.min.js"]];
fs.mkdirSync(path.join('www', 'vendor'), { recursive: true });
for (const [pkg, from, to] of LIBS) {
  fs.copyFileSync(path.join('node_modules', pkg, from), path.join('www', 'vendor', to));
  console.log('vendor:', pkg, '->', 'www/vendor/' + to);
}
