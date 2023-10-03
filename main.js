// definindo classe Contatos
class Contatos {
    constructor(nome, email, telefone, comentario) {
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.comentario = comentario;
    }
}

// definindo classe GerenciadorContatos
class GerenciadorContatos {
    constructor() {
        // inicializa a lista de contatos vazia
        this.contatos = []
    }

    adicionarContato(contato) {
        // adiciona um contato a lista de contatos
        this.contatos.push(contato)
    }

    exibirContatos() {
        // obtem a lista de contatos
        const listaContatos = document.getElementById('contato-lista');

        // limpa a lista de contatos
        listaContatos.innerHTML = '';

        // para cada contato na lista de contatos na lista de contatos, cria um novo elemento 'li' e adiciona na lista de contatos
        for (const contato of this.contatos) {
            const li = document.createElement('li');
    telefoneF.value = ''
            li.innerHTML = `${contato.nome} | ${contato.email} | ${contato.telefone} <br> ${contato.comentario}`;
            listaContatos.appendChild(li);
            
        }
    }
}

// cria um objeto da classe GerenciadorContatos
const gerenciadorContatos = new GerenciadorContatos();

// cria os elementos necessários
const contatoForm = document.getElementById('contato-form');
const nomeF = document.getElementById('nome');
const emailF = document.getElementById('email');
const comentarioF = document.getElementById('comentario');
const telefoneF = document.getElementById('telefone');
const mostrarContatos = document.getElementById('mostrar-contatos');
const ocultarContatos = document.getElementById('ocultar-contatos');
const listaContatos = document.getElementById('contato-lista');

contatoForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const nome = nomeF.value;
    const email = emailF.value;
    const telefone = telefoneF.value;
    const comentario = comentarioF.value;

    // criando objeto da classe Contato
    const contato = new Contatos(nome, email, telefone, comentario);

    gerenciadorContatos.adicionarContato(contato);

    nomeF.value = ''
    emailF.value = ''
    telefoneF.value = ''
    comentarioF.value = ''
})

// estamos adicionando um manipulador de eventos para o botão mostrar contatos, que exibe a lista de contatos
mostrarContatos.addEventListener('click', () => {
    gerenciadorContatos.exibirContatos();
    listaContatos.style.display = 'block';
})

ocultarContatos.addEventListener('click', () => {
    listaContatos.style.display = 'none'
})