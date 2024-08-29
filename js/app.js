let tipoIngresso;
let quantidadeIngresso;
let pista;
let cadeiraSuperior;
let cadeiraInferior;

function comprar() {
    tipoIngresso = document.getElementById('tipo-ingresso').value;
    quantidadeIngresso = parseInt(document.getElementById('qtd').value);

    if(tipoIngresso == 'pista'){
        subtracaoPista(pista);
    } else if (tipoIngresso == 'superior') {
        subtracaoSuperior(cadeiraSuperior);
    } else if (tipoIngresso == 'inferior') {
        subtracaoInferior(cadeiraInferior);
    }
}

function subtracaoPista(pista){
    pista = parseInt(document.getElementById('qtd-pista').textContent);
    if(quantidadeIngresso > pista){
        alert('A quantidade desejada excede a disponível');
    } else {
        pista = pista - quantidadeIngresso;
        document.getElementById('qtd-pista').textContent = pista;
        alert('Compra realizada com sucesso');
    }

}

function subtracaoSuperior(cadeiraSuperior){
    cadeiraSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if(quantidadeIngresso > cadeiraSuperior){
        alert('A quantidade desejada excede a disponível');
    } else {
        cadeiraSuperior = cadeiraSuperior - quantidadeIngresso;
        document.getElementById('qtd-superior').textContent = cadeiraSuperior;
        alert('Compra realizada com sucesso');
    }

}

function subtracaoInferior(cadeiraInferior){
    cadeiraInferior = (document.getElementById('qtd-inferior').textContent);
    if(quantidadeIngresso > cadeiraInferior){
        alert('A quantidade desejada excede a disponível');
    } else {
        cadeiraInferior = cadeiraInferior - quantidadeIngresso;
        document.getElementById('qtd-inferior').textContent = cadeiraInferior;
        alert('Compra realizada com sucesso');
    }

}