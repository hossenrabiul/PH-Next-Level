// type generics = string[]
// type generics2 = number[]

type generics = Array<string>
type generics2<T> = Array<T>


// const user1: Array<string> = ['x', 'y', 'z']
// const user2: Array<number> = [1, 2, 4]


// const user1: generics = ['x', 'y', 'z']


const user1: generics2<string> = ['x', 'y', 'z']
const user2: generics2<number> = [1, 2, 4]

type generics3<x, y> = [x, y]

// const arr : number[] = [4,6]
const arr : generics3<string, number> = ['4', 6]


const users : generics2<{
    name : string,
    age : string,
}> = [ 
    {
    name : 'robiul',
    age : '23'
    },
    {
    name : 'robiul',
    age : '23',
    }
]
