

type RichVehicle = {
    "bike" : string;
    "car" : string;
    "cng" : string
}

type MyVehicle1  = "bike" | "car"  | "cng"
type MyVehicle2 = keyof RichVehicle

const vehicle : MyVehicle2 = "bike"

type User = {
    id : number,
    name : string;
    address : {
        city : string
    }
}
const user1 : User  = {
    id : 34,
    name : 'User',
    address : {
        city : "Chittagong"
    },
}

const user2 = {
    id : 45,
    roll : '45',
    section : 'B'
}



const getPropertyFromobj = <T>(obj : T, key : keyof T) =>{
    return obj[key]
}

console.log(getPropertyFromobj(user1, "id"))
console.log(getPropertyFromobj(user2, "roll"))


