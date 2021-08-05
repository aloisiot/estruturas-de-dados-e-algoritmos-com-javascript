// @ts-check

/**
 * { Class } Estrutura de dados indexada do tipo Pilha
 */

function Stack(){
        let _count = 0
        let _itens = {};

    /**
     * Analisa se a Pilha está vazia
     * @returns {Boolean} boolean
     */
    this.isEmpty=()=> {
        return _count === 0;
    }

    /**
     * Insere um novo elemento na pilha
     * @param {*} item Elemento a ser inserido na pilha na pinha
     */
    this.push=(item)=> {
        _itens[_count] = item;
        _count++;
    }

    /**
     * Remove o ultimo elemento da pilha
     * @returns {*} Retorna o valor removido; caso a pilha esteja vazia retorna undefined
     */
    this.pop=()=> {
        if (this.isEmpty()) return undefined;

        _count--;
        let result = _itens[_count];
        delete _itens[_count];
        return result;
    }

    /**
     * @returns {*} Retorna o elemento contido no topo da pilha; caso a pilha esteja vazia retorna undefined
     */
    this.peek=()=> { 
        return _itens[_count - 1]; 
    }

    /**
     * @returns {Number} Retorna o número de elementos contidos na pilha;
     */
    this.size=()=> { 
        return _count; 
    }

    /**
     * Remove todos os elementos da pilha;
     */
    this.clear=()=> { 
        _itens = {}; 
    }

    /**
     * @returns {String} Retorna uma string contendo todos os elementos da pilha separados por virgula
     */
    this.toString=()=> {
        if (this.isEmpty()) return '';

        let objString = `${_itens[0]}`;

        for (let i = 1; i < _count; i++) {
            objString += `,${_itens[i]}`;
        }

        return objString;
    }

}

export default Stack;