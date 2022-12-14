function fibo(num) {
    let arrayFib = [1, 1];
    for(let i = 2; i < num; i++) {
        arrayFib.push(arrayFib[i-1] + arrayFib[i-2])
    }
    return arrayFib
}

const serie1 = fibo(6)
console.log(serie1)

