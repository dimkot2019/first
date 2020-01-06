const person = {
    name: 'Иван',
    age: 15,
    male: true,
    favoriteColors: ['red', 'blue'],
    realty: {
        house: '',
        cottage: '',
    },
    getStatus: function () {
        return 'Имя: ' + person.name + ', возраст: ' + person.age;
    }
};

const Ivan = {
    name: 'Иван',
    score: [],
    addScore: function (number) {
        this.score.push(number);
    },
    showScore: function () {
        console.log('Score: ', this.score.join(' | '));
    }
};
Ivan.addScore(3);
Ivan.addScore(5);
Ivan.addScore(2);

Ivan.showScore();
