const randomNumber = require("random-number");

function randomItem(array) {
  const randomIndex = randomNumber({
    min: 0,
    max: array.length - 1,
    integer: true,
  });
  return array[randomIndex];
}

const makeDragon = () => {
  const dragonSize = ["big", "medium", "tiny"];
  const dragonAbilities = ["fire", "ice", "lightening"];
  return (
    randomItem(dragonSize) + " " + randomItem(dragonAbilities) + " " + "dragon"
  );
};

const dragonArmy = {
  [Symbol.iterator]: () => {
    return {
      next: () => {
        const enoughRandomSpawned = Math.random() > 0.75;
        if (!enoughRandomSpawned) {
          return {
            value: makeDragon(),
            done: false,
          };
        }
        return {
          done: true,
          value: undefined,
        };
      },
    };
  },
};

/**
 * Each time through the loop, it calls the next method of the iterator object.
 * When next returns { done: true }, the loop stops.
 */
for (const dragon of dragonArmy) {
  console.log("dragon one=>", dragon);
}

const dragonArmyTwo = {
  [Symbol.iterator]: function* () {
    while (true) {
      const enoughRandomSpawned = Math.random() > 0.75;
      if (enoughRandomSpawned) return;
      yield makeDragon();
    }
  },
};

for (const dragon of dragonArmyTwo) {
  console.log("dragon two=>", dragon); // logs 1, 2, 3
}
