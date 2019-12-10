const {app, ipcMain, BrowserWindow, Menu} = require('electron');
const url = require('url');
const path = require('path');



//Set ENV
process.env.NODE_ENV = 'test';

let mainWindow;

//Listen for app to be ready
app.on('ready', function(){
    //Create new window
    mainWindow = new BrowserWindow({
        width: 320 * 3 + 50,
        height: 240 * 3 + 50,
        webPreferences: {
            nodeIntegration: true
        },
        // frame: false, //Left on for debug, plan on turning this off later.
        // transparent: true
    });
    //Load html file into window
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocal:'file:',
        slashes:true
    }));
    mainWindow.on('closed', () => {
        mainWindow = null
    })
    ipcMain.on('change-screen-size', (event, args) =>{
        mainWindow.setSize(320, 240);
    })
    //Build menu from template
    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
    //Insert menu
    Menu.setApplicationMenu(mainMenu);
});

//Create menu template
const mainMenuTemplate = [
    {
        label:'File',
        submenu:[
            {
                label: 'Exit',
                accelerator: process.platform == 'darwin' ? 'Command+Q' : 'Escape', //For dev purposes
                click(){
                    app.quit();
                }
            }
        ]
    }
];

if(process.env.NODE_ENV !== 'production'){
    mainMenuTemplate.push({
        label: 'Developer Tools',
        submenu:[
            {
                label: 'Toggle DevTools',
                accelerator: process.platform == 'darwin' ? 'Command+I' : 'F12',
                click(item, focusedWindow){
                    focusedWindow.toggleDevTools();
                }
            },
            {
                role: 'reload'
            }
        ]
    });
}