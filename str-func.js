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
