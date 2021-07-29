// Diferêntes formas de declarar classes em JS

// Declareção da classe Livro
// Essa maneira de declaração de classes foi introduzida a partir do ES2015.
class Livros{

    // A função construtora que será invocada ao instanciar um novo objeto da classe Livros.
    constructor(name, pages, isbn){
        this.name=name;
        this.pages=pages;
        this.isbn=isbn;
    }

    // Método para impressão de determinada informação de uma instância dessa classe.
    printIsbn(){
        console.log(this.isbn);
    }
}

// Instanciaçãos da classe Livros
const sapiens=new Livros('Uma breve história da humanidade', 591, '978-85-254-3461-6');

// Invocação do metodo criado anteriormente
sapiens.printIsbn();

// Há também outra maneira de declarar uma classe, como feito abaixo
function Filmes(titulo, diretor, duracao){
    this.titulo=titulo;
    this.duracao=duracao;
    this.diretor=diretor;

    this.printInfo=()=>{
        console.log(`
        Titulo: ${this.titulo};
        Diretor: ${this.diretor};
        Duração: ${this.duracao}s.
        `);
    }
}

const avatar=new Filmes('Avatar','James Cameron', 9720);

avatar.printInfo();