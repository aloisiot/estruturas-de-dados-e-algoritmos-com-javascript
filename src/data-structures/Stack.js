// @ts-check

/**
 * { Class } Estrutura de dados indexada do tipo Pilha
 */

function Stack(){
        this.count = 0
        this.itens = {};

    /**
     * @returns Retorna true caso não haja elementos na fila; retorna false caso não haja elementos na fila;
     */
    this.isEmpty=()=> {
        return this.count === 0;
    }

    /**
     * Insere um novo elemento na pilha
     * @param {*} item Elemento a ser inserido na pilha na pinha
     */
    this.push=(item)=> {
        this.itens[this.count] = item;
        this.count++;
    }

    /**
     * Remove o ultimo elemento da pilha
     * @returns Retorna o valor removido; caso a pilha esteja vazia retorna undefined
     */
    this.pop=()=> {
        if (this.isEmpty()) return undefined;

        this.count--;
        let result = this.itens[this.count];
        delete this.itens[this.count];
        return result;
    }

    /**
     * @returns Retorna o elemento contido no topo da pilha; caso a pilha esteja vazia retorna undefined
     */
    this.peek=()=> { 
        return this.itens[this.count - 1]; 
    }

    /**
     * @returns Retorna o número de elementos contidos na pilha;
     */
    this.size=()=> { 
        return this.count; 
    }

    /**
     * Remove todos os elementos da pilha;
     */
    this.clear=()=> { 
        this.itens = {}; 
    }

    /**
     * @returns Retorna uma string contendo todos os elementos da pilha separados por virgula
     */
    this.toString=()=> {
        if (this.isEmpty()) return '';

        let objString = `${this.itens[0]}`;

        for (let i = 1; i < this.count; i++) {
            objString += `,${this.itens[i]}`;
        }

        return objString;
    }

}

module.exports = Stack;