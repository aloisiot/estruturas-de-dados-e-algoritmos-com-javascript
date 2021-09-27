// @ts-check

/**
 * Estrutura de nó para lista ligada
 * @param {*} element Valor que será contido no nó
 */
module.exports= function Node(element){
    this.element=element;
    this.next=undefined;
}