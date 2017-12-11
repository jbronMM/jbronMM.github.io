var player;
var enemy;
var enemy2;
function setup() {
    createCanvas(500, 500);
    player = createSprite(width/2, height-23, 40, 40);
    enemy = createSprite(width/2, 0, 10, 30);
    enemy2 = createSprite(width, height/2,30, 10)
}
function draw() {
  
    background(0, 11, 85)
    drawSprites();
    if (keyDown(RIGHT_ARROW) && player.position.x < width-24) {
    player.position.x = player.position.x + 2;
    }
     if (keyDown(LEFT_ARROW) && player.position.x > 24) {
    player.position.x = player.position.x - 2;
  }
   if (keyDown(UP_ARROW)&& player.position.y > 24) {
    player.position.y = player.position.y - 3;
  }
   if (keyDown(DOWN_ARROW)&& player.position.y < height-24) {
    player.position.y = player.position.y + 3;
  }
  enemy.position.y = enemy.position.y + 5;
  if (enemy.position.y > height) {
  enemy.position.y = 0;
  enemy.position.x = random(5, width-5);
  }
  enemy2.position.x = enemy2.position.x - 5;
  if (enemy2.position.x > width) {
  enemy2.position.x = 0;
  enemy2.position.y = random(5, width-5);
  }
  if (enemy.overlap(player)) {
    gameOver();
  }
   if (enemy2.overlap(player)) {
    gameOver();
   }
}
  
  function gameOver() {
  background(0);
  textAlign(CENTER);
  fill("white");
  text("Game Over!", width/2, height/2);
}
