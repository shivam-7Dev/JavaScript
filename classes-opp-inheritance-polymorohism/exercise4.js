/*
    1. Lookup the retro arcade game: Space Invaders
       on Google for some pictures
       Eg: https://en.wikipedia.org/wiki/Space_Invaders

    2. How would you build a class to model the Player
       (Spaceship) and the Enemies (Flying Aliens)?
       * There are multiple different Aliens

    3. Try to think of all the different fields and
       methods each would have in a real game. What 
       would you want to have in them?

    4. Write these out first on paper/text to 
       brainstorm, then implement the classes in JS

    * This is purposefully open-ended to allow you
      the creative freedom to design these classes
*/
class Player {
  constructor() {}
  moveX() {}
  moveY() {}
}
class Enemy {
  hp = 100;
  constructor(name, sprite, hp, score, damage) {
    this.name = name;
    this.sprite = sprite;
    this.hp = hp;
    this.score = score;
    this.damage = damage;
  }
  shoot() {}
  move() {}
}

class Crab extends Enemy {
  constructor(name, sprite, hp, score, damage) {
    super(name, sprite, hp, score, damage);
  }
  move() {
    // crab will move super slowly
  }
  shoot() {
    // light damage
  }
}
class Tank extends Enemy {
  constructor(name, sprite, hp, score, damage) {
    super(name, sprite, hp, score, damage);
  }
  move() {
    // Tank moves very fast
  }
  shoot() {
    //  vey lethal shots
  }
}
