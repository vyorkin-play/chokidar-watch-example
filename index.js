const chokidar = require('chokidar');

const pattern = 'examples/**/*.css';
const watcher = chokidar.watch(pattern);

function spy(filePath) {
  console.log('seen: ', filePath);
}

watcher.on('change', spy);
watcher.on('add', spy);
