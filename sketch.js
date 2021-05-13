var eye1;
var eye2;

function setup() {
createCanvas(400, 400);
noStroke()
eye1 = {
x: 444 / 2 - 60,
y: 300 / 2,
rad:80
};
eye2 = {
x: 444 / 2 + 30,
y: 300 / 2,
rad: 80
}
}

function draw() {
  background(220);

  var ang = atan2(mouseY - eye1.y, mouseX - eye1.x);
      
  fill('#FDFEFE')
  ellipse(eye1.x, eye1.y, eye1.rad);
  fill('#17202A');
  ellipse(eye1.x + (eye1.rad / 6) * cos(ang), eye1.y + (eye1.rad / 6) * sin(ang), eye1.rad / 2);
  
  ang = atan2(mouseY - eye2.y, mouseX - eye2.x);
  
  fill('#FDFEFE');
  ellipse(eye2.x, eye2.y, eye2.rad);
  fill('#17202A');
  ellipse(eye2.x + (eye2.rad / 6) * cos(ang), eye2.y + (eye2.rad / 6) * sin(ang), eye2.rad / 2);
}