// @ts-check

/**
 * { Class } Estrutura de dados indexada do tipo Fila.
 */
module.exports = function Queue() {

    let _lowestCount = 0;
    let _highestCount = 0;
    let _itens = {};

    /**
     * Adciona um elemento ao fim da fila.
     * @param {*} element elemento a ser adicionado à fila
     */
    this.enqueue = (element) => {
        _itens[_highestCount] = element;
        _highestCount++;
    }

    /**
     * Remove o primeiro elemento da fila
     * @returns {*} Retorna o elemento removido
     */
    this.dequeue = () => {
        if (this.isEmpty()) return undefined;
        let result = _itens[_lowestCount];
        delete _itens[_lowestCount];
        _lowestCount++;
        return result;
    }

    /**
     * Remove todos os elementos da fila;
     */
    this.clear = () => {
        _itens = {};
        _highestCount = 0;
        _lowestCount = 0;
    }

    /**
     * @returns {*} Retorna o primeiro elemento da fila
     */
    this.peek = () => {
        if (this.isEmpty()) return undefined;
        return _itens[_lowestCount];
    }

    /**
     * @returns {Number} Retorna a quantidade de elementos contidos na fila
     */
    this.size = () => {
        return _highestCount - _lowestCount;
    }

    /**
     * Analisa se a Fila está vazia
    * @returns {Boolean} boolean
     */
    this.isEmpty = () => {
        return this.size() === 0;
    }

    /**
     * @returns {String} Retorna uma string contendo todos os elementos da fila separados por virgula
     */
    this.toString = () => {
        if (this.isEmpty()) return '';

        let result = `${_itens[_lowestCount]}`;
        for (let i = _lowestCount + 1; i < _highestCount; i++) {
            result += `,${_itens[i]}`;
        }
        return result;
    }

}