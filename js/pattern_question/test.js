let n=5
// for (let i=n;i>0;i--)
//     {
//         let row=''
//         for (let j=0;j<i;j++)
//         {
//             row+='*'
//         }
//         console.log(row)
//     }

for (let i = 0; i < n; i++) {
   let row =''.repeat(n-i-1)+"* ".repeat(i+1)
    console.log(row)
    
}