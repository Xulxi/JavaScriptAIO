/*

    Lottery Simulator:
    Asks the user to input three lucky numbers and
    the program will run a lottery simulation with
    the user's lucky numbers over and over until
    they win. It will then display how many attempts
    it took before they won.

*/

function sample(arr: number[], count: number): number[] {

  // shuffles the array using fisher-yates algorithm
  const shuffled: number[] = [...arr]; // copies the given array
  for (let i: number = shuffled.length - 1; i > 0; i--) {
    const j: number = Math.floor(Math.random() * (i + 1)); // selects a random number
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // swaps elements
  }

  // returns count num of elements from the shuffled array
  return shuffled.slice(0, count);
}

const lotteryNumbers : number[] = []; // creates a list of lottery numbers from 1-99
for (let i: number = 1; i < 100; i++) {
  lotteryNumbers.push(i);
}

let luckyNumbers: number[] = []; // creates an empty list to store lucky numbers
luckyNumbers.sort();

for (let i: number = 1; i <= 3; i++) { // asks the user for three lucky numbers
  luckyNumbers.push(Number(prompt(`Enter Lucky #${i}`)));
}

let count: number = 0;
do { // while loop for the simulation until the user wins with the same lucky numbers
  count++;
} while (luckyNumbers !== sample(lotteryNumbers, 3).toSorted());

document.getElementById("main")!.innerHTML = `You played the lottery ${count} times before winning.`