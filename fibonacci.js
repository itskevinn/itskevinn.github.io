function initializeValues() {
    let today = new Date();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
    let minutesDigits = getNumberDigits(minutes);
    let x = minutesDigits[0];
    let y = minutesDigits[1];
    return {seconds, x, y};
}

function generate() {
    let {seconds, x, y} = initializeValues();
    executeFibonacci(x, y, seconds);
}

function getNumberDigits(n) {
    return Array.from(String(n), Number);
}

function executeFibonacci(x, y, qty) {
    if (x == null || y == null || qty == null) return null;

    let i;
    let fib = [];
    let result = [];

    fib[0] = x;
    fib[1] = y;
    for (i = 2; i <= qty; i++) {
        fib[i] = fib[i - 2] + fib[i - 1];
        result.push(fib[i].toString());
    }
    showResultInHtml(result);
}

function showResultInHtml(result) {
    let element = document.getElementById('result');
    if (element == null || result == null) {
        return null;
    }
    element.innerText = result.toString();
}
