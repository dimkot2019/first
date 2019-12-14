//  Строковое преобразование. Конкатенация всегда имеет приоритет над сложением.

console.log(34 + 'slove' + true);

// Численное преобразование
/*
* null - 0
* undefined - NaN
* true/false - 1/0
* строка - пустая = 0, не пустая строка = NaN
* */

console.log(34 - '');
console.log(34 + true);

// Логическое преобразование
/*
null, undefined = false
все числа = true, 0 = false
все строки = true, пустая строка = false
все объекты = true
 */
const x = 'd';
console.log({x});

// 11. Дано два целых числа a, b. Проверить истинность высказывания (a >= 0) и (b <= 3)
function checkTruth (a, b) {
    return a >= 0 && b <= 3;
}

const testCheckTruth = checkTruth(4, -90);
console.log('test-01', testCheckTruth);
