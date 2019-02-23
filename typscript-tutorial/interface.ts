interface RectangleOptions{
    width: number;
    length: number;
    height?: number;
}

function drawRectangle(option: RectangleOptions) {
let width = option.width;
let length = option.length;

if(option.height) {
    let height =  option.height;
    // draw a 3D rectangle
}


//draw logic
}
drawRectangle({
    width: 100,
    length: 50
});