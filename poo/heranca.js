// Herançã é um pilar principal na Programação Orientada a Objetos

class Livros{

    constructor(name, pages, isbn){
        this.name=name;
        this.pages=pages;
        this.isbn=isbn;
    }

    printIsbn(){
        console.log(this.isbn);
    }
}

// Estendendo a class Livros.
class LivrosTI extends Livros{
    constructor(name, pages, isbn, tecnologia){
        super(name, pages, isbn); // a função super() instancia os atributos da classe estendida.

        this.tecnologia=tecnologia; // atributo declaradopara a nova classe.
    }
}

