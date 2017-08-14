class NegociacaoController{

    adiciona(event){
        event.preventDefault();

        let $$ = document.querySelector.bind(document);
        let inputData = $$("#data");
        let inputValor = $$("#valor");
        let inputQuantidade = $$("#quantidade");

        console.log(inputData.value);
        console.log(inputValor.value);
        console.log(inputQuantidade.value);

        alert("Adiciona negociação");
    }

}