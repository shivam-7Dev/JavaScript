/*
    1. Lookup the retro arcade game: Space Invaders
       on Google for some pictures
       Eg: https://en.wikipedia.org/wiki/Space_Invaders

    2. How would you build a class to model the Player
       (Spaceship) and the Enemy (Flying Alien)?

    3. Try to think of all the different fields and
       methods each would have in a real game. What 
       would you want to have in them?

    4. Write these out first on paper/text to 
       brainstorm, then implement the classes in JS

    * This is purposefully open-ended to allow you
      the creative freedom to design these classes
*/

// setting up the player

class Player {
  // setting up the default values
  xPos = 500;
  yPos = 500;
  xPos = 500;
  shootingDelay = 2000;

  constructor() {}
  moveX() {}
  moveY() {}
}

class Enemy {
  hp = 1;
  shootingDelay = 9000; //ms

  constructor(xPos, yPos) {
    this.xPos = xPos;
    this.yPos = yPos;
  }
}

let player = new Player();
const enemy1 = new Enemy(50, 40);

console.log(player);
console.log(enemy1);
