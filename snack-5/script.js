const nums = [2, 8, 4, 7, 12, 87];

// Crea un array a partire dall'array nums, che abbia solo i numeri pari
// Risultato: [2, 8, 4, 12]

const newNuber = nums.filter((item)=>{
    return item %2==0
})
console.log(newNuber)