const fruits = [
  {
    fruitId: 1,
    fruitName: 'Apel',
    fruitType: 'IMPORT',
    stock: 10,
  },
  {
    fruitId: 2,
    fruitName: 'Kurma',
    fruitType: 'IMPORT',
    stock: 20,
  },
  {
    fruitId: 3,
    fruitName: 'apel',
    fruitType: 'IMPORT',
    stock: 50,
  },
  {
    fruitId: 4,
    fruitName: 'Manggis',
    fruitType: 'LOCAL',
    stock: 100,
  },
  {
    fruitId: 5,
    fruitName: 'Jeruk bali',
    fruitType: 'LOCAL',
    stock: 10,
  },
  {
    fruitId: 5,
    fruitName: 'KURMA',
    fruitType: 'IMPORT',
    stock: 20,
  },
  {
    fruitId: 5,
    fruitName: 'Salak',
    fruitType: 'LOCAL',
    stock: 150,
  },
];

function capitalize(str) {
  return str
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

function splitFruitByType(fruits, type) {
  return fruits.filter((fruit) => fruit.fruitType === type);
}

function sumByStock(data) {
  return data.reduce((acc, curr) => acc + curr.stock, 0);
}

function getFruitName(data) {
  return [
    ...new Set(data.map((fruit) => capitalize(fruit.fruitName.toLowerCase()))),
  ];
}

function getFruitsByType(data) {
  let groupFruits = {};
  const types = [...new Set(data.map((fruit) => fruit.fruitType))];

  for (let i = 0; i < types.length; i++) {
    let type = types[i];
    let filteredFruits = splitFruitByType(data, type);
    let fruitNames = getFruitName(filteredFruits);
    groupFruits[type] = fruitNames;
  }

  return groupFruits;
}

function getStockPerType(data) {
  let stockByType = {};
  const types = [...new Set(data.map((fruit) => fruit.fruitType))];

  for (let i = 0; i < types.length; i++) {
    let type = types[i];
    let filteredFruits = splitFruitByType(data, type);
    stockByType[type] = sumByStock(filteredFruits);
  }
  return stockByType;
}

console.log('buah yang dimiliki andi:', getFruitName(fruits));
const groupedFruits = getFruitsByType(fruits);
console.log('buah dalam setiap wadah:', groupedFruits);
console.log('jumlah wadah yang dibutuhkan:', Object.keys(groupedFruits).length);
console.log('total stock per wadah:', getStockPerType(fruits));
