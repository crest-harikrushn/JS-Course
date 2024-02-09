"use strict";

// ====================================================

const account1 = {
  owner: "Jonas Schmedtmann",
  transactions: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  transactions: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  transactions: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  transactions: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// ==============================================================

const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

// ===================================================================

// Implementing showTransaction
function showTransactions(transactions, sort = "false") {
  const trans = sort
    ? transactions.slice().sort((a, b) => a - b)
    : transactions;

  containerMovements.innerHTML = "";
  trans.forEach((transaction, i) => {
    let type = transaction >= 0 ? `deposit` : `withdrawal`;

    let html = `<div class="movements__row">
    <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type} deposit</div>
    <div class="movements__value">${transaction}€</div>
  </div>`;

    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
}

showTransactions(account1.transactions);

// ===================================================================

// Implementing Username
function usrname(accounts) {
  accounts.forEach((acc) => {
    acc.username = acc.owner.toLowerCase().trim().split(" ");
    let result = "";
    for (const i of acc.username) {
      result += i[0];
    }
    acc.username = result;
  });
}
usrname(accounts);

// ===================================================================

// Implementing Current balance
function currentBalance(account) {
  account.balance = account.transactions.reduce((sum, val) => {
    return sum + val;
  }, 0);
  labelBalance.innerHTML = account.balance + `€`;
}

// ===================================================================

//  Implemetning the summery Section with total of all
function totalDisplay(accounts) {
  // Implementing the positive / Credits
  let credits = accounts.transactions
    .filter((val) => {
      return val >= 0;
    })
    .reduce((sum, val) => {
      return sum + val;
    });
  labelSumIn.innerHTML = credits;

  // Implementing the Negatives / Debits
  let debits = accounts.transactions
    .filter((val) => {
      return val < 0;
    })
    .reduce((sum, val) => {
      return sum + val;
    });
  labelSumOut.innerHTML = Math.abs(debits);

  // Implementing the interest
  let interest = accounts.transactions
    .filter((val) => {
      return val >= 0;
    })
    .map((v) => {
      return Math.floor(v * accounts.interestRate) / 100;
    })
    .filter((e, i, arr) => {
      return e >= 1;
    })
    .reduce((sum, v) => {
      return sum + v;
    });
  labelSumInterest.innerHTML = Math.floor(interest);
}

// ===================================================================

// Handling the Login
btnLogin.addEventListener("click", login);

let currentAccount;

function login(e) {
  // prevents form from submitting
  e.preventDefault();

  currentAccount = accounts.find((acc) => {
    return acc.username === inputLoginUsername.value;
  });

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI
    containerApp.style.opacity = 100;

    // Display Message
    labelWelcome.innerHTML = `Welcome back, ${
      currentAccount.owner.split(" ")[0]
    }`;

    //  Clear Input Fields
    inputLoginUsername.value = inputLoginPin.value = "";
    inputLoginPin.blur();
    inputLoginUsername.blur();

    // Show Transactions
    // Display Balance
    // Display Summery
    updateUI(currentAccount);
  }
}

// ===================================================================

//  Implementing Transfers
btnTransfer.addEventListener("click", transfer);

function transfer(e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receivcerObject = accounts.find((acc) => {
    return acc.username === inputTransferTo.value;
  });

  //  Clear inoput fields
  inputTransferAmount.value = inputTransferTo.value = "";

  // Deduct amount from current user
  if (
    amount > 0 &&
    receivcerObject &&
    amount < currentAccount.balance &&
    receivcerObject.username !== currentAccount.username
  ) {
    console.log("transfer valid");
    currentAccount.transactions.push(amount * -1);
  }

  // Update entry in
  receivcerObject.transactions.push(amount);
  updateUI(currentAccount);
  console.log(accounts);
}

// ===================================================================

// General Function to  update the UI
function updateUI(acc) {
  showTransactions(acc.transactions);
  currentBalance(acc);
  totalDisplay(acc);
}

// ===================================================================

btnClose.addEventListener("click", closeAccount);

function closeAccount(e) {
  e.preventDefault();
  let deleteaccount = inputCloseUsername.value;
  let deleteaccountpin = inputClosePin.value;

  if (
    currentAccount.username === deleteaccount &&
    currentAccount.pin === Number(deleteaccountpin)
  ) {
    const index = accounts.findIndex((acc) => {
      return acc.username === currentAccount.username;
    });
    console.log(index);
    console.log(accounts.splice(index, 1));

    // Hide the UI
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = "";
}

// ===================================================================

// Loan Functionality
btnLoan.addEventListener("click", function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (
    amount > 0 &&
    currentAccount.transactions.some((mov) => mov >= amount * 0.1)
  ) {
    // Add movement
    currentAccount.transactions.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = "";
});

// ===================================================================

// Sorting
let sorted = false;
btnSort.addEventListener("click", function (e) {
  e.preventDefault();
  showTransactions(currentAccount.transactions, !sorted);
  sorted = !sorted;
});
