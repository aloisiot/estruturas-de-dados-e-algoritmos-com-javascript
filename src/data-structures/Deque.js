// @ts-check

/**
 * Estrutura de dados do tipo deque ou fila de duas pontas 
 */
module.exports = function Deque(){
   let _count = 0;
   let _lowestCount = 0;
   let _itens = {};

    /**
     * Limpa a fila
     */
    this.clear = () => {
       _itens = {};
        _lowestCount = 0;
        _count = 0;
    }

    /**
     * Retorna a quantidade de elementos na fila
     * @returns inteiro
     */
    this.size = () => _count - _lowestCount;

    /**
     * Avalia se a fila está vazia
     * @returns true caso a fila esteja vazia e false caso contrário
     */
    this.isEmpity = () => this.size() == 0;

    /**
     * Adiciona um elemento à primeira posição da fila.
     * @param {*} item Item a ser adicionado no inicio da fila.
     */
    this.addBack = (item) => {
        _itens[_count] = item;
        _count++;
    }

    /**
     * Adiciona um elemento à ultima posição da fila.
     * @param {*} item Item a ser adicionado no inicio da fila.
     */
    this.addFront = (item) => {
        if(this.isEmpity()){
            this.addBack(item);
        } else if(_lowestCount > 0) {
            _lowestCount--;
            _itens[_lowestCount] = item;
        } else {
            for(let i = _count; i > _lowestCount; i++){
                _itens[i] = _itens[i - 1];
            }

            _count++;
            _itens[_lowestCount] = item;
        }
    }

    /**
     * Remove o ultimo elemento da fila
     * @returns retorna o elemento removido
     */
    this.removeBack = () => {
        let result = undefined;
        if(!this.isEmpity()){
            result = _itens[_count - 1];
            delete _itens[_count - 1];
            _count--;
        }
        return result;
    }

    /**
     * Remove o primenro elemento da fila
     * @returns retorna o elemento removido
     */
    this.removeFront = () => {
        let result = undefined;
        if(!this.isEmpity()){
            result = _itens[_lowestCount];
            delete _itens[_lowestCount];
            _lowestCount++;
        }
        return result;
    }

    /**
     * @returns Retorna o ultimo elemento na fila
     */
    this.peekBack = () => {
        if(!this.isEmpity)
            return _itens[_count - 1];
        return undefined;
    }

    /**
     * @returns Retorna o primeiro elemento na fila
     */
    this.peekFront = () => {
        if(!this.isEmpity)
            return _itens[_lowestCount];
        return undefined;
    }

    this.toString = () =>{
        let result = "";
        for(let i = _lowestCount; i < _count; i++){
            result += `${_itens[i]} ,`;
        }
        return result
    }
}