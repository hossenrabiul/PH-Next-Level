class BankAccount {
  public readonly userId: number;
  public user_name: string;
  // If the access is protected then this value can be accesed from its childs class, If private can not be accessed from anywhere except within this class
  protected bank_balance: number;

  constructor(userId: number, user_name: string, bank_balance: number) {
    this.userId = userId;
    this.user_name = user_name;
    this.bank_balance = bank_balance;
  }

//   set and get are building functions to add amout with the previoud amount and get total amount  
  set addBalance(amount: number) {
    this.bank_balance = this.bank_balance + amount;
  }

  get getBalance(){
    return this.bank_balance
  }
}

const user1 = new BankAccount(222, "Rabiul", 20);
user1.addBalance = 1000
console.log(user1.getBalance)
console.log(user1)