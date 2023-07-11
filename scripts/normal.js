let button = document.querySelector('button');
window.guess = {
    number: Math.floor(Math.random() * 50) + 1,
    attempts: 10
};
button.onclick = () => {
    let number = document.querySelector('input').value;
    if (number >= 1 && number <= 50) {
        if (number == guess.number) {
            let result = document.querySelector('.result > .content');
            let history = document.querySelector('.history > .content');
            result.innerHTML = '<p class="green">Ты угадал! Для того, чтобы попробовать снова, обнови страницу.</p>';
            history.innerHTML += '<b class="green">' + number + '</b>';
            let button = document.querySelector('button');
            button.disabled = true;
        } else {
            let result = document.querySelector('.result > .content');
            let history = document.querySelector('.history > .content');
            if (number > guess.number) {
                guess.attempts = guess.attempts - 1;
                if (!guess.attempts) {
                    result.innerHTML = '<p class="red">Ты потратил все попытки. Для того, чтобы попробовать снова, обнови страницу.</p>';
                    let button = document.querySelector('button');
                    button.disabled = true;
                } else {
                    result.innerHTML = '<p class="blue">Ты не угадал! Загаданное число меньше. Осталось попыток: ' + guess.attempts + '</p>';
                    history.innerHTML += '<b class="blue">' + number + '</b>';
                }
            } else {
                guess.attempts = guess.attempts - 1;
                if (!guess.attempts) {
                    result.innerHTML = '<p class="red">Ты потратил все попытки. Для того, чтобы попробовать снова, обнови страницу.</p>';
                    let button = document.querySelector('button');
                    button.disabled = true;
                } else {
                    result.innerHTML = '<p class="red">Ты не угадал! Загаданное число больше. Осталось попыток: ' + guess.attempts + '</p>';
                    history.innerHTML += '<b class="red">' + number + '</b>';
                }
            }
        }
    } else {
        let result = document.querySelector('.result > .content');
        result.innerHTML = '<p class="error">Ты ввёл число не от 1 до 50!</p>';
    }
}
