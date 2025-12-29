import { prisma } from "./lib/prisma";

async function run(){
    // const user = await prisma.user.create({
    //     data : {
    //         name : "Jhankar mahbub",
    //         email : "jhankar@next.com"
    //     }
    // })
    // console.log("User", user)

    // Create post 
    // const post = await prisma.post.create({
    //     data : {
    //         title : "This is my first post",
    //         content : "this is the post of id 1",
    //         authorId : 3
    //     }
    // })
    // console.log(post)

    // Profile
    // const userProfile = await prisma.profile.create({
    //     data : {
    //         dateOfBirth : new Date("2025-11-02"),
    //         userId : 1,
    //     }
    // })
    // console.log("Profile", userProfile)

    // // retrive all users
    // const allUser = await prisma.user.findMany({
    //     // include : {
    //     //     posts : true,
    //     //     profile : true,
    //     // },
    //     select : {
    //         id : true,
    //         name : true,
    //         email : true,
    //         posts : true,
    //         profile : true,
    //     }
    // })
    // console.dir(allUser, {depth : Infinity})


    // get all profile
    // const getProfile = await prisma.profile.findMany()
    // console.log(getProfile)

    // Update
    // const updateProfile =  await prisma.profile.update({
    //     where : {
    //         id : 1
    //     },
    //     data : {
    //         bio : "Hey i am rabiul from bangladesh"
    //     }
    // })
    // console.log(updateProfile)

    // delete 
    // const deleteUser = await prisma.user.delete({
    //     where : {
    //         id : 3
    //     }
    // })
    // console.log(deleteUser)
    // create
    // const createUser = await prisma.user.create({
    //     data : {
    //         name : "rabiull",
    //         email : "Hossen@gmailcom"
    //     }
    // })
    // console.log(createUser)



    // upsert
    const upsertUser = await prisma.user.upsert({
        where : {
            email : "jkw@gmail.com"
        },
        update : {
            name : "Jhankar mahbub 2"
        },
        create : {
            name : "Jhankar mahbub",
            email : "jkw@gmail.com"
        }
    })

    console.log(upsertUser)
}
run()