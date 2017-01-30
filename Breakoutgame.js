var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.fillstyle = "#0000ff";
ctx.fillRect(60,60,150,75);


ctx.begintPath();
ctx.arc(200,200,40,0,2*Math.PI);
ctx.stroke();