const fs = require('fs');
const path = require('path');


const logDir = path.join(__dirname, 'Logs');


function removeFiles(dirPath) {
  fs.readdirSync(dirPath).forEach((file) => {
    const filePath = path.join(dirPath, file);
    fs.unlinkSync(filePath);
    console.log(`Delete files...${file}`);
  });
}

if (fs.existsSync(logDir)) {
  removeFiles(logDir);
  fs.rmdirSync(logDir);
  console.log(`Delete directory...${logDir}`);
} else {
  console.log('Directory does not exist.');
}