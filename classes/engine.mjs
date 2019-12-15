const {ipcRenderer} = require('electron');
export default class Engine
{
    constructor(browserWrapper)
    {      
        this.browserWrapper = browserWrapper;
        this.game = "";
        this.gameCanvas = "";
        this.gameContext = "";

        this.attemptedFps = 1000 / 60;
        this.lastFrameTime = 0;

        // Created for debug purposes
        ipcRenderer.on('message-sent', (event, message) => { console.log(message); })
        
        ipcRenderer.on('screen-size-max', (event, width, height) => {
            //This for is maximizing the screen.
            //TODO : This keep the scaling at 3, we need to actually scale the game 
            //up to match the window.
            let scaledDownWidth = width / this.game.scale;
            let scaledDownHeight = height / this.game.scale;
            this.game.width = scaledDownWidth;
            this.game.height = scaledDownHeight;
            this.gameCanvas.setCanvasSize(width, height);
            this.scaleContent();
        });
    }

    host(game)
    {
        this.game = game;
        this.gameCanvas = this.browserWrapper.createCanvas(
            this.game.width * this.game.scale, 
            this.game.height * this.game.scale);
        this.gameContext = this.gameCanvas.get2dContext();
        this.browserWrapper.addToBody(this.gameCanvas.canvas);
        this.scaleContent();
        ipcRenderer.send('change-screen-size', game.width * game.scale, game.height * game.scale);
        this.gameLoop();
    }

    scaleContent()
    {
        this.gameContext.scale(this.game.scale, this.game.scale);
    }

    //TODO : Look into pixi integration.
    //TODO : Allowing setting fps.
    //https://stackoverflow.com/questions/19764018/controlling-fps-with-requestanimationframe
    gameLoop()
    {
        this.update();
        this.render();
        this.browserWrapper.setRequestAnimationFrame(this.gameLoop.bind(this));
    }

    update()
    {
        let currentFrameTime = new Date().getTime();
        let deltaTime = 0;
        if(this.lastFrameTime)
            deltaTime = (currentFrameTime - this.lastFrameTime) / this.attemptedFps;
            
        this.lastFrameTime = currentFrameTime;
        
        if(this.game.shouldBeFullScreen && !this.game.isFullScreen)
        {
            this.game.isFullScreen = true;
            ipcRenderer.send('set-full-screen', true);
        }

        this.game.update(deltaTime);
    }

    //TODO : More of a thought, but I would like to reset the canvas here so we 
    //dont have to worrying about it in the game class. I will think about this 
    //later
    render()
    {
        this.gameCanvas.resetCanvas();
        this.game.render(this.gameContext);
    }
}