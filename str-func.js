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
    const encodeString = 'vujgvmCfb tj ufscfu ouib z/vhm jdjuFyqm jt fscfuu uibo jdju/jnqm fTjnqm tj scfuuf' +
        'ibou fy/dpnqm yDpnqmf jt cfuufs boui dbufe/dpnqmj uGmb tj fuufsc ouib oftufe/' +
        'bstfTq jt uufscf uibo otf/ef uzSfbebcjmj vout/dp djbmTqf dbtft (ubsfo djbmtqf' +
        'hifopv up csfbl ifu t/svmf ipvhiBmu zqsbdujdbmju fbutc uz/qvsj Fsspst tipvme' +
        'wfsof qbtt foumz/tjm omfttV mjdjumzfyq odfe/tjmf Jo fui dfgb pg hvjuz-bncj' +
        'gvtfsf fui ubujpoufnq up ftt/hv Uifsf vmetip fc pof.. boe sbcmzqsfgf zpom' +
        'pof pvt..pcwj xbz pu pe ju/ Bmuipvhi uibu bzx bzn puo cf wjpvtpc bu jstug' +
        'ttvomf sfzpv( i/Evud xOp tj scfuuf ibou /ofwfs uipvhiBm fsofw jt fopgu cfuufs' +
        'boui iu++sjh x/op gJ ifu nfoubujpojnqmf tj eibs pu mbjo-fyq tju( b bec /jefb' +
        'Jg fui foubujpojnqmfn jt fbtz up bjo-fyqm ju znb cf b hppe jefb/ bnftqbdftO' +
        'bsf pof ipoljoh sfbuh efbj .. fu(tm pe psfn gp tf"uip';

    const obj = {};

    for (let i = 0; i < encodeString.length; i += 1) {
        const symbol = encodeString[i].toLowerCase();

        if (symbol !== ' ') {
            if (obj[symbol]) {
                obj[symbol] += 1;
            } else {
                obj[symbol] = 1;
            }
        }
    }

    const letterList = Object.keys(obj).map(key => ({letter: key, count: obj[key]}));
    const allLetterCount = letterList.reduce((prev, next) => {
        return {count: prev.count + next.count};
    }).count;

    const letterListWithPercent = letterList.map(({letter, count}) => ({
        letter,
        count,
        percent: Math.trunc(count / allLetterCount * 100),
    }));

    let res = '';

    for (let i = 0; i < encodeString.length; i += 1) {
        const letter = encodeString[i];
        if (letter === ' ') {
            res += letter;
        } else {
            res += String.fromCharCode(encodeString.charCodeAt(i) - 1);
        }
    }

    console.log(res);
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