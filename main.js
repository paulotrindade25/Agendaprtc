const form = document.getElementById('form-agenda');

const nomes = [];
const telf = [];
let linhas = ' ';


form.addEventListener('submit', function(e){

    e.preventDefault();
    validarFluxo();
});

function validarNome (nomeCompleto){
    const nomeComoVeto =  nomeCompleto.split(' ');
    return nomeComoVeto.length >= 2 ;

}

function validarFluxo(){
    const nomeNaAgenda = document.getElementById('nome-contato');

    if(validarNome(nomeNaAgenda.value)){
        adicionarContato();
        atualizarAgenda();
        atualizarFoot();
    }else{
        alert('Insira nome e sobrenome !');
    }
}

function adicionarContato () {

    const inserirNomeContato = document.getElementById('nome-contato');
    const inserirNumeroContato = document.getElementById('tel-contato');


    if(nomes.includes(inserirNomeContato.value)){
        alert(`O nome: "${inserirNomeContato.value}" já foi adicionado na agenda !`);
    }else{
        nomes.push(inserirNomeContato.value);
        telf.push(inserirNumeroContato.value);

        let linha = '<tr>';

        linha += `<td>${inserirNomeContato.value}</td>`;
        linha += `<td>${inserirNumeroContato.value}</td>`;
        linha += '</tr>';

        linhas += linha;
    }

    inserirNomeContato.value = '';
    inserirNumeroContato.value = '';
}

function atualizarAgenda () {
    const corpoAgenda = document.querySelector('tbody');
    corpoAgenda.innerHTML = linhas ;
}

function atualizarFoot () {
    document.getElementById('total-contatos').innerHTML = nomes.length;
}