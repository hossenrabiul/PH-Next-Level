const TwoSum = (arr, target) =>{
    const map = new Map()
    for(let i = 0; i < arr.length; i++){
        const val = target - arr[i];
        if(map.has(val)){
            return [map.get(val), i];
        }else{
            map.set(arr[i], i)
        }
    }
    return undefined
}

const arr = [2, 5, 3, 7, 4]
console.log(TwoSum(arr, 9))


const val = 5;
console.log(val)