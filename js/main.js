$(function(){

  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
ctx.beginPath();
ctx.moveTo(10, 100);
ctx.bezierCurveTo(20, 100, 40, 30, 1000, 90);
ctx.lineWidth = 5;
ctx.strokeStyle = "#374ac8";
ctx.stroke();

// SLIDEUP ON SCROLL


}) //end