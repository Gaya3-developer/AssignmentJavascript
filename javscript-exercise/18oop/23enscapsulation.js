class Account {

    //Public fields
    nationality = 'Indian';

    //Private fields
    #movements = [];
    #pin; //declaring pin as private

    constructor(owner, currency, pin){
        this.owner = owner;
        this.currency = currency;
        this.#pin = pin;

    }


    //Public interface
    getMovements(){
        return this.#movements;
    }

    deposit(val){
        this.#movements.push(val);
        return this;
    }

    withdraw(val){
        this.deposit(-val);
        return this;
    }

    requestLoan(val){
        if(this.#approveLoan(val)){
            this.#movements.push(val);
        }
        return this;
    }

    //Private method
    #approveLoan(val){
        return true;
    }
};

const acc1 = new Account('Jim', 'EUR', 2222);
acc1.deposit(300);
acc1.withdraw(130);
console.log(acc1.getMovements()); //accessing private property

acc1.requestLoan(5000);

console.log(acc1);


//chaining
acc1.deposit(500).deposit(200).withdraw(150).requestLoan(10000);

console.log(acc1.getMovements());




if(prop !==  'tracks' && value !== ''){
    records.id[prop] = value;
  }
  if(prop === 'tracks' && records.hasOwnProperty('tracks')){
    records.id.arr = [];
    records.id.arr.push(value);
  }
  if(prop === 'tracks' && value !== ''){
    records.id.tracks.push(value);
  }
  if(value === ''){
    delete records.id.prop;
  }