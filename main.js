canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var mouseEvent = "empty";
var lastPosition_Of_X , lastPosition_Of_Y;
color = "black";
width_of_line = 2;

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e)
{
    mouseEvent = "mousedown";
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e)
{
    mouseEvent = "mouseleave";
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e)
{
    mouseEvent = "mouseup";
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e)
{
    currentPosition_Of_X = e.clientX - canvas.offsetLeft;
    currentPosition_Of_Y = e.clientY - canvas.offsetTop;
    
    if (mouseEvent == "mousedown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y coordinates =")
        console.log("x = " + lastPosition_Of_X + "y = " + lastPosition_Of_Y);
        ctx.moveTo(lastPosition_Of_X , lastPosition_Of_Y);

        console.log("Current position of x and y coordinates =")
        console.log("x = " + currentPosition_Of_X + "y = " + currentPosition_Of_Y);
        ctx.lineTo(currentPosition_Of_X , currentPosition_Of_Y);
        ctx.stroke();
    }

    lastPosition_Of_X = currentPosition_Of_X;
    lastPosition_Of_Y = currentPosition_Of_Y;
}