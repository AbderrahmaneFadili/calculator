import PromptSync, { Prompt } from 'prompt-sync';
import * as math from 'mathjs';
import formatOperation from './helper/formatOperation';
import colors from 'colors';
import clearScreen from './helper/clearScreen';

colors.enable();

//promt configuration
let prompt: Prompt = PromptSync({
  sigint: false,
});
let choice: number = 0;
//start
do {

  console.log('');
  console.log("          ######### Calculator  ##########\n".cyan);
  console.log("          1 - Calculate.".cyan);
  console.log("          2 - Exit.".cyan);

  console.log('\n');
  choice = parseInt(prompt("          Enter a choice : ".dim));



  switch (choice) {
    case 1:
      clearScreen();
      console.log('\n');
      let operation: string = prompt("          Enter a calculation operation ex : ((12 / 4 + 3) x 7) : ".gray);
      let result: any = null;
      console.log("\n");

      try {

        result = math.evaluate(formatOperation(operation));
        if (result === Infinity) {
          clearScreen();
          console.log("\n          Wrong Operation\n".yellow);
        } else {
          clearScreen();
          console.log('\n         The answer :'.cyan);
          console.log(`          ${operation} = ${result}\n`.cyan);
        }

      } catch (error) {
        console.error("\n          Invalid Operation\n".red);
      }

      console.log("\n");
      break;
    case 2:
      clearScreen();
      console.log("\n          You'r Quite\n".dim);
      console.log(`\n          Made in Morocco Copy - © ${new Date().getFullYear()} \n`.bgRed.green);
      break;
    default:
      clearScreen();
      console.log("\n          Please select from the menu\n".yellow);
      break;
  }




  //until this condition
} while (choice !== 2);
