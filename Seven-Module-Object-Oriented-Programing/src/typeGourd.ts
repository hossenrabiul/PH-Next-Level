type NormalUser = {
    name : string
}

type AdminUser  ={
    name : string;
    role : string
}


const getUser =  (user : NormalUser | AdminUser) =>{
    if("role" in user){
        console.log(`${user.name} and his role ${user.role}`)
    }else{
        console.log(`${user.name}`)
    }
}

getUser({name : "robiul", role : "Admin"})