const enterNumber = function (x) {
    console.log(x);
    return new Promise((resolve, reject) => {
        const userInput = Number(window.prompt(`Enter a number`));

        if (isNaN(userInput)) {
            reject(new Error('Wrong input type.'));
        }
        if (userInput === x) {
            resolve({
                points: 2,
                generatedNumber: x
            });
        }
        else if (userInput - x === 1 || x - userInput === 1) {
            resolve({
                points: 1,
                generatedNumber: x
            });
        }
        else {
            resolve({
                points: 0,
                generatedNumber: x
            });
        }
    });
};

function continueGame() {
    const confirmation = window.confirm(`Do you wish to continue playing?`);
    if (confirmation) {
        startGame();
    }
}

const startGame = function () {
    enterNumber(6)
        .then((result) => window.alert(`You got ${result.points} and generated number was ${result.generatedNumber}.`))
        .catch((err) => window.alert(err))
        .finally( () => continueGame());
}
startGame();
console.log(87687658);