
const events = [
    {timeStamp : '2025-10-22T10:05:00Z', event : 'click'},
    {timeStamp : '2025-10-22T10:10:32Z', events : 'update'},
    {timeStamp : '2025-10-22T10:40:32Z', events : 'submit'},
    {timeStamp : '2025-10-22T10:20:38Z', events : 'submit'},
]

const INTERVAL = 30 * 60 * 1000;

const time = new Date(events[2].timeStamp)

const totalSec = (time.getTime()/1000)

const min = totalSec / 60

const hour = min / 60
// console.log(hour)

const getBinningTimeStamp = (stamp) =>{
    const date = new Date(stamp);
    const time = Math.floor(date.getTime() / INTERVAL) * INTERVAL
    // console.log(time)
    return new Date(time).toISOString()
}

const getTime = getBinningTimeStamp(events[3].timeStamp)

const TotalEventsByTime = events.reduce((table, time) => {
    const fullDate = getBinningTimeStamp(time.timeStamp)

    if(!table[fullDate]){
        table[fullDate] = {total : 0}
    }
    table[fullDate].total += 1  
    return table;
}, {})

console.log(TotalEventsByTime)

