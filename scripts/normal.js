let button = document.querySelector('button');
window.guess = {
    number: Math.floor(Math.random() * 50) + 1,
    attempts: 20
};
button.onclick = () => {
    let number = document.querySelector('input').value;
    if (number >= 1 && number <= 50) {
        if (number == guess.number) {
            let result = document.querySelector('.result > .content');
            let history = document.querySelector('.history > .content');
            result.innerHTML = '<p class="green">You guessed it! Refresh the page if you want to play again.</p>';
            history.innerHTML += '<b class="green">' + number + '   </p>';
            let button = document.querySelector('button');
            button.disabled = true;
        } else {
            let result = document.querySelector('.result > .content');
            let history = document.querySelector('.history > .content');
            if (number > guess.number) {
                guess.attempts = guess.attempts - 1;
                if (!guess.attempts) {
                    result.innerHTML = '<p class="red">You\'ve wasted all your attempts! Refresh the page if you want to play again.</p>';
                    let button = document.querySelector('button');
                    button.disabled = true;
                } else {
                    result.innerHTML = '<p class="blue">You didn\'t guess right! The number is smaller. Attempts left: ' + guess.attempts + '</p>';
                    history.innerHTML += '<b class="blue">' + number + '   </b>';
                }
            } else {
                guess.attempts = guess.attempts - 1;
                if (!guess.attempts) {
                    result.innerHTML = '<p class="red">You\'ve wasted all your attempts! Refresh the page if you want to play again.</p>';
                    let button = document.querySelector('button');
                    button.disabled = true;
                } else {
                    result.innerHTML = '<p class="red">You didn\'t guess right! The number is bigger. Attempts left: ' + guess.attempts + '</p>';
                    history.innerHTML += '<b class="red">' + number + '   </b>';
                }
            }
        }
    } else {
        let result = document.querySelector('.result > .content');
        result.innerHTML = '<p class="error">You entered a number not from the range from 0 to 50!</p>';
    }
}
