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
    fruitName: 'Jeruk Bali',
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

function toLower(data) {
  return data.map((data) => ({
    ...data,
    fruitName: data.fruitName.toLowerCase(),
  }));
}

// 1
function getFruitName(data) {
  return data.filter(
    (currFruit, idx) =>
      idx === data.findIndex((fruit) => currFruit.fruitName === fruit.fruitName)
  );
}

// 2
function splitFruitByType(data, type) {
  return data.filter((fruit) => fruit.fruitType === type);
}

// 3
function sumByStock(data) {
  return data.reduce((acc, curr) => acc + curr.stock, 0);
}

let someFruits = toLower(fruits);
someFruits = getFruitName(someFruits);

let fruitsImport = splitFruitByType(someFruits, 'IMPORT');
let fruitsLocal = splitFruitByType(someFruits, 'LOCAL');

let sumFruitsImport = sumByStock(fruitsImport);
let sumFruitsLocal = sumByStock(fruitsLocal);
