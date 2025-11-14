const userRoles = {
    Admin : "Admin",
    Editor : "Editor",
    Fixed : "Fixed"
} as const

type users = {
    id : number;
    name : string;
}

const canEdit = (role : keyof typeof userRoles) =>{

    if(role ===  userRoles.Admin){
        console.log(role)
    }
    return false
}

console.log(canEdit(userRoles.Admin))



