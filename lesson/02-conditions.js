// конструкция if
const x = 10;

if (x > 1) {

} else if (x < -20) {

} else {

}

// конструкция case
const name = 'Иван';

if (name === 'Костя') {

} else if (name === 'Петр') {
} else if (name === 'Сергей') {
} else if (name === 'Николай') {
} else if (name === 'Иван') {
} else if (name === 'Наталья') {
} else if (name === 'Кристина') {
} else {
}

switch (name) {
    case 'Петр': {
        console.log(name);
        break;
    }
    case 'Сергей': {
        console.log(name);
        break;
    }
    case 'Петр': {
        console.log(name);
        break;
    }
    case 'Наталья': {
        console.log(name);
        break;
    }
    case 'Иван': {
        console.log(name);
        break;
    }
    case 'Джон': {
        console.log(name);
        break;
    }
}

function switchNames (searchName) {
    switch (searchName) {
        case 'Петр': {
            console.log(name);
            return searchName;
        }
        case 'Сергей': {
            console.log(name);
            return searchName;
        }
        case 'Петр': {
            console.log(name);
            return searchName;
        }
        case 'Наталья': {
            console.log(name);
            return searchName;
        }
        case 'Иван': {
            console.log(name);
            return searchName;
        }
        case 'Джон': {
            console.log(name);
            return searchName;
        }
    }
}

switchNames('Наталья');

function ageWords(age) {
    function oneNumber (n) {
        switch(n) {
            case 0: return 'ноль лет';

        }
    }

    function firstNumber(n) {
        switch(n) {
            case 0: {
                switch(v) {
                    case 5: {

                    }
                }
            }
        }
    }

    function secondNumber (n) {
        switch (n) {
            case 0: return 'лет';
            case 1: return 'один год';
            case 2: return 'два года';
        }
    }


}

// Тернарный опреатор условия
const fruit = 'apple';

let perevod = '';

if (fruit === 'apple') {
    perevod = 'Яблоко';
} else {
    perevod = 'Не яблоко';
}

console.log(perevod);

// ->

const fruit2 = 'apple';
const perevod2 = fruit === 'apple' ? 'Яблоко' : 'Не яблоко';
console.log(perevod2);