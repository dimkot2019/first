const name = 'Ivan';

var vooo = 'sdf';

function x () {
    const surname = 'Petrov';

    function y () {
        const yyy = 'df';
    }
}

const tytyt = function () {

};

for (var i = 0; i < 10; i += 1) {
    var ui = 'f';
}

(function mathematic () {
    // какой то код

    const x = Math;

    window.Mathematic = x;
})();

function Counter () {
    let counter = 0;

    return function x() {
        return counter += 1;
    };
}

const counter1 = Counter();
const counter2 = Counter();

const createCounter = (counter, id) => {
    const div = document.getElementById(id);
    const span = div.getElementsByTagName('span')[0];
    const button = div.getElementsByTagName('button')[0];

    button.onclick = () => {
        span.textContent = counter();
    };
};

createCounter(counter1, 'counter-1');
createCounter(counter2, 'counter-2');

const Ivan = {
    name: 'Иван',
    score: [],
    addScore: function (number) {
        this.score.push(number);
    },
    showScore: function () {
        console.log('Score: ', this.score.join(' | '));
    },
    getName: function (prefix = '') {
        return this.name + ' ' + prefix;
    }
};

const Svetlana = {
    name: 'Svetlana',
    score: [],
};

const gettingName = Ivan.getName;

const callName = Ivan.getName.call(Ivan, 'rt');

const bind = (func, obj) => {
    const newObj = {
        ...obj,
        func
    };
    return function () {
        return newObj.func();
    }
};

const getSvetlanaName = gettingName.bind(Svetlana);

const getS = bind(gettingName, Svetlana);

const obj = {
    ivan: Ivan.getName(),
    gettingName: gettingName(),
    svetlana: getSvetlanaName(),
    getS: getS(),
    call: callName,
};

console.log(Svetlana);

console.log(obj);
