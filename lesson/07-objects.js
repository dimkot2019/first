const obj = {
  name: 'Ivan'
};

// Три представления строки
const a = 'строка №1' + obj;
const b = "строка №2" + obj;
const c = `строка №3 ${obj}`;

// Определить является ли свойство свойством объекта или это свойство его прототипа
obj.hasOwnProperty();

// Свойство отвечает за отображение объекта как строка
obj.toString = function () {
  return ''; // Функция должна вернуть строку
};

// Свойство отвечает за отображение объекта как число
obj.valueOf = function () {
  return 5; // Функция должна вернуть число
};

const obj_child = Object.create(obj, {
  name: {writable: false, value: 'Petr', configurable: true, enumerable: true},
  age: {writable: true, value: 5, configurable: true},
});

obj_child.name = 'Ivan';

const Car = {
  _container: {name: 'Запаска', volume: 50},
  _containerVolume: 100,
  get container() {
    return this._container;
  },
  set container(obj) {
    if (obj.volume < this._containerVolume) {
      this._container = obj;
    }
  }
};

Car.container = {name: 'Слон', volume: 9};

console.log(Car.container);

const phone = {
  model: 'iPhone',
  _year: '1980',
  get year() {
    return Number(this._year);
  },
  set year(year) {
    this._year = String(year);
  },
};

phone.model = 'sdfsdf';
phone.model;

phone.year = 9000;

// Функции конструкции
function Student(name, surname, group) {
  this.name = name;
  this.surname = surname;
  this.group = group;
  this.sayHello = function () {
    console.log(`Привет! Меня зовут ${this.name}`)
  };
}

const ivan = new Student('Ivan', 'Petrov', 5);

ivan.sayHello();

// Создание конструкторов через классы
class StudentClass {
  static groupList = [5, 6, 1, 4];

  constructor(name, surname, group) {
    this.name = name;
    this.surname = surname;
    this.group = StudentClass.groupList.includes(group) ? group : 0;

    this._isDrink = false;
  }

  sayHello() {
    console.log(`Привет! Меня зовут ${this.name}`);
  }

  get isDrink() {
    return this._isDrink;
  }

  set isDrink(value) {
    this._isDrink = value;
  }
}

const petr = new StudentClass('Petr', 'Sidorov', 7);

const room = {
  width: 100,
  height: 100,
  depth: 100,
  furniture: ['Стул', 'Стол', 'Кровать'],
  light: {
    levelOfIllumination: 5,
    count: 10
  },
};

room.furniture[1]

const room_2 = {};

const variable = 'furndffdg';

room_2.width = 200;
room_2.height = 200;
room_2[variable] = 500;

function addVariableToObject(value) {
  room_2[value] = null;
}

addVariableToObject('dfgdfg');
addVariableToObject('dfgdfg2');
addVariableToObject('dfgdfg3');
addVariableToObject('dfgdfg23');

room_2.light = {};
room_2.light.levelOfIllumination = 5;
room_2.light.count = 3;