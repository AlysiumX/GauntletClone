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
    }

    host(game)
    {
        this.game = game;
        this.gameCanvas = this.browserWrapper.createCanvas(game.width, game.height);
        this.gameContext = this.gameCanvas.get2dContext();
        this.browserWrapper.addToBody(this.gameCanvas.canvas);
        this.gameLoop();
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