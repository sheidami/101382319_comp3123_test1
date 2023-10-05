const fs = require('fs');
const path = require('path');

const logDir = path.join(__dirname, 'Logs');


function createDirectory() {
  if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir);
    console.log(`Directory: ${logDir}`);
  }
}

function createLogFiles() {
  console.log('Log files:');
  for (let i = 1; i <= 10; i++) {
    const fileName = `log${i}.txt`;
    const filePath = path.join(logDir, fileName);
    const text = `Log file ${i}.`;

    fs.writeFileSync(filePath, text);
    console.log(`Created file: ${fileName}`);
  }
}


createDirectory();
process.chdir(logDir);
createLogFiles();