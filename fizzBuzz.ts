function fizzBuzz(n: number): string[] {
  let arr : string[] = [];
    for(let i = 1; i <= n; i++) {
        if (!(i % 3) && !(i % 5))
            arr[i - 1 ] = 'FizzBuzz';
        else if (!(i % 3))
            arr[i - 1] = 'Fizz';
        else if(!(i % 5))
        arr[i - 1] = 'Buzz';
        else
        arr[i - 1] = '' + i;
    }
    return arr;
};

console.log(fizzBuzz(15))