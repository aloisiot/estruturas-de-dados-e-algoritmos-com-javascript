// @ts-check

const Queue=require('../data-structures/Queue')
const queue=new Queue();

/**
 * 
 * @param {*} list Array de de elementos a serem sorteados;
 * @returns {object} { winner, eliminated } 
 */
function hotPotato(list){

    const hops=Math.floor(Math.random()*100)
    const eliminateList=[];

    for(let i=0; i<list.length;i++){
        queue.enqueue(list[i]);
    }

    while(queue.size()>1){
        for(let i=0; i<hops;i++){
            queue.enqueue(queue.dequeue());
        }
        eliminateList.push(queue.dequeue());
    }
    return{
        winner: queue.dequeue(),
        eliminated: eliminateList,
    }
}

module.exports=hotPotato;