canvas = document.getElementById("olympicrings");
ctx= canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth = 5
;
ctx.arc(215, 190, 70, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 5
;
ctx.arc(370, 190, 70, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 5
;
ctx.arc(525, 190, 70, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "lime";
ctx.lineWidth = 5
;
ctx.arc(450, 280, 70, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "yellow";
ctx.lineWidth = 5
;
ctx.arc(292, 280, 70, 0, 2 * Math.PI);
ctx.stroke();