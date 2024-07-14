function Counter() {
    this.count = 10;

    setInterval(function() {
        this.count++; 
        console.log(this.count);
    }, 2000);
}

const counter = new Counter(); 

function CounterArrow() {
    this.count = 0;

    setInterval(() => {
        this.count++; 
        console.log(this.count);
    }, 2000);
}

const counterArrow = new CounterArrow(); 
