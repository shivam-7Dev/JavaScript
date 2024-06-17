const cardsGenerators = {
  suits: ["♣️", "♦️", "♥️", "♠️"],
  court: ["J", "Q", "K", "A"],
  [Symbol.iterator]: function () {
    let suitIndex = 0;
    let valueIndex = 2;

    return {
      next: () => {
        if (suitIndex < cardsGenerators.suits.length) {
          const suit = cardsGenerators.suits[suitIndex];

          if (valueIndex <= 10) {
            return {
              value: suit + valueIndex++,
              done: false,
            };
          } else if (valueIndex <= 14) {
            const courtCard = cardsGenerators.court[valueIndex - 11];
            valueIndex++;
            return {
              value: suit + courtCard,
              done: false,
            };
          } else {
            valueIndex = 2;
            suitIndex++;
            if (suitIndex < cardsGenerators.suits.length) {
              const suit = cardsGenerators.suits[suitIndex];
              return {
                value: suit + valueIndex++,
                done: false,
              };
            }
          }
        }
        return { done: true };
      },
    };
  },
};

for (const card of cardsGenerators) {
  console.log(card);
}
