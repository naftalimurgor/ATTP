const { exec } = require('child_process');
exec('node ../agent-a/index.js', (err, stdout) => {
    if (err) return console.error(err);
    console.log(stdout);
});