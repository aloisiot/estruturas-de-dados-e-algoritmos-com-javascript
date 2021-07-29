// Herançã é um pilar principal na Programação Orientada a Objetos

class Livros {

    constructor(name, paginas, isbn) {
        this.name = name;
        this.paginas = paginas;
        this.isbn = isbn;
    }

    printIsbn() {
        console.log(this.isbn);
    }
}

// Estendendo a class Livros.
class LivrosTI extends Livros {
    constructor(name, paginas, isbn, tecnologia) {
        super(name, paginas, isbn); // a função super() instancia os atributos da classe estendida.

        this.tecnologia = tecnologia; // atributo declaradopara a nova classe.
    }

    // Sobrescrita do metodo printInfo()
    printInfo() { // imprime as informações a cerca do livro
        console.log(`
        Nome: ${this.nome};
        Páginas: ${this.paginas};
        Isbn: ${this.isbn};
        Tecnologia: ${this.tecnologia}.
        `);
    }

}

const java = new LivrosTI('Java, como programar', 934, '978-85-430-0479-2', 'Java')