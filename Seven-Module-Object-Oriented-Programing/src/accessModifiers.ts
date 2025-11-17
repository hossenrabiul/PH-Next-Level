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

  addBalance(amount: number) {
    this.bank_balance =  this.bank_balance + amount;
  }
}

class User1 extends BankAccount {
  add(amount: number): void {
    this.bank_balance += amount;
  }
}

const user1 = new BankAccount(222, "Rabiul", 20);

const user2 = new User1(3464, "Mezba", 34);

user1.addBalance(300);

user2.add(34);
console.log(user1);
console.log(user2);
