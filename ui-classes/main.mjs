import BrowserWrapper from '../classes/browserWrapper.mjs';
import Engine from '../classes/engine.mjs';
import Game from '../classes/game.mjs';

window.onload = function()
{
    let browserWrapper = new BrowserWrapper(window, document);
    let engine = new Engine(browserWrapper);
    
    var game = new Game(1000, 800);
    engine.host(game);
}