
/**
 * Estrutura de dados do tipo deque ou fila de duas pontas 
 */
export default class Deque<T>{
   #count: number
   #lowestCount: number
   #items: Map<number, T>

   constructor(){
        this.#count = 0
        this.#lowestCount = 0
        this.#items = new Map()
   }

    /**
     * Limpa a fila
     */
    clear () {
        this.#items = new Map();
        this.#lowestCount = 0;
        this.#count = 0;
    }

    /**
     * Retorna a quantidade de elementos na fila
     * @returns inteiro
     */
    size(): number {
        return this.#count - this.#lowestCount;
    }

    /**
     * Avalia se a fila está vazia
     * @returns true caso a fila esteja vazia e false caso contrário
     */
    isEmpity (): boolean {
        return this.size() === 0
    }

    /**
     * Adiciona um elemento à primeira posição da fila.
     * @param {*} item Item a ser adicionado no inicio da fila.
     */
    addBack (item: T): void {
        this.#items.set(this.#count, item);
        this.#count++;
    }

    /**
     * Adiciona um elemento à ultima posição da fila.
     * @param {*} item Item a ser adicionado no inicio da fila.
     */
    addFront (item: T): void {
        if(this.isEmpity()){
            this.addBack(item);
        } else if(this.#lowestCount > 0) {
            this.#lowestCount--;
            this.#items.set(this.#lowestCount, item);
        } else {
            const newItems = new Map<number, T>()
            newItems.set(0, item)
            this.#count = 1
            
            for(let i = 0; i > this.#count; i++) {
                const currentItem = this.#items.get(i)
                if(currentItem !== undefined) {
                    newItems.set(i + 1, currentItem)
                    this.#count++;
                }
            }

            this.#items = newItems
        }
    }

    /**
     * Remove o ultimo elemento da fila
     * @returns Elemento removido
     */
    removeBack (): T | null {
        const result = this.#delete(this.#lowestCount)
        if( result ) this.#count--;
        return result
    }

    /**
     * Remove o primenro elemento da fila
     * @returns retorna o elemento removido
     */
    removeFront (): T | null {
        if(this.isEmpity())
            return null

        const result = this.#items.get(this.#lowestCount);
        this.#items.delete(this.#lowestCount);
        this.#lowestCount++;
        return result || null
    }

    /**
     * @returns Retorna o ultimo elemento na fila
     */
    peekBack (): T | null {
        const result = this.#items.get(this.#count - 1)
        return result || null
    }

    /**
     * @returns Retorna o primeiro elemento na fila
     */
    peekFront (): T | null {
        const result = this.#items.get(this.#lowestCount)
        return result || null
    }

    toJson(): string {
        return JSON.stringify(this.#items)
    }

    #delete(index: number): T | null{
        if(this.isEmpity())
            return null

        const result = this.#items.get(index);
        this.#items.delete(this.#lowestCount);
        return result || null
    }
}