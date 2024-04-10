const stockItem = {
  id: 54,
  price: 1.32,
  name: "Apple",
  quantity: 6,
};

console.log(Object.entries(stockItem));
/*
[
  [ 'id', 54 ],
  [ 'price', 1.32 ],
  [ 'name', 'Apple' ],
  [ 'quantity', 6 ]
]
*/

for (const item of Object.values(stockItem)) {
  console.log(item);
}
