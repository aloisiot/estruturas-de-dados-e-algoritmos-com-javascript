// @ts-check
const Deque = require('../data-structures/Deque');

/**
 * Analise se uma string é um palindromo ou não;
 * @param {*} aString String a ser analisada
 * @returns {Boolean} boolean
 */
function palindromeCheck(aString){
    if(aString===undefined||aString===null||(aString.length===0&&aString!==null)){
        return false;
    }

    let isEqual=true
    const deque=new Deque()

    for(let i=0;i<aString.length;i++){
        deque.addBack(aString.charAt(i).toLocaleLowerCase())
    }

    while(deque.size()>1&&isEqual){
        if(deque.removeFront()!==deque.removeBack()) isEqual=false
    }

    return isEqual;

}
module.exports=palindromeCheck;