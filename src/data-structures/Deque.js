// @ts-check

/**
 * Estrutura de dados do tipo Deque (ou fila duplamente ligada)
 */
function Deque(){
    
    let _lowestCount=0;
    let _highestCount=0;
    let _itens={};
    
    /**
     * Adciona um elemento à frente da fila
     * @param {*} element Elemento a ser adicionado
     */
    this.addFront=(element)=>{
        _itens[_lowestCount-1]=element;
        _lowestCount--;
    }

    /**
     * Adiciona um elemento ao fim da fila
     * @param {*} element Elemento a ser adicionado
     */
    this.addBack=(element)=>{
        _itens[_highestCount]=element;
        _highestCount++;
    }

    /**
     * Remove o elemento da primenra posição da fila
     * @returns Retorna o elemento removido
     */
    this.removeFront=()=>{
        if(this.isEmpty()) return undefined;

        let result=_itens[_lowestCount];
        delete _itens[_lowestCount];
        _lowestCount++;
        return result;
    }

    /**
     * Remove o elemento da última posição da fila
     * @returns Retorna o elemento removido
     */
    this.removeBack=()=>{
        if(this.isEmpty()) return undefined;

        let result=_itens[_highestCount-1];
        delete _itens[_highestCount];
        _highestCount--;
        return result;
    }

    /**
     * @returns Retorna o elemento da primeira posição da fila
     */
    this.peekFront=()=> _itens[_lowestCount];
    
    /**
     * @returns Retorna o elemento da última posição da fila
     */
    this.peekBack=()=> _itens[_highestCount-1];

    /**
     * @returns Retorna o numero de elementos contidos na pilha
     */
    this.size=()=> _highestCount-_lowestCount;

    /**
     * @returns Retorna true caso a pilha esteja vazia; retorna false caso contenha algum elemento;
     */
    this.isEmpty=()=> this.size()===0;

    /**
     * Remove todos os elementos da fila
     */
    this.clear=()=>{
        _lowestCount=0;
        _highestCount=0;
        _itens={};
    }

    /**
     * @returns Retorna uma string contendo todos os elementos separados por virgula
     */
    this.toString=()=>{
        if(this.isEmpty()) return '';

        let result=_itens[_lowestCount];
        for(let i=_lowestCount+1; i<_highestCount;i++){
            result+=`,${_itens[i]}`;
        }
        return result;

    }
}

export default Deque;