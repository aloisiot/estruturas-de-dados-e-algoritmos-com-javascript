// @ts-check

/**
 * { Function } Estrutura de dados indexada do tipo Filha
 * @returns metodos para manipular a estrutura de acordo com as regras FIFO
 */
const queue = () =>{
    let queue={};
    let count=0;
    let lowestCount=0

    /**
     * Adciona um elemento ao fim da fila.
     * @param {*} element elemento a ser adicionado à fila
     */
    const enqueue=(element)=>{
        queue[count]=element;
        count++;
    }

    /**
     * Remove o primeiro elemento da fila
     * @returns Retorna o elemento removido
     */
    const dequeue=()=>{
        if(isEmpty()) return undefined;
        
        const result = queue[lowestCount]; 
        delete queue[lowestCount];
        lowestCount++
        return result;
    }
    
    /**
     * @returns Retorna a quantidade de elementos contidos na fila
     */
    const size=()=> count-lowestCount;
    
    /**
     * @returns Retorna true caso não haja elementos na fila; retorna false caso não haja elementos na fila;
     */
    const isEmpty=()=>size()===0;
    
    /**
     * Remove todos os elementos da fila;
     */
    const clear=()=>{
        queue={};
        count=0;
        lowestCount=0;
    }

    /**
     * @returns Retorna o primeiro elemento da fila
     */
    const peek=()=> queue[lowestCount];

    /**
     * @returns Retorna uma string contendo todos os elementos da fila separados por virgula
     */
    const toString=()=>{
        if(isEmpty()) return '';

        let result=queue[lowestCount];
        for(let i=lowestCount+1; i<count;i++){
            result+=queue[i];
        }
    }

    return {
        enqueue,
        dequeue,
        size,
        isEmpty,
        clear,
        peek,
        toString,
    }
}

module.exports=queue;