///////////////////////////////////////Task 1////////////////////////////////////////////////////
// class Account {
//     static accountNo = 0;
//     constructor(name, balance) {
//         this.id = ++Account.accountNo;
//         this.name = name;
//         this.balance = balance;
//     }

//     depositMoney(depositedAmount) {
//         this.balance += depositedAmount;
//     }

//     withdrawMoney(withdrawlAmount) {
//         if (this.balance - withdrawlAmount > 0) {
//             this.balance -= withdrawlAmount;
//         }
//     }

//     displayAccount() {
//         console.log(`${this.name}'s account has balance of ${this.balance}`);
//     }

//     makeTransaction(rhsAccount, amount) {
//         this.withdrawMoney(amount);
//         rhsAccount.depositMoney(amount);
//     }
// }

// class SavingsAccount extends Account {
//     constructor(name, balance) {
//         super(name, balance);
//     }
// }

// class CurrentAccount extends Account {
//     constructor(name, balance) {
//         super(name, balance);
//     }
// }

// class AccountFactory {
//     constructor(type, props) {
//         if (type === "Savings") {
//             return new SavingsAccount(props.name, props.balance);
//         }
//         if (type === "Current") {
//             return new CurrentAccount(props.name, props.balance);
//         }
//     }
// }

// let hagerProps = {
//     name: "Hager",
//     balance: 30000,
// };

// let hagerAccount = new AccountFactory("Savings", hagerProps);
// hagerAccount.displayAccount();

// let sarahProps = {
//     name: "Sarah",
//     balance: 20000,
// };

// let sarahAccount = new AccountFactory("Current", sarahProps);
// sarahAccount.displayAccount();

// hagerAccount.depositMoney(8000);
// sarahAccount.withdrawMoney(3000);
// hagerAccount.displayAccount();
// sarahAccount.displayAccount();

// hagerAccount.makeTransaction(sarahAccount, 1000);
// hagerAccount.displayAccount();
// sarahAccount.displayAccount();
/////////////////////////////////////////////////Task 2//////////////////////////////////////////////////////
  