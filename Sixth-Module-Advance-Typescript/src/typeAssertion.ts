let anything : any

anything = 123;
(anything as number)


const kgToMGConverter = (input : string | number ) : string | number |undefined  =>{
    if(typeof input == 'number'){
        return input * 1000;
    }else if(typeof input == 'string'){
        const [value] = input.split(' ')
        return `converted string ${Number(value) * 1000}`;
    }
}

const result1 = kgToMGConverter(3) as number

console.log(kgToMGConverter('4 tk') as number)