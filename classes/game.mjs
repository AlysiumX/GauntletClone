
export default class Game
{
    constructor(width, height)
    {
        this.width = width;
        this.height = height;
    }

    //TODO : Get time from engine.
    update()
    {

    }

    render(ctx)
    {
        ctx.fillStyle = "Red";
        ctx.fillRect(0, 0, this.width, this.height);
    }
}