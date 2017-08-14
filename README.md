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

