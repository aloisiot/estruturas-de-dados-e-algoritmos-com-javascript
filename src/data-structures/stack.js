// @ts-check

/**
 * Estrutura de dados indexada do tipo Pilha
 */

class Stack {
    constructor() {
        this.count = 0
        this.itens = {};
    }

    /**
     * @returns Retorna true caso não haja elementos na fila; retorna false caso não haja elementos na fila;
     */
    isEmpty() {
        return this.count === 0;
    }

    /**
     * Insere um novo elemento na pilha
     * @param {*} item Elemento a ser inserido na pilha
     */
    push(item) {
        this.itens[this.count] = item;
        this.count++;
    }

    /**
     * @returns Retorna o valor removido; caso a pilha esteja vazia retorna undefined
     */
    pop() {
        if (this.isEmpty()) return undefined;

        this.count--;
        let result = this.itens[this.count];
        delete this.itens[this.count];
        return result;
    }

    /**
     * @returns Retorna o elemento contido no topo da pilha; caso a pilha esteja vazia retorna undefined
     */
    peek() { 
        return this.itens[this.count - 1]; 
    }

    /**
     * @returns Retorna o número de elementos contidos na pilha;
     */
    size() { 
        return this.count; 
    }

    /**
     * Removo todos os elementos da pilha;
     */
    clear() { 
        this.itens = {}; 
    }

    /**
     * @returns Retorna uma string contendo todos os elementos da pilha separados por virgula
     */
    toString() {
        if (this.isEmpty()) return '';

        let objString = `${this.itens[0]}`;

        for (let i = 1; i < this.count; i++) {
            objString += `,${this.itens[i]}`;
        }

        return objString;
    }

}

module.exports = Stack;