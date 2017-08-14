# javascript_ecma6_estudo1

<h3>Diferença entre Var e Let</h3>

<p>
Então podemos verificar que até pouco tempo as variáveis não tinham escopo de bloco. Como podemos perceber ao rodar o código abaixo:</br>
</p>

</br>
        <script
        </br>>
           for(var x=1; x<=100; x++){
        </br>
               var nome = "Ed";
        </br>
               console.log(x);
        </br>
           }
        </br>
           console.log(x);
        </br>
           console.log(nome);
        </br>
        </script>
        </br>
</p>
<p>Com a nova diretiva let agora temos escopo de bloco e não teremos o problema de vazarmos as variáveis para outras partes do código.
</p>

<h3>Colocando Alias em um método para agilizar a reutilização</h3>

<p>Ao criarmos o medoto adiciona na classe NegociacaoController podemos evitar a repetição de código. Vejamos abaixo:
</p>

<ul>
    <li>let $$ = document.querySelector.bind(document);</li>
    <li>let inputData = $$("#data");</li>
    <li>let inputValor = $$("#valor");</li>
    <li>let inputQuantidade = $$("#quantidade");</li>
</ul>

<p>Nesse exemplo o <b>$$</b> substitui o querySelector, mas devemos dizer a quem o <b>$$</b> está ligado. Se isso não for dito, o exemplo não funcionará.

<h3>Deixando nosso código mais performático</h3>

<p>Para fazermos com que o nosso controller não acesse toda vez o <b>DOM</b> devemos colocar o obtenção dos objetos no contrutor, dessa forma iremos acessar o <b>DOM</b>
apenas uma única vez.
</p>

<ul>
    <li>    constructor(){</li>
    <li>        let $$ = document.querySelector.bind(document);</li>
    <li>        this.inputData = $$("#data");</li>
    <li>        this.inputValor = $$("#valor");</li>
    <li>        this.inputQuantidade = $$("#quantidade");</li>
    <li>    }</li>
</ul>

<h3>Definindo datas de forma inteligente</h3>

<p>Precisamos retirar uma cópia da data, e de uma forma em que apenas o mês seja alterado, visto que o construtor numérico de data em javascript, trabalha com array começando em zero para o mês. Vejamos: 
</p>

<ul>
    <li>adiciona(event) {</li>
    <li>event.preventDefault();</li>
    <li>let data = new Date(...this._inputData</li>
    <li>    .value.split('-')</li>
    <li>   .map(function(item, indice) {</li>
    <li>        return item - indice % 2;</li>
    <li>    }));</li>
</ul>

<p>Notaremos que o "..." indica que queremos pegar os três itens. Podemos ver também que o único item do indice em que o <b>mod</b> é 1, assim menos um teremos sempre o mês correto.
</p>

<h3>Usando arrowFunctions =></h3>

<p>Agora queremos reduzir o tamanho da nossa função para transformação da Data</p>

<ul>
<li>let data = new Date(...</li>
<li>    this._inputData.value</li>
<li>    .split('-')</li>
<li>    .map((item, indice) => item - indice % 2)</li>
<li>);</li>
</ul>


<p>Podemos ver que desta forma, usando o símbolo <b>=></b> para functions que só tem uma linha, retirar a verbosidade do nosso código. Desta forma, podemos retornar tudo que teríamos denttro do nosso bloco sem nem mesmo digitar return. É isso que acontece em <b>=> item - indice%2.
</b></p>

<h3>Usando funções estáticas e evitando a criação instâncias</h3>

<p>Podemos evitar a criação de instâncias usando o comando <b>throw new Error("Mensagem desejada");</b> no construtor padrão <b>"constructor(){}"</b>. Segue um exemplo:

<ul>
<li>constructor(){</li> 
<li>    throw new Error("Mensagem desejada"); </li>
<li>}</li>
</ul>

<p>Para utilizarmos métodos de classes que não necessitam de ser instanciadas, podemos usar <b>static</b>. Segue exemplo :

<ul>
<li>static textoParaData(texto) {</li>
<li></li>
<li>    return new Date(...texto.split('-').map((item, indice) => item - indice % 2));</li>
<li></li>
<li>}</li>