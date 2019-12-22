//1.Дан прямоугольник со сторонами a,b.Найти его площадь S.
function rectangleArea (a, b) {
    return a * b;
}
const testrectangleArea = rectangleArea (15, 3.62);
console.log('test01', testrectangleArea);

//2.Дана окружность с диаметром d.Найти её длину L.
function circumference (d) {
    return Math.PI * d;
}
const testcice = circumference (100);
console.log('test02', testcice);

//3.Даны длины ребер прямоугольного параллепипеда a,b,c.Найти его объём V.
function parallelepipedV (a, b, c) {
    return a * b * c;
}
const testpadV = parallelepipedV (3, 5, 10);
console.log('test03', testpadV);

//4.Дано расстояние L в сантиметрах.Найти полное кол-во метров в нём.
function numberTotalMeters (L) {
    return Math.trunc(L / 100);
}
const testnurs = numberTotalMeters (397.5);
console.log('test04', testnurs);

//5.Даны длины ребер прям.параллепипеда a,b,c.Найти площадь всех его сторон S.
function parallelepiped (a, b, c) {
    return 2 * (a * c + a * b + b * c);
}
const testpaed = parallelepiped (1, 2, 3);
console.log('test05', testpaed);

//6.Даны две переменные А и В.Поменять местами их содержимое.Чтобы значение из А лежало В,а значение В в А.
function swapContents (A, B) {
    const C = A;
    A = B;
    B = C;
    return  [A, B];
}
const testswts = swapContents (15, 35);
console.log('test06', testswts);

//7.Дано число a и степень n.Вычислить a в степени n.
function exponentiation (a, n) {
    return a ** n;
}
const testexon = exponentiation (2, 5);
console.log('test07', testexon);

//8.Дано значение градусов в Фаренгейтах.Перевести значения в Цельсий.
function celsium (f) {
    return f / 33.8;
}
const testceum = celsium (159);
console.log('test08', testceum);

//9.Дано двухзначное число.Найти сумму его чисел (левое и правое).
function sumDigitsTwoDigitNumber (x) {
    return Math.trunc(x / 10) + (x % 10);
}
const testsuer = sumDigitsTwoDigitNumber (87);
console.log('test09', testsuer);

//10.Известно,что X кг конфет стоит А рублей.Найти сколько стоит 1 кг конфет.
function oneKgSweets (A, X) {
    return A / X;
}
const testonts = oneKgSweets (353, 1.5);
console.log('test10', testonts);

// Логические выражения
// 11. Дано два целых числа a, b. Проверить истинность высказывания (a >= 0) и (b <= 3)
function checkTruth (a, b) {
    if (a >= 0 && b <= 3) {
        return true;
    } else {
        return false;
    }
}const testchth = checkTruth(15, 2);
console.log('test11', testchth);

// 12. Даны три целых числа a, b, c. Проверить истинность высказывания a < b < c
function checkTruth1 (a, b, c) {
    if (a < b && b < c) {
        return true;
    } else {
        return false;
    }
}
const testchth1 = checkTruth1 (39, 37, 49);
console.log('test12', testchth1);

// 13. Даны два целых числа. Проверить, что хотя бы одно число из двух четное.
function checkParity (a, b) {
    if (a % 2 == 0 || b % 2 == 0) {
        return true;
    } else {
        return false;
    }
}
const test13 = checkParity (25, 368);
console.log('test13', test13);

// 14. Даны три числа a, b, c. Проверить, что среди числел нет повторяющихся.
function noDuplicate (a, b, c) {
    if (a !== b && b !== c) {
        return true;
    } else {
        return false;
    }
}
const test14 = noDuplicate (1.57, 57, 23);
console.log('test14', test14);

// 15. Даны координаты x, y. Проверить, что заданная точка лежит во второй или четвертой координатной четверти.
function secondfourthCoordinateQuarter (x, y) {
    if ((x < 0 && y > 0) || (x > 0 && y < 0)) {
        return true;
    } else {
        return false;
    }
}
const test15 = secondfourthCoordinateQuarter (3, 5);
console.log('test15', test15);

// 16. Даны координаты поля шахматной доски x, y. Проверить какого цвета клетка.
function checkColorCage (x, y) {
    if ((x % 2 !== 0 && y % 2 !== 0) || (x % 2 === 0 && y % 2 === 0)) {
        return 'black cell';
    } else {
        return 'white cell';
    }
}
const test16 = checkColorCage (1, 1);
console.log('test16', test16);

// 17. Даны координаты двух различных полей шахматной доски x1, y1 и x2, y2. Проверить,
//     что конь за один ход может перейти из одной клетки в другую.
function horseRide (x1, x2, y1, y2) {
    if ((Math.abs(x2 - x1) === 1 && Math.abs(y2 - y1) === 2)
        || (Math.abs(x2 - x1) === 2 && Math.abs(y2 - y1) === 1)) {
        return true;
    } else {
        return false;
    }
}
const test17 = horseRide (1, 2, 4, 2);
console.log('test17', test17);

// 18. Дано целое число a. Если оно больше 5, то прибавить к нему 10 и вернуть результат.
function ingr (a) {
    if (a > 5) {
        return a += 10 ;
    } else {
        return false;
    }
}
const test18 = ingr (4);
console.log('test18', test18);

// 19. Даны два числа a, b. Сначало вывести большое из них, а потом меньшее.
function biggerAndSmaller (a, b) {
    if (a > b) {
        return [a, b];
    } else if (a < b) {
        return [b, a];
    } else {
        return false;
    }
}
const t19 = biggerAndSmaller (11, 5);
console.log('t19', t19);

// 20. Даны два числа a, b. Если они оба четные, то сложить их, если нет то умножить друг на друга.
function additionAndMultiplication (a, b) {
    if (a % 2 === 0 && b % 2 === 0) {
        return a + b;
    }   else {
        return a * b;
    }
}
const t20 = additionAndMultiplication (2, 9);
console.log('t20', t20);

// 21. Даны три числа a, b, c. Найти сумму двух наибольших среди них.
function  sumTwoLargestNumbers (a, b, c) {
    if ((a => b)&&(b > c)) {
        return a + b;
        } else if ((a < b)&&(b <= c)) {
            return b + c;
        } else if (((a > b)&&(b < c)) || ((a > b)&&(b < c)&&(a === c))) {
            return a + c;
        } else if ((a < b)&&(b > c)&&(a > c)) {
            return a + b;
        } else if ((a < b)&&(b > c)&&(a < c)) {
            return b + c;
        } else {
            return false;
    }
}
const t21 = sumTwoLargestNumbers (5, 8, 6);
console.log('t21', t21);

// 22. Дано целое число n. Вывести его строку-описание вида "положительное целое число", "отрицательное нечетное число"
function positiveIntegerAndNegativeOddNumber (n) {
    if ( n > 0) {
        return 'положительное целое число';
    }   else if (n % 2 === -1 ) {
        return 'отрицательное нечетное число';
    }   else {
        return false;
    }
}const t22 = positiveIntegerAndNegativeOddNumber (-22);
console.log('t22', t22);

// Условный оператор CASE
// Разрешены: что и раньше + условия SWITCH CASE (if запрещен)

// 1. Дано целое число n от 0 до 6. Вывести строку названия дня недели (0 - понедельник, 1 - вторник и тд)
function weekday (n) {
    switch (n) {
        case 0:
            return '0 - понедельник';
        case 1:
            return '1 - вторник';
        case 2:
            return '2 - среда';
        case 3:
            return '3 - четверг';
        case 4:
            return '4 - пятница';
        case 5:
            return '5 - суббота';
        case 6:
            return '6 - воскресенье';
    }
}
const t01 = weekday (6);
console.log('t01', t01);

// 2. Дан номер месяца - целое число n от 0 до 11.
//     Вывести названия соответствующего времени года. (0 это январь и значит функция выведет зима)
function season (n) {
    switch (n) {
        case 11:
        case  0:
        case  1:
            return 'зима';
        case  2:
        case  3:
        case  4:
            return 'весна';
        case  5:
        case  6:
        case  7:
            return 'лето';
        case  8:
        case  9:
        case 10:
            return 'осень';
    }
}
    const t02 = season (5);
    console.log('t02', t02);

    // 3. Даны два числа a, b и номер арифметического действия n. 0 - сложение, 1 - разница, 2 - умножение, 3 - деление.
//     Выполнить над числами нужное действие и вернуть результат.
    function arithmetic (a, b, n) {
        switch (n) {
            case 0:
                return a + b;
            case 1:
                return a - b;
            case 2:
                return a * b;
            case 3:
                return a / b;
        }
    }
const t03 = arithmetic (3, 2, 2);
console.log('t03', t03);

// 4. Дано целое число n - возраст, в диапозоне от 1 до 90. Вывести правильное описание возраста словами.
//     Например: 35 - тридцать пять лет, 71 - семьдесят один год
function ageWords (n) {
    let c = [];
    switch (n) {
//        n < 20
        case  1:
            c[1] = 'один год';
            return c[1];
        case  2:
            return 'два года';
        case  3:
            return 'три года';
        case  4:
            return 'четыре года';
        case  5:
            return 'пять лет';
        case  6:
            return 'шесть лет';
        case  7:
            return 'семь лет';
        case  8:
            return 'восемь лет';
        case  9:
            return 'девять лет';
        case 10:
            return 'десять лет';
        case 11:
            return 'одиннадцать лет';
        case 12:
            return 'двенадцать лет';
        case 13:
            return 'тринадцать лет';
        case 14:
            return 'четырнадцать лет';
        case 15:
            return 'пятнадцать лет';
        case 16:
            return 'шестнадцать лет';
        case 17:
            return 'семнадцать лет';
        case 18:
            return 'восемнадцать лет';
        case 19:
            return 'девятнадцать лет';

//            n > 19 && n % 10 === 0
//        case  n && n > 19 && n % 10 === 0: return 'case n' + 'лет';
//        let c = [];
        case 20:
            c[20] = 'двадцать';
            return c[n - n % 10] + ' лет';
        case 30:
            c[30] = 'тридцать';
            return c[30] + ' лет';
        case 40:
            c[40] = 'сорок';
            return c[40] + ' лет';
        case 50:
            c[50] = 'пятьдесят';
            return c[50] + ' лет';
        case 60:
            c[60] = 'шестьдесят';
            return c[60] + ' лет';
        case 70:
            c[70] = 'семьдесят';
            return c[70] + ' лет';
        case 80:
            c[80] = 'восемьдесят';
            return c[80] + ' лет';
        case 90:
            c[90] = 'девяносто';
            return c[90] + ' лет';
        case  n:
//            n > 20;
            let a = n % 10;
            let b = c[n - a];
            return b;
    }

}
const t04 = ageWords (21);
console.log('t04', t04);

