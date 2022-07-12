import PromptSync, { Prompt } from 'prompt-sync';
import * as math from 'mathjs';
import formatOperation from './helper/formatOperation';
import colors from 'colors';

colors.enable();

//promt configuration
let prompt: Prompt = PromptSync({
  sigint: false,
});

console.log('\n');
console.log("          ######### Calculator  ##########\n".cyan);
let operation: string = prompt("          Enter a calculation operation ex : ((12 / 4 + 3) x 7) : ".gray);
let result: any = null;
console.log("\n");

try {

  result = math.evaluate(formatOperation(operation));
  if (result === Infinity) {
    console.log("          Wrong Operation".yellow);
  } else {
    console.log(`          The result is ${result}`.green);
  }

} catch (error) {
  console.error("          Invalid Operation".red);
}

console.log("\n");


