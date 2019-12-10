//TODO : Can I create a router for this?
const {ipcRenderer} = require('electron');
import BrowserWrapper from '../classes/browserWrapper.mjs';
import Engine from '../classes/engine.mjs';
import Game from '../classes/game.mjs';


window.onload = function()
{
    let browserWrapper = new BrowserWrapper(window, document);
    let engine = new Engine(browserWrapper);

    let width = 320;
    let height = 240;

    ipcRenderer.send('change-screen-size');

    let game = new Game(width, height);
    game.scale = 3;
    engine.host(game);
}