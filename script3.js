/*
1. Написать все условия задач, где их нет.
2. Исправить синтаксические ошибки, чтобы код работал
3. Убедиться, что функции работают правильно
 */



// 0. Даны числа a, b, c. Найти их сумму.

function sumThreeNumbers (a, b, c) {
    return a + b + c;
}

// Переоформить все задачи как указано выше в примере на функции. И таким
// образом решать все задачи далее. Одна задача - одна функция.
//1.Дан прямоугольник со сторонами a,b.Найти его площадь S.
function rectangleArea (a, b) {
    return a * b;
}
//2.Дана окружность с диаметром d.Найти её длину L.
function circumference (d) {
    return Math.PI * d;
}
//3.Даны длины ребер прямоугольного параллепипеда a,b,c.Найти его объём V.
function parallelepipedV (a, b, c) {
    return a * b * c;
}
//4.Дано расстояние L в сантиметрах.Найти полное кол-во метров в нём.
function numberTotalMeters (L) {
    return Math.trunc(L / 100);
}
//5.Даны длины ребер прям.параллепипеда a,b,c.Найти площадь всех его сторон S.
function parallelepiped (a, b, c) {
    return 2 * (a * c + a * b + b * c);
}
//6.Даны две переменные А и В.Поменять местами их содержимое.Чтобы значение из А лежало В,а значение В в А.
function swapContents (A, B) {
    return A = B;
}
//7.Дано число a и степень n.Вычислить a в степени n.
function exponentiation (a, n) {
    return a ** n;
}
//8.Дано значение градусов в Фаренгейтах.Перевести значения в Цельсий.
function celsium (f) {
    return f / 33.8;
}
//9.Дано двухзначное число.Найти сумму его чисел (левое и правое).
function sumDigitsTwoDigitNumber (x) {
    return Math.trunc(x / 10) + (x % 10);
}
//10.Известно,что X кг конфет стоит А рублей.Найти сколько стоит 1 кг конфет.
function oneKgSweets (A, X) {
    return A / X;
}


// Логические выражения

// Блоки IF в независимости от количества строк оборачивают в фигурные скобки {}

function checkMax (a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

// 11. Дано два целых числа a, b. Проверить истинность высказывания (a >= 0) и (b <= 3)
function checkTruth (a, b) {
    if (a >= 0, b <= 3) {
        return true;
    } else {
        return false;
    }
}

// 12. Даны три целых числа a, b, c. Проверить истинность высказывания a < b < c
function checkTruth (a, b, c) {
    if (a < b && b < c) {
        return true;
    } else {
        return false;
    }
}

// 13. Даны два целых числа. Проверить, что хотя бы одно число из двух четное.
function checkParity (a, b) {
    if (a % 2 == 0 || b % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

// 14. Даны три числа a, b, c. Проверить, что среди числел нет повторяющихся.
function noDuplicate (a, b, c) {
    if (a !== b && b !== c) {
        return true;
    } else {
        return false;
    }
}

// 15. Даны координаты x, y. Проверить, что заданная точка лежит во второй или четвертой координатной четверти.
function secondfourthCoordinateQuarter () {
    if ((x < 0, y > 0) || (x > 0, y < 0)) {
        return true;
    } else {
        return false;
    }
}

// 16. Даны координаты поля шахматной доски x, y. Проверить какого цвета клетка.
function checkColortheCage (x, y) {
    if ((x % 2 !== 0, y % 2 !== 0) || (x % 2 == 0, y % 2 == 0)) {
        return 'black cell';
    } else {
        return 'white cell';
    }
}

// 17. Даны координаты двух различных полей шахматной доски x1, y1 и x2, y2. Проверить,
//     что конь за один ход может перейти из одной клетки в другую.
function horseRide (x1, x2, y1, y2) {
    if ((Math.abs(x2 - x1) == 1, Math.abs(y2 - y1) == 2)
        || (Math.abs(x2 - x1) == 2, Math.abs(y2 - y1) == 1)) {
        return true;
    } else {
        return false;
    }
}

// Условные выражения

// 18. Дано целое число a. Если оно больше 5, то прибавить к нему 10 и вернуть результат.
function integ_r (a) {
    if (a > 5) {
        return a += 10 ;
    } else {
        return false;
    }
}

// 19. Даны два числа a, b. Сначало вывести большое из них, а потом меньшее.
function biggerAndSmaller (a, b) {
    if (a > b) {
        return a, b;
    } else if (a < b) {
        return b, a;
    } else {
        return false;
    }
}

// 20. Даны два числа a, b. Если они оба четные, то сложить их, если нет то умножить друг на друга.
function additionAndMultiplication (a, b) {
    if (a % 2 === 0 && b % 2 === 0) {
        return a + b;
    }   else {
        return a * b;
    }
}

// 21. Даны три числа a, b, c. Найти сумму двух наибольших среди них.
function  sumTwoLargestNumbers (a, b, c) {
    if (a > b > c) {
        return a + b;
    }   else if (a < b < c) {
        return b + c;
    }   else if (a > b < c) {
        return a + c;
    }   else {
        return false;
    }
}

// 22. Дано целое число n. Вывести его строку-описание вида "положительное целое число", "отрицательное нечетное число"
function positiveIntegerAndNegativeOddNumber (n) {
    if ( n > 0) {
        return 'положительное целое число';
    }   else if (n % 2 === -1 ) {
        return 'отрицательное нечетное число';
    }   else {
        return false;
    }
}

// Условный оператор CASE
// Разрешены: что и раньше + условия SWITCH CASE (if запрещен)

// 1. Дано целое число n от 0 до 6. Вывести строку названия дня недели (0 - понедельник, 1 - вторник и тд)
function weekday (n) {
    switch (n) {
        case 0:
            return '0 - понедельник';
            break;
        case 1:
            return '1 - вторник';
            break;
        case 2:
            return '2 - среда';
            break;
        case 3:
            return '3 - четверг';
            break;
        case 4:
            return '4 - пятница';
            break;
        case 5:
            return '5 - суббота';
            break;
        case 6:
            return '6 - воскресенье';
            break;
    }
}

// 2. Дан номер месяца - целое число n от 0 до 11.
//     Вывести названия соответствующего времени года. (0 это январь и значит функция выведет зима)
function season (n) {
    switch (n) {
        case 11:
        case  0:
        case  1:
            return 'зима';
            break;
        case  2:
        case  3:
        case  4:
            return 'весна';
            break;
        case  5:
        case  6:
        case  7:
            return 'лето';
            break;
        case  8:
        case  9:
        case 10:
            return 'осень';
            break;
    }
}

// 3. Даны два числа a, b и номер арифметического действия n. 0 - сложение, 1 - разница, 2 - умножение, 3 - деление.
//     Выполнить над числами нужное действие и вернуть результат.
function arithmetic (a, b, n) {
    switch (n) {
        case 0:
            return a + b;
            break;
        case 1:
            return a - b;
            break;
        case 2:
            return a * b;
            break;
        case 3:
            return a / b;
            break;
    }
}

// 4. Дано целое число n - возраст, в диапозоне от 1 до 90. Вывести правильное описание возраста словами.
//     Например: 35 - тридцать пять лет, 71 - семьдесят один год
function ageWords (n) {
    switch (n) {
        n < 20
        case  1: return 'один год';
            break;
        case  2: return 'два года';
            break;
        case  3: return 'три года';
            break;
        case  4: return 'четыре года';
            break;
        case  5: return 'пять лет';
            break;
        case  6: return 'шесть лет';
            break;
        case  7: return 'семь лет';
            break;
        case  8: return 'восемь лет';
            break;
        case  9: return 'девять лет';
            break;
        case 10: return 'десять лет';
            break;
        case 11: return 'одиннадцать лет';
            break;
        case 12: return 'двенадцать лет';
            break;
        case 13: return 'тринадцать лет';
            break;
        case 14: return 'четырнадцать лет';
            break;
        case 15: return 'пятнадцать лет';
            break;
        case 16: return 'шестнадцать лет';
            break;
        case 17: return 'семнадцать лет';
            break;
        case 18: return 'восемнадцать лет';
            brea
        case 19: return 'девятнадцать лет';
            break;
            n > 19 && n % 10 == 0
        case  n: return case n + 'лет';

        case 20: return 'двадцать';
            break;
        case 30: return 'тридцать';
            break;
        case 40: return 'сорок';
            break;
        case 50: return 'пятьдесят';
            break;
        case 60: return 'шестьдесят';
            break;
        case 70: return 'семьдесят';
            break;
        case 80: return 'восемьдесят';
            break;
        case 90: return 'девяносто';
            break;
            n > 20
        case  n: return (case (n - (n % 10)) + case (n % 10)) ;
        break;
    }
}

// 5. Дано целое число от 100 до 999. Вывести его строку-описание. Например: 256 - двести пятьдесят шесть.
function descriptionString (n) {
    switch (n) {
        case  1: return 'один';
        case  2: return 'два';
        case  3: return 'три';
        case  4: return 'четыре';
        case  5: return 'пять';
        case  6: return 'шесть';
        case  7: return 'семь';
        case  8: return 'восемь';
        case  9: return 'девять';
        case 10: return 'десять';
        case 11: return 'одиннадцать';
        case 12: return 'двенадцать';
        case 13: return 'тринадцать';
        case 14: return 'четырнадцать';
        case 15: return 'пятнадцать';
        case 16: return 'шестнадцать';
        case 17: return 'семнадцать';
        case 18: return 'восемнадцать';
        case 19: return 'девятнадцать';

        case 20: return 'двадцать';
        case 30: return 'тридцать';
        case 40: return 'сорок';
        case 50: return 'пятьдесят';
        case 60: return 'шестьдесят';
        case 70: return 'семьдесят';
        case 80: return 'восемьдесят';
        case 90: return 'девяносто';

            n % 100 == 0

        case 100: return 'сто';
            break;
        case 200: return 'двести';
            break;
        case 300: return 'триста';
            break;
        case 400: return 'четыреста';
            break;
        case 500: return 'пятьсот';
            break;
        case 600: return 'шестьсот';
            break;
        case 700: return 'семьсот';
            break;
        case 800: return 'восемьсот';
            break;
        case 900: return 'девятьсот';
            break;

            0 > n % 100 < 20 || ((n % 100) % 10) == 0
        case  n: return case (n - (n % 100)) + case (n % 100) ;
        break;

        n % 100 > 20
        case  n: return case (n - (n % 100)) + case ((n % 100) - (n % 100) % 10) + case ((n % 100) % 10) ;
        break;
    }
}

// Циклы FOR
// Разрешены: все что и раньше + циклы for

// 1. Даны целые числа a, b. Найти сумму всех чисел от a до b, включая эти числа.
function sumNumbersFromaTob (a, b) {
    let sum = 0;
    for (let i = a; a <= i <= b; i++) {
        sum += a;
    }
    return sum;
}

// 2. Дано целое число n. Найти ответ на выражение 1.1 + 1.2 + ... 1.n
function answerToExpression (n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += (1 + i / 10);
    }
    return sum;
}

// 3. Даны числа a, n. Найти ответа на выражение a*1 + a*2 + ... a*n
function answerToExpression (a, n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += (a * i);
    }
    return sum;
}

// 4. Даны числа a, b. Вывести все числа от a до b, при этом все четные числа умножать на -1,
//    а числа которые деляться на 3 без остатка умножать на 1000.
function evenNumbersandNumbersThatAreDivisible3 (a, b) {
    for (let i = a; a <= i <= b; i++) {
        if (i % 2 == 0 || i % 2 == -0) {
            return i = -i;
        } else if (i % 3 == 0 || i % 3 == -0) {
            return i = i * 1000;
        }   return i;
    }
}

// Циклы while
// Разрешены: все что и раньше + циклы while (цикл for запрещен)

// 1. Даны числа a, b. Вычислить произведение всех целых четных чисел от a до b включая их.
function multiplicationEvenNumbers (a, b) {
    let multi = a * b;
    let i = a;
    while (a <= i <= b) {
        if (Math.abs(i) % 2 == 0 && i != a && i != b) {
            multi *= i;
        }
        i++;
    }
    return multi;
}

// 2. Дано число n. Вычислить  факториал от n.
function factorial (n) {
    let multi = 1;
    let i = 1;
    while (i <= n) {
        multi *= i;
        i++;
    }
    return multi;
}

// 3. Дано число n. Найти наибольшее число, квадрат которого меньше n.
function max (n) {
    let i = 1e-11;
    while (i ** 2 < n) {
        i += 1e-11;
    }
    return i - 1e-11;
}

// 4. Даны числа a, b, n. Узнать сумму всех чисел от a до b (включительно). Но если
//    число делиться на n без остатка, то умножить его на 7. А если его квадрат больше (n - 15), то разделить на 2.
function sumNumbers (a, b, n) {
    let i = a;
    let sum1 = 0;
    let sum2 = 0;
    let sum3 = 0;
    while (a <= i <=b) {
        if (i % n == 0) {
            sum1 += i * 7;
        }
        else if ((i ** 2) > n - 15) {
            sum2 += i / 2;
        }
        sum3 += i;
        i++;
    }
    return sum3 = sum1 + sum2 + sum3;
}
