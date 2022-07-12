import PromptSync, { Prompt } from 'prompt-sync';
import * as math from 'mathjs';
import formatOperation from './helper/formatOperation';

//promt configuration
let prompt: Prompt = PromptSync({
  sigint: false,
});

console.log('\n');
console.log(" ######### Calculator  ##########\n");
let operation: string = prompt(" Enter a calculation operation ex : ((12 / 4 + 3) x 7) : ");
let result: any = null;
console.log("\n");

try {

  result = math.evaluate(formatOperation(operation));
  if (result === Infinity) {
    console.log(" Wrong Operation");
  } else {
    console.log(` The result is ${result}`);
  }

} catch (error) {
  console.error(" Invalid Operation");
}

console.log("\n");
