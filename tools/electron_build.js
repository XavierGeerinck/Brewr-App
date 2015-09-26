require('shelljs/global');

export default async () => {

    var isWin = /^win/.test(process.platform);

    if(isWin) {
        exec(process.cwd() + "/node_modules/electron-prebuilt/dist/electron.exe build");
    } else {
        exec('`pwd`/node_modules/electron-prebuilt/dist/Electron.app/Contents/MacOS/Electron `pwd`/build');
    }
};
