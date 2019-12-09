import CanvasWrapper from '../classes/canvasWrapper.mjs';
export default class BrowserWrapper
{
    constructor(window, document)
    {
        this.window = window;
        this.document = document;
    }

    createCanvas(width, height)
    {
        var canvas = new CanvasWrapper(this.document.createElement('canvas'));
        canvas.setCanvasSize(width, height);
        return canvas;
    }

    addToBody(item)
    {
        this.document.body.appendChild(item);
    }

    setRequestAnimationFrame(loop)
    {
        window.requestAnimationFrame(loop);
    }
}