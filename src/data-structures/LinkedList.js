// @ts-check

const { defaultEquals } = require('../util')
const Node = require('./models/Node')


module.exports = function LinkedList(equalsFn = defaultEquals){

    let _count = 0;
    let _head = undefined;
    
    this.isEquals = equalsFn;

    /**
     * Avalia se a lista está vazia.
     * @returns Retorna true caso a lista esteja vazia e false caso contrário.
     */
    this.isEmpity = () => _count === 0;

    /**
     * Limpa a lista.
     */
    this.clear = () => {
        _head = undefined;
        _count = 0;
    }

    /**
     * @returns Retorna a quantidade de elementos na lista.
     */
    this.size = () => _count;

    /**
     * Adiciona um elemento ao fim da lista.
     * @param {*} element Elemento a ser adicionado.
     */
    this.push = (element) => {
        const node = new Node(element);
        let currentNode = _head;

        if(this.isEmpity()){
            _head = node;
        } else {
            while(currentNode.next !== undefined){
                currentNode = currentNode.next
            }
            currentNode.next = node;
        }
        _count++;
    }

    /**
     * Busca e retorna um elemento em um índice especifico na lista.
     * @param {*} index índice do elemento a ser devolvido.
     * @returns Elemento na posição especificada. Se a lista estiver vazia retorna undefined.
     */
    this.getElementAt = (index) => {
        if(this.isEmpity())
            return undefined;
            
        let currentNode = _head;
        for(let i = 0; i < index; i++){
            currentNode = currentNode.next;
        }
        return currentNode;
    }

    /**
     * Insere um elemento numa posição espacifica na lista.
     * @param {*} element Elemento a ser inserido.
     * @param {*} index índice onde o elemento deve ser inserido.
     * @returns Retorna true caso a inserção seja bem sussedida, e false caso contrário.
     */
    this.insertAt = (element, index) => {
        const node = new Node(element);
        if(index >= 0 && _count > index ){
            if(index === 0){
                node.next = _head;
                _head = node;
            } else {
                const previousNode = this.getElementAt(index - 1);
                const currentNode = previousNode.next;
                node.next = currentNode
                previousNode.next = node;
            }
            _count++;
            return true;
        }
        return false;
    }

    /**
     * Remove um elemento numa posição espacifica na lista.
     * @param {*} index índice do elemento a ser removido.
     * @returns Retorna o elemento removido, caso não seja possivel efetuar a remoção undefined será retornado.
     */
    this.removeAt = (index) => {
        if(!this.isEmpity() && index >= 0 && _count > index ){
            const previous = this.getElementAt(index - 1);
            const removedNode = previous.next;
            previous.next = removedNode;
            return removedNode;
        }
        return undefined;
    }

    /**
     * Retorna o índice de determinado elemento na lista
     * @param {*} element Elemento que deseja saber o índice
     * @returns Um inteiro referente ao índice, se o elemento não for encontreado ou a fila estiver vazia -1 será retornado
     */
    this.indexOf = (element) => {
        if(!this.isEmpity()){
            let currentNode = _head
            for(let i = 0; i < _count; i++){
                if(this.isEquals(currentNode, element)){
                    return i;
                }
            }
        }
        return -1;
    }

    /**
     * Uma string com todos os elementos da lista separados por ', ' será retornada.
     * @returns Uma string contendo os elementos.
     */
    this.toString = () => {
        if(this.isEmpity()){
            return "";
        }
        let result = "";
        for(let i = 0; i < _count; i++){
            result += `${this.getElementAt(i)}, `;
        }
        return result;
    }
}