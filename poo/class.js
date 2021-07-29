// Diferêntes formas de declarar classes em JS

// Declareção da classe Livro
// Essa maneira de declaração de classes foi introduzida a partir do ES2015.
class Livros{

    // Função construtora que será invocada ao instanciar um novo objeto da classe Livros.
    constructor(nome, paginas, isbn){
        this.nome=nome;
        this.paginas=paginas;
        this.isbn=isbn;
    }

    printInfo(){ // imprime as informações a cerca do livro
        console.log(`
        Nome: ${this.nome};
        Páginas: ${this.paginas};
        Isbn: ${this.isbn}.
        `);
    }
}

// Instanciaçãos da classe Livros
const sapiens=new Livros('Uma breve história da humanidade', 591, '978-85-254-3461-6');

sapiens.printInfo();// Invocação do método



// Há também outra maneira de declarar uma classe, como feito abaixo
function Filmes(titulo, diretor, duracao){
    this.titulo=titulo;
    this.duracao=duracao;
    this.diretor=diretor;
    
    this.printInfo=()=>{ // Imprime as informaçoes a cerca do livro
        console.log(`
        Titulo: ${this.titulo};
        Diretor: ${this.diretor};
        Duração: ${this.duracao}s.
        `);
    }
}

// Instanciaçãos da classe Filmes
const avatar=new Filmes('Avatar','James Cameron', 9720);

avatar.printInfo();// Invocação do metodo criado anteriormente