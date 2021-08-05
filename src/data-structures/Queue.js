// @ts-check

/**
 * { Class } Estrutura de dados indexada do tipo Fila.
 */
class Queue{
    constructor(){
        this.count=0;
        this.lowestCount=0;
        this.itens={};
    }

    /**
     * Adciona um elemento ao fim da fila.
     * @param {*} element elemento a ser adicionado à fila
     */
    enqueue(element){
        this.itens[this.count]=element;
        this.count++;
    }

    /**
     * Remove o primeiro elemento da fila
     * @returns Retorna o elemento removido da fila
     */
    dequeue(){
        if(this.isEmpty()) return undefined;
        let result=this.itens[this.lowestCount];
        delete this.itens[this.lowestCount];
        this.lowestCount++;
        return result;
    }

    /**
     * Remove todos os elementos da fila;
     */
    clear(){
        this.itens={};
        this.count=0;
        this.lowestCount=0;
    }

    /**
     * @returns Retorna o primeiro elemento da fila
     */
    peek(){
        if(this.isEmpty()) return undefined;
        return this.itens[this.lowestCount];
    }

    /**
     * @returns Retorna a quantidade de elementos contidos na fila
     */
    size(){
        return this.count-this.lowestCount;
    }

    /**
    * @returns Retorna true caso não haja elementos na fila; retorna false caso não haja elementos na fila;
     */
    isEmpty(){
        return this.size()===0;
    }

    /**
     * @returns Retorna uma string contendo todos os elementos da fila separados por virgula
     */
    toString(){
        if(this.isEmpty()) return '';

        let objString=`${this.lowestCount}`;
        for(let i=this.lowestCount+1;i>this.count;i++){
            objString+=`,${this.itens[i]}`;
        }
    }

}

module.exports=Queue;