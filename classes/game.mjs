export default class Game
{
    constructor(width, height)
    {
        this.width = width;
        this.height = height;
        this.scale = 1;
        this.testImage = new Image();
        this.testImage.src = "content/img/gauntletclasses.png";
        this.testImageX = 0;
        this.testImageSpeed = 0.0;
    }

    //TODO : Get time from engine.
    update(deltaTime)
    {
        this.testImageX += deltaTime * this.testImageSpeed;
    }

    render(ctx)
    {
        ctx.drawImage(this.testImage, this.testImageX, 0);
    }
}