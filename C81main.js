canvas = document.getElementById("myCanvas");
color="red"
width=2
ctx.beginPath();
ctx.strokeStyle = color;
ctx.linewidth=2;
ctx.stroke();
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e)
{
    mouse_x = e.clientX - canvas.offsetLeft;
    mouse_y = e.clientY - canvas.offsetTop;
    circle(mouse_x , mouse_y);
}
function circle(mouse_x , mouse_y)
{
    color = document.getElementById("color").value;
    width = document.getElementById("width").value;
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.arc(mouse_x, mouse_y, 40 ,0 , width * Math.PI);
    ctx.stroke();
}
function clearArea()
{
    ctx.clearRect(0,0,canvas.width,canvas.height);
}