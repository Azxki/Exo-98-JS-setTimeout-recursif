let timeout = document.getElementById('timeout');
let timeout_div = document.getElementById('timeout_div');
let div = document.createElement('div');
let y = 1000000

let timeoutPersonal = () => {
    let timeoutId = setTimeout(() => {
        if (y >= 0) {
            timeout_div.innerHTML = "Il vous reste " + y + " avant la fin !";
            y--;
            timeoutPersonal();
        }
    }, 10)
};

timeout.addEventListener('click', timeoutPersonal);
