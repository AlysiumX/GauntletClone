export default class Game
{
    constructor(width, height)
    {
        this.width = width;
        this.height = height;
        this.scale = 1;
        this.shouldBeFullScreen = false;
        this.isFullScreen = false;

        this.testImage = new Image();
        this.testImage.src = "content/img/title.png";
        this.testImageX = 0;

        this.startGameImage = new Image();
        this.startGameImage.src = "content/img/StartGame.png";
        this.startGameImageX = 120;
        this.startGameImageY = 120;
    }

    //TODO : Get time from engine.
    update(deltaTime)
    {

    }

    render(ctx)
    {
        ctx.drawImage(this.testImage, this.testImageX, 0);
        ctx.drawImage(this.startGameImage, this.startGameImageX, this.startGameImageY);
    }
}