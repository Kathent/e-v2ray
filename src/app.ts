import {BrowserWindow, app} from 'electron';

let mainWindow:any;

let createMain = function() {
    mainWindow = new BrowserWindow({width:800, height:600, fullscreen:false});
    mainWindow.webContents.openDevTools();
    mainWindow.on('closed', function() {
        mainWindow = null;
    })

    mainWindow.loadFile('./index.html');
}

app.on('ready', createMain);
app.on('window-all-closed', () => {
    if (process.platform !== 'win32') {
        app.quit();
    }
})
app.on('activate', () => {
    if (mainWindow === null) {
        createMain()
    }
})