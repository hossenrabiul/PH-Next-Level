interface Iuser {
    name : string;
    age : string;
}

interface Iuser2 {
    roll : number,
}



interface IuserWithRole extends Iuser{
    roll : number
}


const user : IuserWithRole = {
    name : 'rabiul',
    age :  '45',
    roll : 45,
}


interface Ifriends{
   [idx : number] : string
}

const num : Ifriends = ['22', '3', '4']