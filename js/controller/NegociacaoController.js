class NegociacaoController{

    constructor(){
        let $$ = document.querySelector.bind(document);
        this._inputData = $$("#data");
        this._inputValor = $$("#valor");
        this._inputQuantidade = $$("#quantidade");
    }

    adiciona(event){
        event.preventDefault();

        console.log("Tipo de dado da data: ", typeof(this._inputData));

        console.log(this._inputData.value);
        console.log(this._inputValor.value);
        console.log(this._inputQuantidade.value);

        let negociacao = new Negociacao(
            this._inputData.value,
            this._inputValor.value,
            this._inputQuantidade.value
        )

        alert("Adiciona negociação");
        console.log(negociacao);
    }

}