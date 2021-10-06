// @ts-check

const { defaultEquals } = require('../util')
const Node = require('./models/Node')

/**
 * Estrutura de Lista Ligada.
 * O construtor recebe como parãmetro uma função customizada para realizar comparação entre os elementos da lista.
 * Caso não seja especificada a função padrão será usada.
 * @param {*} equalsFn Função para comparação entre os objetos da lista.
 */
module.exports = function LinkedList(equalsFn = defaultEquals){

    let _count = 0;
    let _head = undefined;
    
    /**
     * Função que compara os objetos.
     */
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
        let current = _head;

        if(this.isEmpity()){
            _head = node;
        } else {
            while(current.next !== undefined){
                current = current.next
            }
            current.next = node;
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
            
        let current = _head;
        for(let i = 0; i < index; i++){
            current = current.next;
        }
        return current;
    }

    /**
     * Insere um elemento numa posição espacifica na lista.
     * @param {*} element Elemento a ser inserido.
     * @param {*} index índice onde o elemento deve ser inserido.
     * @returns Retorna true caso a inserção seja bem sussedida, e false caso contrário.
     */
    this.insert = (element, index) => {
        const node = new Node(element);
        if(index >= 0 && _count > index ){
            if(index === 0){
                node.next = _head;
                _head = node;
            } else {
                const previous = this.getElementAt(index - 1);
                const current = previous.next;
                node.next = current
                previous.next = node;
            }
            _count++;
            return true;
        }
        return false;
    }

    /**
     * Remove determinado elemento da lista.
     * @param {*} element Elemento a ser removido.
     * @returns Retorna o elemento removido, caso nada seja removido retorna undefined.
     */
    this.remove = (element) => {
        for(let i = 0; i < this.size(); i++){
            const current = this.getElementAt(i)
            if(element === current){
                const previous = this.getElementAt(i-1);
                previous.next = current.next;
                _count--;
                return current;
            }
        }
        return undefined;
    }

    /**
     * Remove um elemento numa posição espacifica na lista.
     * @param {*} index índice do elemento a ser removido.
     * @returns Retorna o elemento removido, caso não seja possivel efetuar a remoção undefined será retornado.
     */
    this.removeAt = (index) => {
        let removedNode = undefined;
        if(!this.isEmpity() && index === 0){
            removedNode = _head;
            _head = _head.next;
            _count--;
        }else if(!this.isEmpity() && index >= 0 && _count > index ){
            const previous = this.getElementAt(index - 1);
            removedNode = previous.next;
            previous.next = removedNode;
            _count--;
            return removedNode;
        }
        return removedNode;
    }

    /**
     * Retorna o índice de determinado elemento na lista
     * @param {*} element Elemento que deseja saber o índice
     * @returns Um inteiro referente ao índice, se o elemento não for encontreado ou a fila estiver vazia -1 será retornado
     */
    this.indexOf = (element) => {
        if(!this.isEmpity()){
            let current = _head
            for(let i = 0; i < _count; i++){
                if(this.isEquals(current, element)){
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