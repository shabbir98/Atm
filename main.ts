#! /usr/bin/env node
import promptSync from 'prompt-sync';

const prompt = promptSync();

const showCurrentBalance = (balance: number) =>
  console.log(`Your current balance is now Rs.${balance}`);

function atm() {
  const pin = 1153;
  let deposit: number,
    withdraw: number,
    choice: number,
    anotherTransaction = '',
    amount = 5000;
  // console.log(pin.toString().length);

  let enterYourPin = parseInt(prompt(`Enter your PIN: `, { echo: '*' }));

  while (enterYourPin !== pin) {
    enterYourPin = parseInt(prompt(`Please enter valid PIN: `, { echo: '*' }));

    if (enterYourPin === pin && enterYourPin.toString().length === 4) {
      console.clear();
      break;
    }
  }

  do {
    console.log(
      `\n*********** Welcome to SHL Bank ATM Service ***********\n\n1. Check Balance\n2. Withdraw Cash\n3. Deposit Cash\n4. Quit\n\n********************************************\n`
    );
    choice = parseInt(prompt(`Enter your choice: `));

    switch (choice) {
      case 1:
        console.log(`\nYour balance is Rs.${amount}\n`);
        break;

      case 2:
        withdraw = parseInt(prompt(`Enter the amount to withdraw: `));
        if (withdraw < 500 || withdraw > 25000)
          console.log(
            `\nWITHDRAW CAN'T BE LESS THAN 500 OR GREATER THAN 25000`
          );
        else if (withdraw > amount) console.log(`\nInsufficient Balance`);
        else {
          amount -= withdraw;
          console.log(`\nPlease collect cash...\n`);
          showCurrentBalance(amount);
        }
        break;

      case 3:
        deposit = parseInt(prompt(`Enter the amount to deposit: `));
        amount += deposit;
        showCurrentBalance(amount);
        break;

      case 4:
        console.clear();
        console.log(`\nThank you for using our atm service`);
        break;

      default:
        console.log(`\nInvalid choice!`);
    }

    if (choice !== 4)
      anotherTransaction = prompt(
        `Press 'y' to go back to the main menu or any key to exit: `
      );
    else break;

    console.clear();
  } while (anotherTransaction === 'y');
}

atm();
