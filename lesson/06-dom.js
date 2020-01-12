// поиск элементов DOM

// Получить элемент по уникальному id. Сразу возвращает элемент
const counter = document.getElementById('counter-23');

// Всегда возвращают массивы элементов
const rowsArray = document.getElementsByClassName('row');
const passwordsArray = document.getElementsByName('password');
const spansArray = document.getElementsByTagName('span');

// Эти методы есть у всех объектов DOM'a

//  Методы DOM объектов

// Все текстовое содержимое между тегами
counter.textContent = '';

// HTML содержимое
counter.innerHTML = '';

// class
counter.className = '';

// доступ к любым атрибутам
// получить содердимое атрибута
counter.getAttribute('name');
counter.setAttribute('name', 'zamena');

// Создание элементов DOM и перемещение элементов
// Создать элемент
const btn = document.createElement('button');

// Положить элемент в конец его детей
document.body.appendChild(btn);

// Удалить элемент
document.body.removeChild(btn);

// Копирование элемента
const btn2 = btn.cloneNode(true);