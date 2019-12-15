//TODO : Can I create a router for this?
import BrowserWrapper from '../classes/browserWrapper.mjs';
import Engine from '../classes/engine.mjs';
import Game from '../classes/game.mjs';

window.onload = function()
{
    let browserWrapper = new BrowserWrapper(window, document);
    let engine = new Engine(browserWrapper);
    let width = 320;
    let height = 3 * 320 / 4;
    let game = new Game(width, height);
    game.scale = 3;

    //game.shouldBeFullScreen = true;
    engine.host(game);
}

