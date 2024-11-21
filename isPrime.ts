/*
    Checks if the inputted number is prime.
*/
function isPrime(number: number): boolean {
    for (let i: number = 2; i < number; i++) {
        if (number % i === 0) {
            return false;}
    }
    return true;
}

let display: string; // variable representing the main element
display = "<h2>Is it prime, or is it not?</h2>";

const userNumber: number = Number(prompt("Enter your number:")); // gets the user's chosen number to test
if (isPrime(userNumber)) { // tests the number to see if it's prime and updates the display accordingly
    display.concat(`<br>${userNumber} is prime!</br>`)
} else {
    display.concat(`<br>${userNumber} is, sadly, not prime.</br>`);
}

document.getElementById("main")!.innerHTML = display; // displays the text on the screen