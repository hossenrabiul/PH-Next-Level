const times = [
    {time : '2025-11-09T08:57:00Z', student : 'Tanisha'},
    {time : '2025-11-09T08:23:00Z', student : 'Aysha'},
    {time : '2025-11-09T07:32:00Z', student : 'Mitila'},
    {time : '2025-11-09T07:56:00Z', student : 'Mili'},
]

const interval = 30 * 60 * 1000;

const biming = (timestamp) =>{
    const date = new Date(timestamp)
    const florred = Math.floor(date.getTime() / interval) * interval

    return new Date(florred).toISOString()
}

const timeStamp = times.reduce((obj, time) =>{
    const bimingTime = biming(time.time)

   if(!obj[bimingTime]){
        obj[bimingTime] = {total : 0};
   }
   obj[bimingTime].total += 1;

   return obj
},{})


console.log(timeStamp)