let arr = [1, 2, 4, 8, 15];
console.log(arr);

let somar = 0;

for(let i = 0; i < arr.length; i++) {
    somar += arr[i];
    console.log("Valor do array: " +i , +somar)
}

console.log("Valor total somado dos arrays: " +somar);