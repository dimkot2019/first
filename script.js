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
    const C = B;
    B = A;
    A = C;
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
        return 'a' + ',' + 'b';
    } else if (a < b) {
        return 'b' + ',' + 'a';
    } else {
        return false;
    }
}
const t19 = biggerAndSmaller (3, 11);
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
    if ((a >= b) && (b > c)) {
        return a + b;
    } else if ((a <= b) && (b <= c)) {
        return b + c;
    } else if (((a > b) && (b <= c)) || ((a > b) && (b < c) && (a === c))) {
        return a + c;
    } else if ((a < b) && (b > c) && (a >= c)) {
        return a + b;
    } else if ((a < b) && (b > c) && (a < c)) {
        return b + c;
    }
}
const t21 = sumTwoLargestNumbers (8, 6, 8);
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
    switch (n) {
        case  1:return 'один год';
        case  2:return 'два года';
        case  3:return 'три года';
        case  4:return 'четыре года';
        case  5:return 'пять лет';
        case  6:return 'шесть лет';
        case  7:return 'семь лет';
        case  8:return 'восемь лет';
        case  9:return 'девять лет';
        case 10:return 'десять лет';
        case 11:return 'одиннадцать лет';
        case 12:return 'двенадцать лет';
        case 13:return 'тринадцать лет';
        case 14:return 'четырнадцать лет';
        case 15:return 'пятнадцать лет';
        case 16:return 'шестнадцать лет';
        case 17:return 'семнадцать лет';
        case 18:return 'восемнадцать лет';
        case 19:return 'девятнадцать лет';
    }
    function numbers (n) {
        switch (n) {
            case  0:return 'лет';
            case  1:return 'один год';
            case  2:return 'два года';
            case  3:return 'три года';
            case  4:return 'четыре года';
            case  5:return 'пять лет';
            case  6:return 'шесть лет';
            case  7:return 'семь лет';
            case  8:return 'восемь лет';
            case  9:return 'девять лет';
            case 20: return 'двадцать';
            case 30: return 'тридцать';
            case 40: return 'сорок';
            case 50: return 'пятьдесят';
            case 60: return 'шестьдесят';
            case 70: return 'семьдесят';
            case 80: return 'восемьдесят';
            case 90: return 'девяносто';
        }
    }
    return numbers (n - n % 10) + ' ' + numbers (n % 10);
}
const t04 = ageWords (71);
console.log('t04', t04);

// 5. Дано целое число от 100 до 999. Вывести его строку-описание. Например: 256 - двести пятьдесят шесть.
function descriptionString (n) {
    switch (n % 100) {
        case 10:
        case 11:
        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
        case 18:
        case 19:
            return numbers (n - n % 100) + ' ' + numbers (n % 100);
    }

    function numbers (n) {
        switch (n) {
            case  0:
                return '';
            case  1:
                return 'один';
            case  2:
                return 'два';
            case  3:
                return 'три';
            case  4:
                return 'четыре';
            case  5:
                return 'пять';
            case  6:
                return 'шесть';
            case  7:
                return 'семь';
            case  8:
                return 'восемь';
            case  9:
                return 'девять';
            case 10:
                return 'десять';
            case 11:
                return 'одиннадцать';
            case 12:
                return 'двенадцать';
            case 13:
                return 'тринадцать';
            case 14:
                return 'четырнадцать';
            case 15:
                return 'пятнадцать';
            case 16:
                return 'шестнадцать';
            case 17:
                return 'семнадцать';
            case 18:
                return 'восемнадцать';
            case 19:
                return 'девятнадцать';
            case 20:
                return 'двадцать';
            case 30:
                return 'тридцать';
            case 40:
                return 'сорок';
            case 50:
                return 'пятьдесят';
            case 60:
                return 'шестьдесят';
            case 70:
                return 'семьдесят';
            case 80:
                return 'восемьдесят';
            case 90:
                return 'девяносто';
            case 100:
                return 'сто';
            case 200:
                return 'двести';
            case 300:
                return 'триста';
            case 400:
                return 'четыреста';
            case 500:
                return 'пятьсот';
            case 600:
                return 'шестьсот';
            case 700:
                return 'семьсот';
            case 800:
                return 'восемьсот';
            case 900:
                return 'девятьсот';
        }
    }
          return numbers (n - n % 100) + ' ' + numbers ((n % 100) - (n % 100) % 10) + ' ' + numbers ((n % 100) % 10);
    }
const t05 = descriptionString (117);
console.log('t05', t05);

// Циклы FOR
// Разрешены: все что и раньше + циклы for

// 1. Даны целые числа a, b. Найти сумму всех чисел от a до b, включая эти числа.
function sumNumbersFromaTob (a, b) {

    let sum = 0;
    if (a < b) {
        for (let i = a; i <= b; i++) {
            sum += i;
        }
    } else {
        for (let i = b; i <= a; i++) {
            sum += i;
        }
    }


    return sum;
}
const t06 = sumNumbersFromaTob (9, 7);
console.log('t06', t06);

// 2. Дано целое число n. Найти ответ на выражение 1.1 + 1.2 + ... 1.n
function answerToExpression (n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += (1 + i / 10);
    }
    return sum;
}
const t07 = answerToExpression (21);
console.log('t07', t07);

// 3. Даны числа a, n. Найти ответа на выражение a*1 + a*2 + ... a*n
function answerToExpression1 (a, n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += (a * i);
    }
    return sum;
}
const t08 = answerToExpression1 (2, 151);
console.log('t08', t08);

// 4. Даны числа a, b. Вывести все числа от a до b, при этом все четные числа умножать на -1,
//    а числа которые деляться на 3 без остатка умножать на 1000.
function evenAndDivisible3 (a, b) {
    let i;
    for (let i = a;  i <= b; i++) {
        if ((i % 2 === 0) || (i % 2 === -0)) {
            let c = -i;
            console.log(c);
        } else if ((i % 3 === 0) || (i % 3 === -0)) {
            let c = i * 1000;
             console.log(c);
        } else {
            console.log(i);
        }

    }
return '';
}
const t09 = evenAndDivisible3 (2, 5);
console.log('t09', t09);

// Циклы while
// Разрешены: все что и раньше + циклы while (цикл for запрещен)

// 1. Даны числа a, b. Вычислить произведение всех целых четных чисел от a до b включая их.
function  multiplicationEvenNumbers (a, b) {
    let multi = 1;
    let i = a;
    while (i <= b) {
        if (Number.isInteger(i) === true && Math.abs(i) % 2 === 0 && i !== 0) {
            multi*= i;
        }
        i = Math.floor(i);
        i++;
    }
    return multi;
}
const t10 = multiplicationEvenNumbers (0.1, 4.1);
console.log('t10', t10);

// 2. Дано число n. Вычислить  факториал от n.
function fl (n) {
    let multi = 1;
    let i = 1;
    while (i <= n) {
        multi *= i;
        i++;
    }
    return multi;
}
const t11 = fl (15);
console.log('t11', t11);

// 3. Дано число n. Найти наибольшее число, квадрат которого меньше n.
function mx (n) {
    let i = 1e-7;
    while (i ** 2 < n) {
        i += 1e-7;
    }
    return i - 1e-7;
}
const t12 = mx (2);
console.log('t12', t12);

// 4. Даны числа a, b, n. Узнать сумму всех чисел от a до b (включительно). Но если
//    число делиться на n без остатка, то умножить его на 7. А если его квадрат больше (n - 15), то разделить на 2.
function sumNum (a, b, n) {
    let i = a;
    let sum1 = 0;
    let sum2 = 0;
    let sum3 = 0;
    while (i <= b) {
        if (i % n === 0) {
            sum1 += i * 7;
        }
        else if (i ** 2 > (n - 15)) {
            sum2 += i / 2;
        }
        else {
            sum3 += i;
        }
            i++;

    }
    return sum3 = sum1 + sum2 + sum3;
}
const t13 = sumNum (2, 10, 3);
console.log('t13', t13);




// Задачи используемые в работе и на собеседованиях.

// 1. Дана строка - str. Нужно вернуть количество символов в строке (учитываются любые символы, и пробелы тоже)
// Пример строки: 'Это строка с текстом'
function numberOfCharacters (m) {
    let i = 0;

    for (let z of m) {
        i++;
    }

    return i;
}
const t14 = numberOfCharacters ('Это строка с текстом');
console.log('t14', t14);

// 2. Дана строка - str. Нужно убрать лишние пробелы ТОЛЬКО в начале строки и в конце.
// Пример строки: '    В этой строке   есть лишние  пробелы в начале и  конце      '
function removingSpacesBeginningAndEnd (n) {
    for (let i = 0; i < n.length; i++) {
        if (n[i] !==' ') {
            for (let j = n.length-1; j <= n.length-1; j--) {
                if (n[j] !== ' ')  {
                    return n.substr(i, j);
                }
            }
        }
    }
}
const t15 = removingSpacesBeginningAndEnd ('   В этой строке   есть лишние  пробелы в начале и  конце.     '
);
console.log('t15', t15);

// 3. Дана строка - str. Нужно посчитать количество слов в строке.
// Пример строки: 'В этой строке целых девять слов, вместе с предлогами'
function amountWords (n) {
    let sum = 0;
    for (let i = 0; i < n.length; i++) {
        if (n[i] !== ' '){
            if (n[i +1] === ' ') {
                sum += 1;
            }
        }
    }
    if (n[n.length - 1] !== ' ') {
        return sum + 1;
    }
    return sum;
}
const t16 = amountWords ('В этой строке целых девять слов, вместе с предлогами');
console.log('t16', t16);

// 4. Дана строка - str. Нужно исправить текст, чтобы предложения начинались с большой буквы.
// Пример строки: 'жил был колобок. он от бабушки ушел. потом песенку спел. а лиса его съела.'
function sentencesWithCapitalLetter(n) {
    let t;
    let m = '';
    let z = 0;
    let k = n[z].toUpperCase();
    for (let i = 0; i < n.length; i++) {
        if (n[i] === '.' && i < n.length - 1) {
            m = m + n.substr(z + 1, i - z + 1) + n[i + 2].toUpperCase();
            z = i + 2;
                }
            }
    return t = k + m + n.substr(- 16, 16);
}
const t17 = sentencesWithCapitalLetter('жил был колобок. он от бабушки ушел. потом песенку спел. потом попил пива. а лиса его съела.');
console.log('t17', t17);


// 5. Дана строка - str. Нужно найти дубли букв в строке и оставить одну букву.
// Пример строки: 'В этооооой сссстрокее еесть дуббли ббуквв'

function removeDuplicateLetters (n) {
    let s = '';
    for (let i = 0; i < n.length; i++){
        let z = i;
        if (n[i] === n[i + 1]){
            z += 1;
        }
        s = s + n.slice(z, i + 1);
    }
    return s;
}
const t18 = removeDuplicateLetters ('В этооооой сссстрокее еесть дуббли ббуквв');
console.log('t18', t18);


// 6. Дана строка - str. Нужно все слова в строке сделать с большой буквы.
// Пример строки: 'сейчас в этой строке только маленькие буквы'

function allWordsAreCapitalized(n) {
let s = '';
for (let i = 0; i < n.length; i += 1) {
if (n[i] === ' ') {
    s = s + n[i + 1].toUpperCase();
    i += 1;
}
s += n.substr(i + 1, 1);
}
return s = n[0].toUpperCase() + s ;
}
const t23 = allWordsAreCapitalized('сейчас в этой строке только маленькие буквы');
console.log('t23', t23);

// 7. Имеется строковое выражение содержащие три вида скобок (), [], {}. Нужно проверить, что все скобки расставлены правильно.
// Тоесть вырежения ') a + b ( c - 1 )', '( rt [ ft ) + h ]' - являются не корректными как и в математике

// 8. Написать функцию которая генерит пароль указанной длинны. Дано число N, пароль генериться из
// символов 'a-zA-Z0-9!-_'

// 9. Дан текст - str. Найти самое длинное слово у нем и вернуть его.

// 10. Дана строка. Написать две функции, одна шифрует строку, с помощью второй строку можно расшифровать.
// Алгоритм шифрования нужно придумать любой самостоятельно.

// 11. Реализовать алгоритм сжатия повторяющихся символов.
// Пример: 'aaaabbcccccccffddd', должен превратиться 'a4b2c7f2d3'

// 12. Дан текст строк. Найти слово, которое появляется чаще остальных в тексте. Вывести
// это слово и количество повторений.

// 13. Тебе в руки попал зашифрованный текст означающий большую истинность для многих программистов.
// Расшифруй его:

/*
vujgvmCfb tj ufscfu ouib z/vhm jdjuFyqm jt fscfuu uibo jdju/jnqm fTjnqm tj scfuuf
ibou fy/dpnqm yDpnqmf jt cfuufs boui dbufe/dpnqmj uGmb tj fuufsc ouib oftufe/
bstfTq jt uufscf uibo otf/ef uzSfbebcjmj vout/dp djbmTqf dbtft (ubsfo djbmtqf
hifopv up csfbl ifu t/svmf ipvhiBmu zqsbdujdbmju fbutc uz/qvsj Fsspst tipvme
wfsof qbtt foumz/tjm omfttV mjdjumzfyq odfe/tjmf Jo fui dfgb pg hvjuz-bncj
gvtfsf fui ubujpoufnq up ftt/hv Uifsf vmetip fc pof.. boe sbcmzqsfgf zpom
pof pvt..pcwj xbz pu pe ju/ Bmuipvhi uibu bzx bzn puo cf wjpvtpc bu jstug
ttvomf sfzpv( i/Evud xOp tj scfuuf ibou /ofwfs uipvhiBm fsofw jt fopgu cfuufs
boui iu++sjh x/op gJ ifu nfoubujpojnqmf tj eibs pu mbjo-fyq tju( b bec /jefb
Jg fui foubujpojnqmfn jt fbtz up bjo-fyqm ju znb cf b hppe jefb/ bnftqbdftO
bsf pof ipoljoh sfbuh efbj .. fu(tm pe psfn gp tf"uip
*/

// 14. Реализуй шифрование и дешифрование "сендвич". Суть в следующем. Текст делиться попалам на две равные
// части и новый текст собирается из поочередного соединения этих двух строк.

// 15. Дан текст. Написать функцию которая считает все символы и выводит информацию в виде такого объекта:
// { a: 24, b: 12, !: 4, h: 90, 8: 23 }



// Массивы

// 1. Дан массив чисел. Найти сумму всех его элементов.
function sumOfAllElements (n) {
    return n.reduce((prev, current)=>prev + current);
}
const tm1 = sumOfAllElements ([2,3,5,6]);
console.log('tm1',tm1);

// 2. Дан массив чисел. Найти среднее арифметическое четных чисел массива.
function arithmeticAverageOfTheEvenNumbers (n){
const n1 = n.filter((n)=> n % 2 === 0);
const sum = n1.reduce((prev, current)=>prev + current);
return sum / n1.length;
}
const tm2 = arithmeticAverageOfTheEvenNumbers([2,3,5,6,8]);
console.log('tm2', tm2) ;

// 3. Дан массив чисел. Найти число которое встречается чаще всего
function numberThatOccursMostOften(n) {
    let k;
    let max = 0;
    let counter = 0;
    for (let i = 0; i < n.length; i += 1) {
        for (let j = i; j < n.length; j += 1) {
            if (n[i] === n[j]) {
                counter += 1;
            }
            if (counter > max) {
                max = counter;
                k = n[i];
            }
        }
        counter = 0;
    }
    return k;
}
const tm3 = numberThatOccursMostOften ([3,1,3,0,24,15,99,103,15,7,99,15,8]);
console.log('tm3', tm3);

// 4. Дан массив чисел. Оставить только четные числа, которые деляться на 3 без остатка.
function evenNumbersThatAreDivisibleBy3(n) {
    let e = n.filter((p) => p % 2 === 0 && p % 3 === 0);
    return e;
}
const tm4 = evenNumbersThatAreDivisibleBy3 ([1,9,12,6]);
console.log('tm4', tm4);

// 5. Дан массив данных. Переставить эелементы массива в обратном порядке.
function revers_ (n){
    let e = n.reverse();
    return e;
}
const tm5 = revers_ (['k','l',2,3,'w','o',0]);
console.log('tm5', tm5);

// 6. Дано число N. Заполнить массив N-количеством случайных целых чисел от 0 до N. При этом числа не должны повторяться.
function randomIntegers(N){
    let e = [];
    for (let i = 1; i <= N; i +=1) {
        e[i - 1] = Math.ceil(Math.random() * N);
        for (let j = 0; j < i - 1; j +=1) {
            if (e[i - 1] === e[j]) {
                i -= 1;
                break;
            }
        }
    }
    return e;
}
const tm6 = randomIntegers(19);
console.log('tm6',tm6);

// 7. Дано число N - шаг геометрической прогрессии и X - число с которого начинается прогрессия
// Y - длина прогрессии. Вернуть массив заполненный такой прогрессией.
function geometricProgression(x,y,n){
let b = [];
b[0] = x;
for (let i = 0; b[i] < y; i +=1){
    b[i + 1] = b[i] * n;
}
return b;
}
const tm7 = geometricProgression(2,1024,2);
console.log('tm7', tm7);

// 8. Дан массив чисел. Найти количество четных чисел в массиве.
function numberOfEvenNumbers(n){
    const b = n.filter((k) => k % 2 === 0);
    return b.length;
}
const tm8 = numberOfEvenNumbers([3,2.3,7,2,8,9,10]);
console.log('tm8',tm8);

// 9. Дан массив всевозможных данных. Очистить его от falsebel элементов, тоесть false, 0, null и тд.
function clearFromFalsebel(n){
    for (let i = 0;i < n.length;i += 1){
        if (Boolean(n[i])===false || n[i] === false){
            n = n.filter((b) => b !== n[i]);
        }
    }
    return n;
}
const tm9 = clearFromFalsebel([0,2,null,45, ,-0,undefined]);
console.log('tm9',tm9);

// 10. Дан массив чисел. Найти самое большое четное число в массиве.
function largestEvenNumber(n) {
    return Math.max.apply(null,n.filter((b) => b % 2 === 0));
}
const tm10 = largestEvenNumber([1,4,5,988,3,6,986]);
console.log('tm10',tm10);

// 11. Дан массив чисел. Найти два соседних элемента, чья сумма будет наименьшей.
function twoAdjacentElementsSumSmallest(n) {
    let k = [n[0], n[1]];
    let p = n[0] + n[1];
    for (let i = 1; i < n.length - 1; i += 1){
            if (p > n[i] + n[i + 1]) {
                p = n[i] + n[i + 1];
                k = [n[i], n[i + 1]];
            }
        }
    return k;
}
const tm11 = twoAdjacentElementsSumSmallest([0,1,4,0,0,5,-5]);
console.log('tm11',tm11);

// 12. Дан массив чисел. Найти все повторяющиеся числа и какое количество раз.
function allDuplicateNumbersAndTheNumberOfTimes(n){
    let m =[];
    for (let i = 0; i < n.length; i += 1){
        for (let j =i + 1; j < n.length; j += 1){
            if (n[i] === n[j] && m.includes(n[j]) === false) {
                m = m + n.filter((b) => b === n[j])+' ';
            }
        }
    }
   return m;
}
const tm12 = allDuplicateNumbersAndTheNumberOfTimes([1,4,2,1,1,4,2,4,5,7,1]);
console.log('tm12',tm12);

// 13. Дан массив чисел. Удалить все элементы из массива, которые повторяются больше двух раз.
function  deleteItemsThatHaveMoreThan2Pieces(n){
    let p = n.length;
    for (let i = 0; i < n.length; i += 1) {
        for (let j = i + 1; j < n.length; j += 1) {
            if (n[i] === n[j]) {
                if ((n.filter((b) => b === n[j])).length > 2) {
                    n = n.filter((b) => b !== n[j]);
                }
            }
        }
    }
    if (n.length === p){
        return n =['Нет элементов,которые повторяются больше двух раз.'];
    }
    return n;
}
const tm13 = deleteItemsThatHaveMoreThan2Pieces([1,2,1,4,2]);
console.log('tm13',tm13);

// 14. Даны два массива чисел. Сформировать третий массив, который наполнен элементами которые есть и в первом и во втором массивах.

// 15. Дан массив чисел. Удалить из массива все числа палиндромы.

// 16. Дан массив чисел. Найти наибольшую возрастающую последовательность чисел
// в этом массиве которые идут подряд. Пример: 1, 4, 6, 10

// 17. Дан массив чисел. Удалить из него числа так, чтобы оставшиеся образовали
// наибольшую возрастающую последовательность.
