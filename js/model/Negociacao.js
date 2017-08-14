class Negociacao{
    constructor(data, valor, quantidade){
        this._data = new Date(data);
        this._valor = valor;
        this._quantidade = quantidade;

        Object.freeze(this);
    }

    get data(){
        return this._data;
    }

    get valor(){
        return this._valor;
    }

    get quantidade(){
        return this._quantidade;
    }
}