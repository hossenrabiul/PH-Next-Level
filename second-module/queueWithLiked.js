class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue{

    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    append(value){
        const newNode = new Node(value)

        if(this.head == null){
            this.head = newNode;
            this.tail = this.head;
        }else{
            newNode.next = this.head;
            this.head = newNode;
        }
    }

    peek(){
        if(this.isEmpty()){
            return "Queue Is Emptpy"
        }

        return this.head.value;
        
    }
    remove(){
        if(this.isEmpty()){
            return "Queue is empty";
        }
        const removeNode = this.head.value;
        this.head = this.head.next;

        if(this.head == null){
            this.tail = null;
        }

        return removeNode
    }

    isEmpty(){
        if(this.head == null){
            return true;
        }
        return false;
    }

    print(){
        let tmp = this.head;
        let arr = []
        while(tmp != null){
            
            arr.push(tmp.value)
            tmp = tmp.next;
        }
        
        console.log(arr.join(' -> '), '->',"null")
    }
}

const myQueue = new Queue();

myQueue.append(10)
myQueue.append(20)
myQueue.append(30)

console.log(myQueue.remove())
console.log(myQueue.peek())

myQueue.print()