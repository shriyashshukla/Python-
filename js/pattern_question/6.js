let n=5 ;
for (let i=1; i<n;i++){
    let row=''
    for (let j=0;j<n;j++){
        row+="*"
    }
    console.log(row)
}

for (let i=1;i<=n;i++)
{
    let row=''
    for (let j=0;j< i;j++){
row+='*'
    
        
    }
    console.log(row)
}

for (let i=n;i>0;i--)
{
    let row=''
    for (let j=0;j<i;j++)
    {
        row+='*'
    }
    console.log(row)
}


for (let i = 0; i < n; i++) {
    let row =' '.repeat(n-i-1) + '* '.repeat(i + 1);
    console.log(row);
}


for (let i=0; i<n;i++){
    let row =' '.repeat(n-i-1)+'* '.repeat(i+1);
    console.log(row);

}
for (let i=n-1; i>0;i--)
{
    let row = ' '.repeat(n-i)+'* '.repeat(i)
    console.log(row);
}

let n=5
for (let i=1;i<=n;i++){
    let row = '';
    for (let j=1;j<=i;j++){
        row +=j+''

    }
    console.log(row);
}

let n =5
for (let i=0;i<n;i++){
    let num = 1
    let row =''
    for (let j=0;j<=i;j++){
        row += num +''
        num  = num*(i-j)/(j+1)
    }
    console.log(row);
}

let n =5
for (let i=0;i<n;i++){
    let row = ' '.repeat(n - i - 1) + '* '.repeat( i + 1 )
    console.log(row);
    }
for (let i=n-1;i>0;i--){
     let row = ' '.repeat(n-i)+'* '.repeat(i)
     console.log(row);
  }
    

let n = 4;
for (let i = n; i > 0; i--) {
    let row = ' '.repeat(n - i) + '* '.repeat(i);
    console.log(row);
}

let n=6
for (let i=1;i<n;i++){
    let row = ' '.repeat(n-i)+Array.from({length:i},(_,k) => k+1).join(' ');
    console.log(row);
}