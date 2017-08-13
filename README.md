# javascript_ecma6_estudo1

<h3>Diferença entre Var e Let</h3>

Então podemos verificar que até pouco tempo as variáveis não tinham escopo de bloco. Como podemos perceber ao rodar o código abaixo:</br>

<p>
        <script>
           for(var x=1; x<=100; x++){
               var nome = "Ed";
               console.log(x);
           }
           console.log(x);
           console.log(nome);
        </script>
</p>
<p>Com a nova diretiva let agora temos escopo de bloco e não teremos o problema de vazarmos as variáveis para outras partes do código.
</p>