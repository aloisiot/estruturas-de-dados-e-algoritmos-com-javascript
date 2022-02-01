import ListNode from './models/ListNode';

/**
 * Estrutura de Lista Ligada.
 */
export default class LinkedList<T>{

    #count = 0;
    #head: ListNode<T>;
    
    /**
     * O construtor recebe como parãmetro uma função customizada para realizar comparação entre os elementos da lista.
     * Caso não seja especificada a função padrão será usada.
     * @param {boolean} equalsFn Função para comparação entre os objetos da lista.
     */
    #isEquals = (item1: T, item2: T) => item1 === item2
    
    constructor(isEquals? : (item1: T, item2: T) => boolean){
        this.#head = new ListNode<T>()
        if(isEquals) this.#isEquals = isEquals
    }

    isEmpity (): boolean {
        return this.#count === 0;
    }

    /**
     * Limpa a lista.
     */
    clear (): void {
        this.#head = new ListNode<T>();
        this.#count = 0;
    }

    /**
     * @returns Retorna a quantidade de elementos na lista.
     */
    size(): number {
        return this.#count
    }

    /**
     * Adiciona um elemento ao fim da lista.
     * @param {T} element Elemento a ser adicionado.
     */
    push (element: T): void {
        const node = new ListNode(element);
        
        if(this.isEmpity()){
            this.#head = node;
        } else {
            let current = this.#head;
            while(current.next){
                current = current.next
            }
            current.next = node;
        }

        this.#count++;
    }

    /**
     * Retorna um nó em um índice especifico na lista.
     * @param {number} index índice do nó a ser buscado.
     * @returns Nó na posição especificada. Retorna null se a lista estiver vazia.
     */
    #getNodeAt (index: number): ListNode<T> | null{
        if(this.isEmpity())
            return null;
            
        let current: ListNode<T> = this.#head;
        for(let i = 0; i < index; i++){
            if(index === i) 
                return current
                
            const next = current.next 
            if(next) current = next
        }
        return null;
    }


    /**
     * Retorna o valor de um elemento em um índice especifico na lista.
     * @param {number} index índice do elemento a ser buscado.
     * @returns Nó na posição especificada. Retorna null se a lista estiver vazia.
     */
    getElementAt (index: number): T | null{
        const result = this.#getNodeAt(index)?.value
        return result || null
    } 

    /**
     * Insere um elemento numa posição espacifica na lista.
     * @param {T} element Elemento a ser inserido.
     * @param {number} index índice onde o elemento deve ser inserido.
     * @returns Retorna true caso a inserção seja bem sussedida, e false caso contrário.
     */
    insertAt (element: T, index: number) {
        const newNode = new ListNode(element);
        if(index >= 0 && this.#count > index ){
            if(index === 0){
                newNode.next = this.#head;
                this.#head = newNode;
                this.#count++;
                return true;
            } else {
                const previous = this.#getNodeAt(index - 1);
                if(previous?.value) {
                    const current = previous.next;
                    newNode.next = current
                    previous.next = newNode;
                    this.#count++;
                    return true;
                }
            }
        }
        return false;
    }

    /**
     * Remove determinado elemento da lista.
     * @param {T} element Elemento a ser removido.
     * @returns Retorna o elemento removido, caso nada seja removido retorna undefined.
     */
    remove (element: T): T | null {
        const current = this.#head.value
        let result: T | null = null

        if(current === element){
            const removed = this.#head.value
            this.#head = new ListNode<T>()
            this.#count = 1
            return removed
        }

        for(let i = 0; i < this.size(); i++){
            const current = this.#getNodeAt(i)
            if(current?.value && this.#isEquals(element, current.value))
                result = this.removeAt(i)
        }
        return result;
    }

    /**
     * Remove um elemento numa posição espacifica na lista.
     * @param {*} index índice do elemento a ser removido.
     * @returns Retorna o elemento removido, caso não seja possivel efetuar a remoção undefined será retornado.
     */
    removeAt (index: number): T | null {
        let removedNode: ListNode<T> | null = null;
        let result: T | null = null

        if(index === 0){
            result = this.#head.value;
            if(this.#head.next){
                this.#head = this.#head.next
                this.#count--;
            } else {
                this.#count = 0
            }
        }else if(!this.isEmpity() && index >= 0 && this.#count > index ){
            const previous = this.#getNodeAt(index - 1);
            if(previous?.next){
                removedNode = previous.next;
                previous.next = removedNode.next;
                this.#count--;
                result = removedNode?.value || null;
            }
        }
        return result;
    }

    /**
     * Retorna o índice de determinado elemento na lista
     * @param {*} element Elemento que deseja saber o índice
     * @returns Um inteiro referente ao índice, se o elemento não for encontreado ou a fila estiver vazia -1 será retornado
     */
    indexOf (element: T): number {
        if (this.isEmpity())
            return -1
            
        for(let i = 0; i < this.#count; i++){
            let current = this.#head.value
            if(current && this.#isEquals(current, element)){
                return i;
            } else {
                current = this.getElementAt(i)
            }
        }
        return -1;
    }

    /**
     * Uma string com todos os elementos da lista separados por ', ' será retornada.
     * @returns Uma string contendo os elementos.
     */
    toString () {
        if(this.isEmpity()){
            return "";
        }
        let result = "{";
        for(let i = 0; i < this.#count; i++){
            const element = this.getElementAt(i)
            result += `"${i}": ${String(element) || element}, `;
        }
        return result + "}";
    }
}