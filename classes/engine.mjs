export default class Engine
{
    constructor(browserWrapper)
    {        
        this.browserWrapper = browserWrapper;
        this.game = "";
        this.gameCanvas = "";
        this.gameContext = "";
    }

    host(game)
    {
        this.game = game;
        this.gameCanvas = this.browserWrapper.createCanvas(game.width, game.height);
        this.gameContext = this.gameCanvas.get2dContext();
        this.browserWrapper.addToBody(this.gameCanvas.canvas);
        this.gameLoop();
    }

    gameLoop()
    {
        this.update();
        this.render();
        this.browserWrapper.setRequestAnimationFrame(this.gameLoop.bind(this));
    }

    update()
    {
        this.game.update();
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