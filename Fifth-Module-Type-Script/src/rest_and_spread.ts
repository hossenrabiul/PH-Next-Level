const friendsFun = ((...friends : string[]) =>{
    friends.forEach((friend) =>{
        console.log(`Invitation send to ${friend}`)
    })
}) 
friendsFun('mintu', 'chintu', 'montu', 'mealso')