export default class CanvasWrapper
{
    constructor(canvas)
    {
        //TODO : Maybe implement types?
        this.canvas = canvas;
        this.context = canvas.getContext('2d');
        this.defaultBackColor = ""; //TODO : Implement
    }

    setCanvasSize(width, height)
    {
        this.canvas.width = width;
        this.canvas.height = height;
    }

    setBackgroundColor(color)
    {
        this.context.fillStyle = color;
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }

    resetCanvas()
    {
        this.context.fillStyle = "Black";
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }

    get2dContext()
    {
        return this.context;
    }
}