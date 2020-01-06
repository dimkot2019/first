const text = 'This is text for you';

const list = text.split('');

// Массивы

const array = [1, 4, 5, 2, 5, 3];

const forEach = function (array, callback) {
    for (let i = 0; i < array.length; i += 1) {
        callback(array[i]);
    }
};

forEach(array, function (number) {
    // console.log(number);
});

// Перебор всех элементов массива
array.forEach(function (number) {
    // console.log(number);
});

// Мэппинг или преобразование массива
const newArray = array.map(function (number) {
    return number * 2;
});

// Фильтр массива по условию
const filteredArray = array.filter(function (number) {
   return number > 2;
});

// Поиск конкретного элемента в массиве по условию
const findElement = array.find(function (number) {
    return number === 5;
});

// Находит индекс подходящего по условию элемента
const findIndex = array.findIndex(function (number) {
    return number === 3;
});

// Проверка сожержит ли массив элемент
const includes = array.includes(4);

// Проверка, подходят ли ВСЕ элементы массива под условие
const isEvery = array.every(function (number) {
    return number % 2 === 0;
});

// Подходит хотя ОДИН элемент под условие
const isSome = array.some(function (number) {
    return number % 2 === 0;
});

// создать строку из массива
const str = ['I', 'go', 'home'].join(' ');

// По указанному индексу удаляет несколько элементов и может поставить новые на его место.
const students = ['Иван', 'Петр', 'Евгений'];

students.splice(1, 0, 'Мария', 'Анастасия');

// Развернуть массив
const reverseArray = [1, 2, 4].reverse();

// Скопировать массив
const copeArray = array.slice();

// Объединение массивов
const mans = ['Иван', 'Петр'];
const womans = ['Мария', 'Анастасия'];

const studentList = mans.concat(womans);

// Выполнение последовательных действий с элементами массива с сохранением промежуточного результата
const summary = array.reduce(function (prev, current) {
    return prev + current;
});

// Добавить элемент в конец массива
array.push(7);

// Удалить элемент с конца массива
array.pop();

// Добавить элемент в начало массива
array.unshift(-3);

// Удалить элемент в начале массива
array.shift();

// Шесть способов объявить функцию

// 1. Декларативный способ
function func1 () {

}

// 2. Функциональное выражение
const func2 = function () {

};

// 3. Стрелочная функция
const func3 = () => {

};

// 4. Методы объектов
const funcObject = {
    func4() {

    },
};

// 5. Функции генераторы
function * func5 () {

}

// 6. Используя глобальный объект через new
const func6 = new Function('a', 'b', 'return a + b;');



