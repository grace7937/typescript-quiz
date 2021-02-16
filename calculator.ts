/**
 * Let's make a calculator 🧮
 */
console.log(calculate('add', 1, 3)); // 4
console.log(calculate('substract', 3, 1)); // 2
console.log(calculate('multiply', 4, 2)); // 8
console.log(calculate('divide', 4, 2)); // 2
console.log(calculate('remainder', 5, 2)); // 1

type Command = 'add' | 'substrat' | 'multiply' | 'divide' | 'remainder';

function calculate(command: Command , firstNumber: number , secondNumber: number): number {
  
  switch(command) {
    case 'add': return firstNumber + secondNumber;
    case 'substract': return firstNumber - secondNumber;
    case 'multiply': return firstNumber * secondNumber;
    case 'divide': return firstNumber / secondNumber;
    case 'remanider': return firstNumber % secondNumber;
    default: throw Error('unknown command');
  } 
}