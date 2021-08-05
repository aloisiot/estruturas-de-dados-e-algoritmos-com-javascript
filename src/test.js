const Queue=require('./data-structures/Queue');

const queue= new Queue()

console.log(queue.isEmpty())
queue.enqueue('Lana');
queue.enqueue('mario');
queue.enqueue('Marcia');
queue.enqueue('davi');
queue.enqueue('Tamires');
queue.dequeue();
queue.clear()
console.log(queue.size()+10)