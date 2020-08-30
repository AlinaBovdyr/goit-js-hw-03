const findBestEmployee = function (employees) {
  // 'use strict';
  const keys = Object.keys(employees);
  let maxValue = 0;
  let bestEmployee = '';

  for (const key of keys) {
    if (employees[key] > maxValue) {
      maxValue = employees[key];
      bestEmployee = key;
    }
  }

  return bestEmployee;
};

// Объекты и ожидаемый результат
const developers = {
  ann: 29,
  david: 35,
  helen: 1,
  lorence: 99,
};
console.log(findBestEmployee(developers));
// 'lorence'

const supports = {
  poly: 12,
  mango: 17,
  ajax: 4,
};
console.log(findBestEmployee(supports));
// 'mango'

const sellers = {
  lux: 147,
  david: 21,
  kiwi: 19,
  chelsy: 38,
};
console.log(findBestEmployee(sellers));
// 'lux'

/* I */
// const keys = Object.keys(employees);
// let bestEmployee = '';

// if (keys.length !== 0) {
//   const values = Object.values(employees);
//   let maxValue = values[0];

//   for (const value of values) {
//     if (value > maxValue) {
//       maxValue = value;
//     }
//   }

//   bestEmployee = keys[values.indexOf(maxValue)];
// }

// return bestEmployee;

/* II */
// const keys = Object.keys(employees);
// const value = [];
// let bestEmployee = '';

// if (keys.length !== 0) {
//   for (const key of keys) {
//     value.push(employees[key]);
//     bestEmployee = keys[value.indexOf(Math.max(...value))];
//   }
// }

// return bestEmployee;
