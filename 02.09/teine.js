const array = [1, 2, 3, 4, 5];

function FindIndex(array, num){
    return array.indexOf(num);

}

console.log(FindIndex(array, 5));



const Sum = (a, b) => {return a + b;};
console.log(Sum(1, 2));
//shorthand arrow
const Summ = (a, b) => a + b;
console.log(Summ(1, 9));




function addNumbersNested(num1){
    return function(num2){
        return num1 + num2;
    };
};

console.log(addNumbersNested(3)(4));

const addNumbersNestedd = (num1) => (num2) => num1 + num2;
console.log(addNumbersNestedd(10)(20)); 