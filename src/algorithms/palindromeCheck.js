// @ts-check
const Deque = require('../data-structures/Deque');

function palindromeCheck(aString){
    if(aString===undefined||aString===null||(aString.length===0&&aString!==null)){
        return false;
    }

    let isEqual=true
    const deque=new Deque()

    for(let i=0;i<aString.length;i++){
        deque.addBack(aString.charAt(i))
    }

    while(deque.size()>1&&isEqual){
        if(deque.removeFront()!==deque.removeBack()) isEqual=false
    }

    return isEqual;

}
console.log(palindromeCheck('fefae'))