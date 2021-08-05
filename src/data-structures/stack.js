// @ts-check

/**
 * { Function } Estrutura de dados indexada do tipo Pilha
 */
const stack = () => {
    let stack = {};
    let count = 0;

    /**
     * Remove o ultimo elemento da pilha
     * @returns Retorna o valor removido; caso a pilha esteja vazia retorna undefined
     */
    const pop = () => {
        if(isEmpty()) return undefined;

        let result = stack[count - 1];
        delete stack[count - 1];
        count--;
        return result;
    };

    /**
     * Insere um novo elemento na pilha
     * @param {*} element Elemento a ser inserido na pilha
     */
    const push = (element) => {
        stack[count] = element;
        count++;
    }

    /**
     * @returns Retorna o elemento contido no topo da pilha; caso a pilha esteja vazia retorna undefined
     */
    const peek = () => stack[count - 1];

    /**
     * @returns Retorna o número de elementos contidos na pilha;
     */
    const size = () => count;

    /**
     * Remove todos os elementos da pilha;
     */
    const clear = () => {
        stack = {};
        count = 0;
    };

    /**
     * @returns Retorna true caso não haja elementos na fila; retorna false caso não haja elementos na fila;
     */
    const isEmpty = () => count === 0;

    /**
     * @returns Retorna uma string contendo todos os elementos da pilha separados por virgula
     */
    const toString = () => {
        if (isEmpty()) return '';

        let result = `${stack[0]}`;
        for (let i = 1; i < count; i++) {
            result += `,${stack[i]}`;
        }
        return result;
    }

    return {
        pop,
        push,
        peek,
        size,
        clear,
        isEmpty,
        toString,
    }
}

module.exports = stack;