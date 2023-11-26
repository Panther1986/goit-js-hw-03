const number = [1, 5, 8,9, 12, 4, 15, 27, 30, 18, 11];
let total = 0;

for (let i = 0; i < number.length; i += 1){
    console.log(number[i]);
    if (number[i] % 2 === 0) {
        console.log('UHHHHH')

        total += number[i];
    }
    

    console.log('Total:', total);
}
