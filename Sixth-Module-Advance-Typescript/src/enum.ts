
// type userRoles = "Admin" | "Editor" | "Fixed"

enum userRoles {
    Admin = "Admin",
    Editor = "Editor",
    Fixed = "Fixed"
}

const canEdit = (role : userRoles) =>{
    if(role ===  userRoles.Admin || role === userRoles.Editor){
        return true
    }
    return false
}

console.log(canEdit(userRoles.Admin))