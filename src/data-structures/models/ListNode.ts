/**
 * Estrutura de nó para lista ligada
 * @param {*} element Valor que será contido no nó
 */
export default class ListNode<T>{
    #value: T | null
    #next: ListNode<T> | null

    constructor(value? : T, next? : ListNode<T>){
        this.#value = value || null
        this.#next = next || null 
    }

    get value(){
        return this.#value
    }

    get next(){
        return this.#next
    }
    

    set value(value: T | null){
        if(value) this.#value = value
    }
    

    set next(next: ListNode<T> | null){
        if(next) this.#next = next
    }
}