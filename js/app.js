// Enemies our player must avoid
var Enemy = function(x, y, speed) {
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.score = 0;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    if (this.x + this.speed > 750){
      this.x = -100;
    }
    else {
      this.x += this.speed * dt;
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


// The users player
var Player = function(x, y) {
  this.sprite = 'images/char-horn-girl.png';
  this.x = x;
  this.y = y;
  this.score = 0;
  this.lives = 3;
};
// update player location
Player.prototype.update = function() {
  this.x = this.x;
  this.y = this.y;
};

// Draw the player on the screen, required method for game
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Handle user inputs in terms of how the player moves
Player.prototype.handleInput = function(direction) {
  // movements
  if (direction === 'left') {
    if (this.x - 80 > 0){
      this.x -= 80;
    }
    else {
      this.x = 0;
    }
  }
  if (direction === 'right') {
    if (this.x + 80 < 610){
      this.x += 80;
    }
    else {
      this.x = 610;
    }

  }
  if (direction === 'down') {
    if (this.y + 80 < 400){
      this.y += 80;
    }
    else {
      this.y = 400;
    }
  }
  if (direction === 'up') {
    if (this.y - 80 > -10) {
      this.y -= 80;
    }
    else {
      this.y = -10;
    }
  }
  //TODO add a feature where whent the spacebar is pressed a new game starts
}

// Star object. Player tries to collect them before the enemies.
var Star = function(x, y) {
  this.sprite = 'images/Star.png';
  this.x = x;
  this.y = y;
};

// update the star location randomly
Star.prototype.update = function() {
  this.x = Math.floor(Math.random() * (600));
  this.y = Math.floor(Math.random() * (231) + 70);
};

// draw the star on the canvas
Star.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Place all enemy objects in an array called allEnemies
var enemy1 = new Enemy(-300, 60, 100);
var enemy2 = new Enemy(-100, 140, 80);
var enemy3 = new Enemy(-200, 220, 40);
var enemy4 = new Enemy(-150, 310, 60)
var allEnemies = [enemy1, enemy2, enemy3, enemy4];
// Place the player object in a variable called player
var player = new Player(200, 390);
// Place the star object in a variable called star
var star = new Star(Math.floor(Math.random() * (651)), Math.floor(Math.random() * (231) + 70));
// How many stars the enemy has collected
var enemyScore = 0;


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        32: "space",
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
    player.handleInput(allowedKeys[e.keyCode]);
});
