const lettersList = [
    'qwertyuiopasdfghjklzxcvbnm',
    'йцукенгшщзхъфывапролджэёячсмитьбю',
];

const letters = lettersList.map(string => {
    return string.split('').map(letter => `${letter}${letter.toUpperCase()}`).join('');
}).join('');

const isLetter = symbol => {
    return letters.includes(symbol);
};

const wordShift = (word, shift) => {
    let result = '';

    for (let i = 0; i < word.length; i += 1) {
        let index = i + shift;
        while (index < 0) {
            index += word.length;
        }
        while (index >= word.length) {
            index -= word.length;
        }
        result += word[index];
    }

    return result;
};

// 1. Дана строка - str. Нужно вернуть количество символов в строке (учитываются любые символы, и пробелы тоже)
// Пример строки: 'Это строка с текстом'

const countOfSymbols = str => {
    let count = 0;

    for (let i = 0; i < str.length; i += 1) {
        count += 1;
    }

    return count;
};

// 2. Дана строка - str. Нужно убрать лишние пробелы ТОЛЬКО в начале строки и в конце.
// Пример строки: '    В этой строке   есть лишние  пробелы в начале и  конце      '

const trimString = str => {
    let isStart = true;
    let startIndex = 0;
    let endIndex = 0;

    for (let i = 0; i < str.length; i += 1) {
        if (isStart && str[i] === ' ') {
            startIndex += 1;
        } else {
            isStart = false;
        }

        if (str[i] !== ' ') {
            endIndex = i;
        }
    }

    return str.slice(startIndex, endIndex + 1);
};

// 3. Дана строка - str. Нужно посчитать количество слов в строке.
// Пример строки: 'В этой строке целых девять слов, вместе с предлогами'

const countWords = str => {
    str = str + ' ';
    let countWords = 0;

    for (let i = 0; i < str.length; i += 1) {
        const lastSymbol = i === 0 ? ' ' : str[i - 1];
        const currentSymbol = str[i];
        if (!isLetter(currentSymbol) && isLetter(lastSymbol)) {
            countWords += 1;
        }
    }

    return countWords;
};

// 4. Дана строка - str. Нужно исправить текст, чтобы предложения начинались с большой буквы.
// Пример строки: 'жил был колобок. он от бабушки ушел. потом песенку спел. а лиса его съела.'

const upperCaseSentence = str => {
    let result = '';
    let lastSymbol = '.';

    for (let i = 0; i < str.length; i += 1) {
        const currentSymbol = str[i];
        if (lastSymbol === '.') {
            result += currentSymbol.toUpperCase();
        } else {
            result += currentSymbol;
        }

        if (currentSymbol !== ' ') {
            lastSymbol = currentSymbol;
        }
    }

    return result;
};

// 5. Дана строка - str. Нужно найти дубли букв в строке и оставить одну букву.
// Пример строки: 'В этооооой сссстрокее еесть дуббли ббуквв'

const clearDublicate = str => {
    let result = '';

    for (let i = 0; i < str.length; i += 1) {
        const lastSymbol = i === 0 ? '' : str[i - 1].toLowerCase();
        const currentSymbol = str[i].toLowerCase();

        if (currentSymbol !== lastSymbol) {
            result += str[i];
        }
    }

    return result;
};

// 6. Дана строка - str. Нужно все символы в строке сделать с большой буквы.
// Пример строки: 'сейчас в этой строке только маленькие буквы'

const upperCaseWords = str => {
    let result = '';

    for (let i = 0; i < str.length; i += 1) {
        const lastSymbol = i === 0 ? ' ' : str[i - 1].toLowerCase();
        const currentSymbol = str[i];

        result += lastSymbol === ' ' ? currentSymbol.toUpperCase() : currentSymbol;
    }

    return result;
};

// 7. Имеется строковое выражение содержащие три вида скобок (), [], {}. Нужно проверить, что все скобки расставлены правильно.
// Тоесть вырежения ') a + b ( c - 1 )', '( rt [ ft ) + h ]' - являются не корректными как и в математике

const isCorrectBrackets = expression => {
    let bracketsTurn = [];
    const openBrackets = '([{';
    const closeBrackets = ')]}';

    for (let i = 0; i < expression.length; i += 1) {
        const currentSymbol = expression[i];
        const lastBrackets = bracketsTurn.length ? bracketsTurn[bracketsTurn.length - 1] : '';

        if (openBrackets.includes(currentSymbol)) {
            bracketsTurn.push(currentSymbol);
        }

        const index = closeBrackets.indexOf(currentSymbol);

        if (index > -1) {
            if (openBrackets[index] === lastBrackets) {
                bracketsTurn.pop();
            } else {
                return false;
            }
        }
    }

    return !bracketsTurn.length;
};

// 8. Написать функцию которая генерит пароль указанной длинны. Дано число N, пароль генериться из
// символов 'a-zA-Z0-9!-_'

const generatePassword = length => {
    const symbols = lettersList[0] + lettersList[0].toUpperCase() + '0123456789!-_';
    let result = '';

    for (let i = 0; i < length; i += 1) {
        const index = Math.trunc(Math.random() * symbols.length);
        result += symbols[index];
    }

    return result;
};

// 9. Дан текст - str. Найти самое длинное слово в нем и вернуть его.

const getLongestWord = text => {
    text += ' ';
    let word = '';
    let longestWord = '';

    for (let i = 0; i < text.length; i += 1) {
        const currentSymbol = text[i];

        if (isLetter(currentSymbol)) {
            word += currentSymbol;
        } else {
            if (longestWord.length < word.length) {
                longestWord = word;
            }
            word = '';
        }
    }

    return longestWord;
};

// 10. Дана строка. Написать две функции, одна шифрует строку, с помощью второй строку можно расшифровать.
// Алгоритм шифрования нужно придумать любой самостоятельно.

const encodeText = text => {
    const multiplier = text.length % 10 + 1;
    let result = '';

    for (let i = 0; i < text.length; i += 1) {
        result += String.fromCharCode(text.charCodeAt(i) + multiplier);
    }

    return result;
};

const decodeText = text => {
    const multiplier = text.length % 10 + 1;
    let result = '';

    for (let i = 0; i < text.length; i += 1) {
        result += String.fromCharCode(text.charCodeAt(i) - multiplier);
    }

    return result;
};

// 11. Реализовать алгоритм сжатия повторяющихся символов.
// Пример: 'aaaabbcccccccffddd', должен превратиться 'a4b2c7f2d3'

const compressionText = str => {
    str += ' ';
    let result = '';
    let count = 1;

    for (let i = 0; i < str.length; i += 1) {
        const lastSymbol = i === 0 ? '' : str[i - 1];
        const currentSymbol = str[i];

        if (lastSymbol === currentSymbol) {
            count += 1;
        }

        if (lastSymbol !== currentSymbol) {
            if (count > 1) {
                result += lastSymbol === ' ' ? ' '.repeat(count) : lastSymbol + count;
            } else {
                result += lastSymbol;
            }

            count = 1;
        }
    }

    return result;
};

// 12. Дан текст строк. Найти слово, которое появляется чаще остальных в тексте. Вывести
// это слово и количество повторений.

const getLongestWordAndCount = text => {
    text += ' ';
    const wordsObject = {};

    let currentWord = '';

    for (let i = 0; i < text.length; i += 1) {
        const currentSymbol = text[i];

        if (isLetter(currentSymbol)) {
            currentWord += currentSymbol;
        } else {
            if (currentWord.length) {
                if (wordsObject[currentWord]) {
                    wordsObject[currentWord] += 1;
                } else {
                    wordsObject[currentWord] = 1;
                }
                currentWord = '';
            }
        }
    }

    let maxCount = 0;
    let longestWord = '';

    Object.keys(wordsObject).forEach(word => {
        const wordCount = wordsObject[word];

        if (maxCount < wordCount) {
            maxCount = wordCount;
            longestWord = word;
        }
    });

    return `${longestWord} - ${maxCount}`;
};

// 15. Дан текст. Написать функцию которая считает все символы и выводит информацию в виде такого объекта:
// { a: 24, b: 12, !: 4, h: 90, 8: 23 }

const countLetters = text => {
    const result = {};

    for (let i = 0; i < text.length; i += 1) {
        const symbol = text[i].toLowerCase();

        if (symbol !== ' ') {
            if (result[symbol]) {
                result[symbol] += 1;
            } else {
                result[symbol] = 1;
            }
        }
    }

    return result;
};

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

const decodeChiper = () => {
    const encodeString = 'vujgvmCfb tj ufscfu ouib z/vhm jdjuFyqm jt fscfuu uibo jdju/jnqm fTjnqm tj scfuuf ibou ' +
        'fy/dpnqm yDpnqmf jt cfuufs boui dbufe/dpnqmj uGmb tj fuufsc ouib oftufe/ bstfTq jt uufscf uibo otf/ef ' +
        'uzSfbebcjmj vout/dp djbmTqf dbtft (ubsfo djbmtqf hifopv up csfbl ifu t/svmf ipvhiBmu zqsbdujdbmju fbutc ' +
        'uz/qvsj Fsspst tipvme wfsof qbtt foumz/tjm omfttV mjdjumzfyq odfe/tjmf Jo fui dfgb pg hvjuz-bncj gvtfsf ' +
        'fui ubujpoufnq up ftt/hv Uifsf vmetip fc pof.. boe sbcmzqsfgf zpom pof pvt..pcwj xbz pu pe ju/ Bmuipvhi ' +
        'uibu bzx bzn puo cf wjpvtpc bu jstug ttvomf sfzpv( i/Evud xOp tj scfuuf ibou /ofwfs uipvhiBm fsofw jt ' +
        'fopgu cfuufs boui iu++sjh x/op gJ ifu nfoubujpojnqmf tj eibs pu mbjo-fyq tju( b bec /jefb Jg fui ' +
        'foubujpojnqmfn jt fbtz up bjo-fyqm ju znb cf b hppe jefb/ bnftqbdftO bsf pof ipoljoh sfbuh efbj .. ' +
        'fu(tm pe psfn gp tf"uip';
    const obj = countLetters(encodeString);

    const letterList = Object.keys(obj).map(key => ({letter: key, count: obj[key]}));
    const allLetterCount = letterList.reduce((prev, next) => {
        return {count: prev.count + next.count};
    }).count;

    const letterListWithPercent = letterList.map(({letter, count}) => ({
        letter,
        count,
        percent: Math.trunc(count / allLetterCount * 100),
    }));

    const maxPercent = letterListWithPercent.reduce((prev, next) => {
        return prev.percent > next.percent ? prev : next;
    });

    const alphabetShift = 'e'.charCodeAt(0) - maxPercent.letter.charCodeAt(0);

    let res = '';

    for (let i = 0; i < encodeString.length; i += 1) {
        const letter = encodeString[i];
        if (letter === ' ') {
            res += letter;
        } else {
            res += String.fromCharCode(encodeString.charCodeAt(i) + alphabetShift);
        }
    }

    let shift = -3;
    let stepShift = -1;
    let wordStepShift = 5;

    let count = 0;

    const wordsList = res.split(' ').map((word, i) => {
        if (count === wordStepShift) {
            count = 0;
            shift += stepShift;
        }
        count += 1;
        return wordShift(word, shift);
    });

    return wordsList.join(' ');
};

// 14. Реализуй шифрование и дешифрование "сендвич". Суть в следующем. Текст делиться попалам на две равные
// части и новый текст собирается из поочередного соединения этих двух строк.

const encodeSandwich = text => {
    if (text.length % 2 !== 0) {
        text += ' ';
    }

    let result = '';
    for (let i = 0; i < text.length / 2; i += 1) {
        const j = text.length / 2 + i;
        result += text[i] + text[j];
    }

    return result;
};

const decodeSandwich = text => {
    let firstHalf = '';
    let secondHalf = '';

    for (let i = 0; i < text.length; i += 1) {
        if (i % 2 === 0) {
            firstHalf += text[i];
        } else {
            secondHalf += text[i];
        }
    }

    return firstHalf + secondHalf;
};

// Массивы
// 1. Дан массив чисел. Найти сумму всех его элементов.

const arrayElementsSummary = array => {
    return array.reduce((prev, next) => prev + next);
};

// 2. Дан массив чисел. Найти среднее арифметическое четных чисел массива.

const arithmeticMean = array => {
    const filtered = array.filter(number => number % 2 === 0);
    return arrayElementsSummary(filtered) / filtered.length;
};

// 3. Дан массив чисел. Найти число которое встречается чаще всего

const repeatedNumber = array => {
    const obj = {};
    array.forEach(number => {
        if (obj[number]) {
            obj[number] += 1;
        } else {
            obj[number] = 1;
        }
    });

    let maxNumber = {number: '', count: 0};

    Object.keys(obj).forEach(number => {
        const count = obj[number];

        if (count > maxNumber.count) {
            maxNumber = {number, count};
        }
    });

    return maxNumber;
};

// 4. Дан массив чисел. Оставить только четные числа, которые деляться на 3 без остатка.

const filterTwoThree = array => array.filter(number => number % 2 === 0 && number % 3 === 0);

// 5. Дан массив данных. Переставить эелементы массива в обратном порядке.

const reverseArray = array => {
    let reverseArray = [];

    for (let i = array.length - 1; i >= 0; i -= 1) {
        reverseArray.push(array[i]);
    }

    return reverseArray;
};

// 6. Дано число N. Заполнить массив N-количеством случайных целых чисел от 0 до N. При этом числа не должны повторяться.

const randomArray = n => {
    const array = [];

    for (let i = 0; i < n; i += 1) {
        let randomNumber = Math.trunc(Math.random() * n);

        while (array.includes(randomNumber)) {
            randomNumber = Math.trunc(Math.random() * n);
        }

        array.push(randomNumber);
    }

    return array;
};

// 7. Дано число N - шаг геометрической прогрессии и X - число с которого начинается прогрессия,
// Y - длина прогрессии. Вернуть массив заполненный такой прогрессией.

const arithmeticProgressive = (step, start, length) => {
    const array = [];

    for (let i = 0; i < length; i += 1) {
        array.push(start + step * i);
    }

    return array;
};

// 8. Дан массив чисел. Найти количество четных чисел в массиве.

const countEvenNumbers = array => array.filter(n => n % 2 === 0).length;

// 9. Дан массив всевозможных данных. Очистить его от falsebel элементов, тоесть false, 0, null и тд.

const clearArray = array => array.filter(n => !!n);

// 10. Дан массив чисел. Найти самое большое четное число в массиве.

const maxEvenNumber = array => {
    const evenList = array.filter(n => n % 2 === 0);
    return Math.max(...evenList);
};

// 11. Дан массив чисел. Найти два соседних элемента, чья сумма будет наименьшей.

const minAmountNeigbors = array => {
    let minSum = {numbers: '', summary: Infinity};

    for (let i = 0; i < array.length - 1; i += 1) {
        const first = array[i];
        const second = array[i + 1];

        if (first + second < minSum.summary) {
            minSum = {number: `${first} + ${second}`, summary: first + second};
        }
    }

    return minSum;
};

// 12. Дан массив чисел. Найти все повторяющиеся числа и какое количество раз.

const countRepeatedNumbers = array => {
    const obj = {};

    array.forEach(number => {
        if (obj[number]) {
            obj[number] += 1;
        } else {
            obj[number] = 1;
        }
    });

    return Object.keys(obj).filter(number => {
        const count = obj[number];

        return count > 1;
    });
};

// 13. Дан массив чисел. Удалить все элементы из массива, которые повторяются больше двух раз.

const clearTripleRepeat = array => {
    return array.filter(n => array.filter(k => k === n).length < 3);
};

// 14. Даны два массива чисел. Сформировать третий массив, который наполнен элементами которые есть и в первом и во втором массивах.

const crossingArrays = (first, second) => {
    return first.filter(n => second.includes(n));
};

// 15. Дан массив чисел. Удалить из массива все числа палиндромы.

const isPalindrome = number => {
    const stringNumber = String(number);

    for (let start = 0; start < stringNumber.length / 2; start += 1) {
        const end = stringNumber.length - 1 - start;
        if (stringNumber[start] !== stringNumber[end]) {
            return false;
        }
    }

    return true;
};

const clearPalindrome = array => {
    return array.filter(number => !isPalindrome(number));
};

// 16. Дан массив чисел. Найти наибольшую возрастающую последовательность чисел
// в этом массиве которые идут подряд. Пример: 1, 4, 6, 10

const searchSequence = array => {
    array.push(-Infinity);
    let maxSequence = [];
    let sequence = [];

    for (let i = 0; i < array.length; i += 1) {
        const current = array[i];

        if (!sequence.length) {
            sequence.push(current);
        } else {
            const lastNumber = sequence[sequence.length - 1];

            if (current >= lastNumber) {
                sequence.push(current);
            } else {
                if (sequence.length > maxSequence.length) {
                    maxSequence = sequence;
                }
                sequence = [current];
            }
        }
    }

    return maxSequence;
};

// 17. Дан массив чисел. Удалить из него числа так, чтобы оставшиеся образовали
// наибольшую возрастающую последовательность. Для решения задачи используются методы
// динамического программирования.

const highestIncreasingSequence = array => {

};