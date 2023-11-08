const fs = require('fs-extra');

const webConfigPath = './build/web.config';

if (fs.existsSync(webConfigPath)) {
    fs.unlinkSync(webConfigPath);
}

fs.copySync('./public/iisConfig/web.config', webConfigPath);
//fs.copySync('./iisConfig/web.config', webConfigPath);
//Error: ENOENT: no such file or directory, lstat './iisConfig/web.config'