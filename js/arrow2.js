class Counter {
    constructor() {
        this.count = 10;

        setInterval(() => {
            this.count++; 
            console.log(this.count);
        }, 2000);
    }
}

const counter = new Counter(); 

class CounterArrow {
    constructor() {
        this.count = 0;

        setInterval(() => {
            this.count++; 
            console.log(this.count);
        }, 2000);
    }
}

const counterArrow = new CounterArrow(); 



