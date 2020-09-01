/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */

const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */

  createTransaction(amount, type) {
    const newTransaction = {
      id: 0,
      amount,
      type,
    };
    this.transactions.push(newTransaction);
    for (const transaction of this.transactions) {
      transaction.id += 1;
      console.log(transaction);
    }
    return this.transactions;
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    this.balance += amount;
    return this.balance;
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    let message;
    if (amount <= this.balance) {
      this.balance -= amount;
      return this.balance;
    }
    message = 'Cнятие такой суммы не возможно, недостаточно средств';
    return message;
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return this.balance;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    const keys = Object.keys(this.transactions);

    if (this.transactions.id === id) {
      return this.transactions;
    }
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    const { DEPOSIT, WITHDRAW } = Transaction;
    if (type === DEPOSIT) {
      deposit(amount);
    }
    withdraw(amount);
  },
};

console.log(account.createTransaction(200, 'deposit'));
console.log(account.createTransaction(300, 'deposit'));
console.log(account.createTransaction(300, 'deposit'));
console.log(account.deposit(200));
console.log(account.withdraw(100));
console.log(account.getTransactionDetails(2));
