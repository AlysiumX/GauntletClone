import BrowserWrapper from '../classes/browserWrapper.mjs';
import Engine from '../classes/engine.mjs';
import Game from '../classes/game.mjs';

window.onload = function()
{
    let browserWrapper = new BrowserWrapper(window, document);
    let engine = new Engine(browserWrapper);
    
    var game = new Game(500, 500);
    engine.host(game);

        

    // engine.createNewGameWithSize( );

    // let gameCanvas = new CanvasWrapper();
    // gameCanvas.addCanvas();
    // gameCanvas.setCanvasSize(500, 500);
    // gameCanvas.setBackgroundColor("Black");
    // document.body.appendChild(gameCanvas.canvas);
    // var canvas = document.createElement("canvas");
    // canvas.width = 500;
    // canvas.height = 600;
    // var ctx = canvas.getContext("2d");
    // ctx.fillStyle = "Black";
    // ctx.fillRect(0, 0, canvas.width, canvas.height);

    // 
}