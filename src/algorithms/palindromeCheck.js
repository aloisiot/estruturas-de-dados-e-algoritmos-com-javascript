// @ts-check
const Deque = require('../data-structures/Deque');

/**
 * Analise se uma string é um palindromo ou não;
 * @returns {Boolean} boolean
 * @param {*} aString String a ser analisada
 */
 module.exports=function palindromeCheck(aString){
    if(aString===undefined||aString===null||(aString.length===0&&aString!==null)){
        return false;
    }

    let isEqual=true
    const deque=new Deque()
    let s=aString.toLocaleLowerCase().split(' ').join('');

    for(let i=0;i<s.length;i++){
        deque.addBack(s.charAt(i));
    }

    while(deque.size()>1&&isEqual){
        if(deque.removeFront()!==deque.removeBack()) isEqual=false
    }

    return isEqual;

}