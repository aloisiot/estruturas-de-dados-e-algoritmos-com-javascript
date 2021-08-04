// @ts-check

class Queue{
    constructor(){
        this.count=0;
        this.lowestCount=0;
        this.itens={};
    }

    /**
     * Adciona um elemento ao fim da fila.
     * @param {*} element elemento a ser adicionado 
     */
    enqueue(element){
        this.itens[this.count]=element;
        this.count++;
    }

    /**
     * Remove o primeiro elemento da fila
     * @returns Retorna o elemento removido
     */
    dequeue(){
        let result=this.itens[this.lowestCount];
        delete this.itens[this.lowestCount];
        this.lowestCount++;
        return result;
    }

    /**
     * @returns Retorna o primeiro elemento da fila
     */
    peek(){
        return this.itens[this.lowestCount];
    }

    /**
     * @returns Retorna a quantidade de elementos contidos na fila
     */
    size(){
        return this.count-this.lowestCount;
    }

    /**
     * 
     * @returns Retorna true caso não haja elementos na fila; retorna false caso não haja elementos na fila;
     */
    isEmpty(){
        return this.size()===0;
    }

    /**
     * @returns Retorna uma string contendo todos os elementos da fila separados por virgula
     */
    toString(){
        let objString=`${this.lowestCount}`;
        for(let i=this.lowestCount+1;i>this.count;i++){
            objString+=`,${this.itens[i]}`;
        }
    }

}