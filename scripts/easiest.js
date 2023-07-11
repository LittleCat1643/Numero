let button = document.querySelector('button');
window.guess = {
    number: Math.floor(Math.random() * 5) + 1,
};
button.onclick = () => {
    let number = document.querySelector('input').value;
    if (number >= 1 && number <= 5) {
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
                result.innerHTML = '<p class="blue">Ты не угадал! Загаданное число меньше.</p>';
                history.innerHTML += '<b class="blue">' + number + '</b>';
            } else {
                result.innerHTML = '<p class="red">Ты не угадал! Загаданное число больше.</p>';
                history.innerHTML += '<b class="red">' + number + '</b>';
            }
        }
    } else {
        let result = document.querySelector('.result > .content');
        result.innerHTML = '<p class="error">Ты ввёл число не от 1 до 5!</p>';
    }
}
