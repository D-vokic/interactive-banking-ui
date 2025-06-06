'use strict';

/**
 * SMART BANK APP
 * ==============
 * This application simulates a smart banking experience with predefined accounts and transactions.
 */

// ACCOUNTS DATA
/////////////////

/**
 * @typedef {Object} Transaction
 * @property {number} amount - The transaction amount (positive for deposit, negative for withdrawal).
 * @property {string} date - The ISO string representing the date and time of the transaction.
 */

/**
 * @typedef {Object} Account
 * @property {string} owner - Full name of the account holder.
 * @property {Transaction[]} transactions - List of transactions performed on the account.
 * @property {number} interestRate - Interest rate applied on deposits (as a percentage).
 * @property {number} pin - 4-digit Personal Identification Number for account login.
 * @property {string} currency - The currency used by the account (e.g. 'EUR', 'RSD').
 * @property {string} locale - Locale used for date and currency formatting (e.g. 'pt-PT').
 */

/** @type {Account} */
const account1 = {
  owner: 'Jeremia Schneider',

  transactions: [
    { amount: 200, date: '2019-11-18T21:31:17.178Z' },
    { amount: 455.23, date: '2019-12-23T07:42:02.383Z' },
    { amount: -306.5, date: '2020-01-28T09:15:04.904Z' },
    { amount: 25000, date: '2020-04-01T10:17:24.185Z' },
    { amount: -642.21, date: '2020-05-08T14:11:59.604Z' },
    { amount: -133.9, date: '2020-05-27T17:01:17.194Z' },
    { amount: 79.97, date: '2020-07-11T23:36:17.929Z' },
    { amount: 1300, date: '2020-07-12T10:51:36.790Z' },
  ],

  interestRate: 1.2, // %
  pin: 1111,
  currency: 'EUR',
  locale: 'pt-PT',
};

/** @type {Account} */
const account2 = {
  owner: 'Julia Danny',

  transactions: [
    { amount: 5000, date: '2019-11-01T13:15:33.035Z' },
    { amount: 3400, date: '2019-11-30T09:48:16.867Z' },
    { amount: -150, date: '2019-12-25T06:04:23.907Z' },
    { amount: -790, date: '2020-01-25T14:18:46.235Z' },
    { amount: -3210, date: '2020-02-05T16:33:06.386Z' },
    { amount: -1000, date: '2020-04-10T14:43:26.374Z' },
    { amount: 8500, date: '2020-06-25T18:49:59.371Z' },
    { amount: -30, date: '2020-07-26T12:01:20.894Z' },
  ],

  interestRate: 1.2, // %
  pin: 2222,
  currency: 'EUR',
  locale: 'pt-PT',
};

/** @type {Account} */
const account3 = {
  owner: 'Adolf Heinmman',

  transactions: [
    { amount: 2000, date: '2020-03-01T10:17:24.185Z' },
    { amount: -500, date: '2020-03-30T14:11:59.604Z' },
    { amount: 3400, date: '2020-04-25T16:33:06.386Z' },
    { amount: -1500, date: '2020-05-25T18:49:59.371Z' },
    { amount: -200, date: '2020-06-15T12:01:20.894Z' },
    { amount: 4000, date: '2020-07-20T08:22:13.035Z' },
    { amount: -650, date: '2020-08-10T09:48:16.867Z' },
    { amount: 1200, date: '2020-08-30T06:04:23.907Z' },
  ],

  interestRate: 1.2,
  pin: 3333,
  currency: 'EUR',
  locale: 'de-DE',
};

/** @type {Account} */
const account4 = {
  owner: 'Dusko Vokic',

  transactions: [
    { amount: 1500, date: '2021-01-10T09:15:04.904Z' },
    { amount: -300, date: '2021-02-14T10:24:12.511Z' },
    { amount: -250, date: '2021-03-03T14:18:46.235Z' },
    { amount: 4000, date: '2021-04-22T11:42:26.374Z' },
    { amount: -120, date: '2021-05-18T13:33:06.386Z' },
    { amount: 700, date: '2021-06-25T08:49:59.371Z' },
    { amount: 1300, date: '2021-07-30T16:01:20.894Z' },
    { amount: -450, date: '2021-08-12T17:45:33.035Z' },
    { amount: 2300, date: '2025-04-29T17:45:33.035Z' },
    { amount: 1100, date: '2025-04-25T17:45:33.035Z' },
  ],

  interestRate: 1.3,
  pin: 4444,
  currency: 'RSD',
  locale: 'sr-RS',
};

/**
 * Array of all bank accounts in the system.
 * @type {Account[]}
 */
const accounts = [account1, account2, account3, account4];

//////////////////////////////////////////////////////////
// ELEMENTS
/** @type {HTMLElement} Theme switch wrapper element */
const themeSwitchWrapper = document.querySelector('.theme-switch-wrapper');

/** @type {HTMLInputElement} Checkbox input for toggling theme */
const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);

/** @type {HTMLElement} Icon container for the theme toggle */
const toggleIcon = document.getElementById('toggle-icon');

/** @type {HTMLElement} Icon element inside the toggle icon container */
const icon = toggleIcon.querySelector('i');

/** @type {HTMLBodyElement} Body element of the document */
const body = document.body;

/** @type {HTMLElement} Heading container in header */
const headerHeading = document.querySelector('.between');

/** @type {HTMLElement} H1 element inside the header */
const headerH1 = document.querySelector('.between_header_h1');

/** @type {HTMLImageElement} Image in the header */
const headerImage = document.querySelector('.header-image');

/** @type {HTMLElement} Label displaying welcome message */
const labelWelcome = document.querySelector('.welcome');

/** @type {HTMLElement} Label showing current date */
const labelDate = document.querySelector('.date');

/** @type {HTMLElement} Label displaying account balance */
const labelBalance = document.querySelector('.balance__value');

/** @type {HTMLElement} Label showing sum of deposits */
const labelSumIn = document.querySelector('.summary__value--in');

/** @type {HTMLElement} Label showing sum of withdrawals */
const labelSumOut = document.querySelector('.summary__value--out');

/** @type {HTMLElement} Label showing interest earned */
const labelSumInterest = document.querySelector('.summary__value--interest');

/** @type {HTMLElement} Label showing logout timer */
const labelTimer = document.querySelector('.timer');

/** @type {HTMLElement} Main app container */
const containerApp = document.querySelector('.app');

/** @type {HTMLElement} Container for displaying account movements */
const containerMovements = document.querySelector('.movements');

/** @type {HTMLButtonElement} Login button */
const btnLogin = document.querySelector('.login__btn');

/** @type {HTMLButtonElement} Transfer money button */
const btnTransfer = document.querySelector('.form__btn--transfer');

/** @type {HTMLButtonElement} Request loan button */
const btnLoan = document.querySelector('.form__btn--loan');

/** @type {HTMLButtonElement} Close account button */
const btnClose = document.querySelector('.form__btn--close');

/** @type {HTMLButtonElement} Sort movements button */
const btnSort = document.querySelector('.btn--sort');

/** @type {HTMLInputElement} Input field for login username */
const inputLoginUsername = document.querySelector('.login__input--user');

/** @type {HTMLInputElement} Input field for login PIN */
const inputLoginPin = document.querySelector('.login__input--pin');

/** @type {HTMLInputElement} Input field for transfer recipient */
const inputTransferTo = document.querySelector('.form__input--to');

/** @type {HTMLInputElement} Input field for transfer amount */
const inputTransferAmount = document.querySelector('.form__input--amount');

/** @type {HTMLInputElement} Input field for loan amount */
const inputLoanAmount = document.querySelector('.form__input--loan-amount');

/** @type {HTMLInputElement} Input field for closing account username */
const inputCloseUsername = document.querySelector('.form__input--user');

/** @type {HTMLInputElement} Input field for closing account PIN */
const inputClosePin = document.querySelector('.form__input--pin');

////////////////////////////////////////////////////////////////////////////////
// HELPER FUNCTIONS

/**
 * Toggles between dark and light themes based on a checkbox input event.
 *
 * @param {Event} event - The change event triggered by the theme switch checkbox.
 *   The event target should be a checkbox input element.
 *
 * If the checkbox is checked, the dark theme is applied:
 * - Sets the data-theme attribute to "dark"
 * - Replaces the icon class from 'fa-sun' to 'fa-moon'
 * - Changes the color of the header (H1) to green
 *
 * If the checkbox is unchecked, the light theme is applied:
 * - Sets the data-theme attribute to "light"
 * - Replaces the icon class from 'fa-moon' to 'fa-sun'
 * - Changes the color of the header (H1) to white
 */
function switchTheme(event) {
  if (event.target.checked) {
    // Dark Mode
    document.documentElement.setAttribute('data-theme', 'dark');
    icon.classList.replace('fa-sun', 'fa-moon');
    headerH1.style.color = 'green';
  } else {
    // Light Mode
    document.documentElement.setAttribute('data-theme', 'light');
    icon.classList.replace('fa-moon', 'fa-sun');
    headerH1.style.color = 'white';
  }
}

/**
 * Retrieves the current theme from localStorage and applies it to the document.
 * If a theme is found, it sets the 'data-theme' attribute on the root element.
 * If the theme is 'dark', it also checks the toggle switch and updates the icon.
 *
 * @const {string|null} currentTheme - The theme stored in localStorage ('light' or 'dark'), or null if not set.
 */
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);
  if (currentTheme === 'dark') {
    toggleSwitch.checked = true;
    icon.classList.replace('fa-sun', 'fa-moon');
  }
}

/**
 * Formats a given date relative to the current date (`now`) in a human-readable form.
 * - Returns "Today" if the date is the same day as `now`.
 * - Returns "Yesterday" if the date is one day before `now`.
 * - Returns "X days ago" if the date is within the last 7 days.
 * - Otherwise, returns the date formatted according to the specified locale.
 *
 * @param {Date} date - The date to be formatted.
 * @param {string} locale - The locale string used for date formatting (e.g. "en-US").
 * @param {Date} now - The current date used as a reference point.
 * @returns {string} The formatted date string.
 */
const formatMovementDate = function (date, locale, now) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const daysPassed = calcDaysPassed(now, date);

  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'Yesterday';
  if (daysPassed <= 7) return `${daysPassed} days ago`;
  return new Intl.DateTimeFormat(locale).format(date);
};

/**
 * Formats a number as a currency string according to the specified locale and currency code.
 *
 * @param {number} value - The numeric value to be formatted.
 * @param {string} locale - The locale string (e.g., 'en-US', 'de-DE') to format the number.
 * @param {string} currency - The currency code (e.g., 'USD', 'EUR') to use for formatting.
 * @returns {string} The formatted currency string.
 */
const formatCur = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
};

/**
 * Constants representing sorting options.
 * @constant {number}
 */
const SORT_DEFAULT = 0;
const SORT_ASC = 1;
const SORT_DESC = 2;

/**
 * Displays account transactions (movements) inside the containerMovements element.
 * Can optionally sort transactions ascending or descending by amount.
 *
 * @param {Object} acc - The account object containing transactions and locale info.
 * @param {Array<{amount: number, date: string}>} acc.transactions - Array of transaction objects.
 * @param {string} acc.locale - Locale string for date and currency formatting.
 * @param {string} acc.currency - Currency code for formatting amounts.
 * @param {number} [sort=SORT_DEFAULT] - Sort order: 0 (default), 1 (ascending), 2 (descending).
 */
const displayMovements = function (acc, sort = SORT_DEFAULT) {
  containerMovements.innerHTML = '';

  let transacs;
  if (sort === SORT_ASC) {
    transacs = acc.transactions.slice().sort((a, b) => b.amount - a.amount);
  } else if (sort === SORT_DESC) {
    transacs = acc.transactions.slice().sort((a, b) => a.amount - b.amount);
  } else {
    transacs = acc.transactions;
  }

  const now = new Date(); // Cache current date once

  transacs.forEach(function (trans, i) {
    const type = trans.amount > 0 ? 'deposit' : 'withdrawal';

    const date = new Date(trans.date);
    const displayDate = formatMovementDate(date, acc.locale, now); // pass cached date

    const formattedMov = formatCur(trans.amount, acc.locale, acc.currency);

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">
          ${i + 1} ${type}
        </div>
        <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${formattedMov}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

/**
 * Calculates the total balance of the account by summing all transaction amounts,
 * updates the account's balance property, and displays the formatted balance in the UI.
 *
 * @param {Object} acc - The account object.
 * @param {Array} acc.transactions - Array of transaction objects.
 * @param {number} acc.transactions[].amount - The amount of each transaction (positive or negative).
 * @param {string} acc.locale - The locale string used for formatting the currency.
 * @param {string} acc.currency - The currency code used for formatting the balance.
 */
const calcDisplayBalance = function (acc) {
  acc.balance = acc.transactions.reduce((acc, mov) => acc + mov.amount, 0);
  labelBalance.textContent = formatCur(acc.balance, acc.locale, acc.currency);
};

/**
 * Calculates and displays the summary of incomes, expenses, and interest for a given account.
 *
 * @param {Object} acc - The account object containing transactions, locale, currency, and interest rate.
 * @param {Array} acc.transactions - Array of transaction objects with an `amount` property.
 * @param {string} acc.locale - Locale string used for currency formatting.
 * @param {string} acc.currency - Currency code used for currency formatting.
 * @param {number} acc.interestRate - Interest rate percentage applied to positive transactions.
 */
const calcDisplaySummary = function (acc) {
  const incomes = acc.transactions
    .filter(trans => trans.amount > 0)
    .reduce((acc, trans) => acc + trans.amount, 0);
  labelSumIn.textContent = formatCur(incomes, acc.locale, acc.currency);

  const out = acc.transactions
    .filter(trans => trans.amount < 0)
    .reduce((acc, trans) => acc + trans.amount, 0);
  labelSumOut.textContent = formatCur(Math.abs(out), acc.locale, acc.currency);

  const interest = acc.transactions
    .filter(trans => trans.amount > 0)
    .map(trans => (trans.amount * acc.interestRate) / 100)
    .filter(int => int >= 1)
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = formatCur(interest, acc.locale, acc.currency);
};

/**
 * Creates a username for each account based on the initials of the account owner's name.
 * The username is stored as a new property `username` in each account object.
 *
 * @param {Array<Object>} accs - Array of account objects.
 * Each account object is expected to have an `owner` property which is a string containing the full name.
 *
 * @returns {void} This function modifies the input array objects directly and does not return anything.
 */
const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

/**
 * Updates the user interface with the latest account data.
 *
 * This function refreshes the displayed movements, balance,
 * and summary information for the given account.
 *
 * @param {Object} acc - The account object containing all relevant data.
 */
// updateUI
const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

/**
 * Starts a logout countdown timer of 2 minutes (120 seconds).
 * Updates a visible timer label and a progress bar showing time elapsed.
 * Changes progress bar color when time is low (last 20 seconds).
 * When timer reaches zero, clears the timer, updates UI to logged-out state.
 *
 * @returns {number} The interval timer ID, which can be used to clear the timer externally.
 */
const startLogOutTimer = function () {
  const logoutProgress = document.getElementById('logoutProgress');
  const maxTime = 120; // total time in seconds (2 minutes)
  let time = maxTime;

  /**
   * Updates the timer display and progress bar every second.
   * Handles UI changes when time runs out.
   */
  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, '0');
    const sec = String(time % 60).padStart(2, '0');
    labelTimer.textContent = `${min}:${sec}`;

    if (logoutProgress) {
      const percent = ((maxTime - time) / maxTime) * 100;
      logoutProgress.value = percent;

      // Change the color depending on the time
      if (time <= 20) {
        logoutProgress.classList.add('low-time');
        logoutProgress.classList.remove('normal-time');
      } else {
        logoutProgress.classList.add('normal-time');
        logoutProgress.classList.remove('low-time');
      }
    }

    if (time === 0) {
      clearInterval(timer);
      labelWelcome.textContent = 'Log in to get started';
      containerApp.style.opacity = 0;
      document.querySelector('.between').style.display = 'block';
      document.querySelector('.header-image').style.display = 'block';
    }

    time--;
  };

  tick(); // Call immediately
  const timer = setInterval(tick, 1000);
  return timer;
};

/**
 * Timer identifier used to manage the automatic logout countdown.
 * Declared globally to be accessible across functions.
 * @type {number | undefined}
 */
let logoutTimer;

/**
 * Resets the logout timer by clearing the existing interval and starting a new one.
 * Useful for extending the user's session when activity is detected.
 */
function resetLogoutTimer() {
  clearInterval(logoutTimer);
  logoutTimer = startLogOutTimer();
}

/**
 * Displays a temporary notification message on the screen.
 *
 * @param {string} message - The message to be displayed in the notification.
 * @param {number} [duration=3000] - Duration in milliseconds before the notification disappears.
 * @param {string} [type='error'] - Type of notification; accepted values are 'success' or 'error'. Affects the background color.
 */
function showNotification(message, duration = 3000, type = 'error') {
  const notification = document.getElementById('notification');
  if (!notification) return;

  notification.textContent = message;

  if (type === 'success') {
    notification.style.backgroundColor = '#28a745';
  } else {
    notification.style.backgroundColor = '#e52a5a';
  }

  notification.style.display = 'block';
  setTimeout(() => {
    notification.style.display = 'none';
  }, duration);
}

//// EVENT HANDLERS ////

/**
 * Handles theme toggle switch event.
 */
toggleSwitch.addEventListener('change', switchTheme);

let currentAccount, timer;

/**
 * Handles login button click event.
 * Validates user credentials, shows UI, updates date/time and sets inactivity timer.
 */
btnLogin.addEventListener('click', function (e) {
  e.preventDefault();

  document.querySelector('.theme-switch-wrapper').style.display = 'flex';
  document.querySelector('.between').style.display = 'none';
  document.querySelector('.header-image').style.display = 'none';

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === +inputLoginPin.value) {
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    const now = new Date();
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    };

    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);

    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    if (timer) clearInterval(timer);
    timer = startLogOutTimer();

    updateUI(currentAccount);
  }
});

/**
 * Handles transfer button click event.
 * Validates and processes money transfer to another account.
 */
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = +inputTransferAmount.value;
  const receiverUsername = inputTransferTo.value;

  const receiverAcc = accounts.find(acc => acc.username === receiverUsername);

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    showNotification(
      `Successfully transferred ${amount}€ to ${receiverUsername}`,
      3000,
      'success'
    );
  } else {
    if (!receiverAcc) {
      showNotification('Recipient account not found.');
    } else if (amount <= 0) {
      showNotification('Invalid transfer amount.');
    } else if (currentAccount.balance < amount) {
      showNotification(
        `Transferred ${amount}€ to ${receiverUsername} denied: Insufficient funds.`,
        3000,
        'error'
      );
    } else if (receiverAcc?.username === currentAccount.username) {
      showNotification('You cannot transfer to your own account.');
    }
  }

  inputTransferAmount.value = inputTransferTo.value = '';
});

/**
 * Handles loan request button click event.
 * Validates eligibility and processes loan after delay.
 */
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (
    amount > 0 &&
    currentAccount.transactions.some(t => t.amount >= amount * 0.1)
  ) {
    setTimeout(function () {
      currentAccount.transactions.push({
        amount: amount,
        date: new Date().toISOString(),
      });

      updateUI(currentAccount);

      clearInterval(timer);
      timer = startLogOutTimer();
    }, 2500);
  }
  inputLoanAmount.value = '';
});

/**
 * Handles account close button click event.
 * Validates user input and deletes account if credentials match.
 */
btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);

    accounts.splice(index, 1);
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

/**
 * Handles sort button click event.
 * Cycles through default, ascending, and descending sort states.
 */
let sortState = SORT_DEFAULT;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  sortState = (sortState + 1) % 3;

  if (sortState === SORT_DEFAULT) {
    btnSort.textContent = 'Sort ⇅ Default';
  } else if (sortState === SORT_ASC) {
    btnSort.textContent = 'Sort ↑ Ascending';
  } else if (sortState === SORT_DESC) {
    btnSort.textContent = 'Sort ↓ Descending';
  }

  displayMovements(currentAccount, sortState);
});

/**
 * Stores original and hover text for H1 element and
 * changes text on mouse events.
 */
const originalText = headerH1.textContent;
const hoverText = 'Let`s Enjoy in Funny Smartbanking!';

/**
 * Sets hover text on mouse enter.
 */
headerH1.addEventListener('mouseenter', () => {
  headerH1.textContent = hoverText;
});

/**
 * Restores original text on mouse leave.
 */
headerH1.addEventListener('mouseleave', () => {
  headerH1.textContent = originalText;
});


