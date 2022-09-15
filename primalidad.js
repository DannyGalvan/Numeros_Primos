

const numeros = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418, 317811, 514229];

export function esPrimo(numero) {

   if (numero == 2 || numero == 3 || numero == 5 || numero == 7) {
       return `${numero}`;
   }

   if (numero % 2 == 0 || numero % 3 == 0 || numero % 5 == 0 || numero % 7 == 0) {
        return 0
    }else{
        return`${numero}`;
    }
}

export function render(numeros) {
   return numeros.map(num => esPrimo(num)).filter(num => num != 0)
}


export function primos(inicio = 0, final = 10) {

    const array = [];
    
    for (let index = inicio; index <= final; index++) {
        
        const num = esPrimo(index);

        array.push(num);

    }

    return array.map(num => num).filter(num => num != 0);
}


