<h1>Documentação - Testes das Funções Matemáticas</h1>

<h2>Descrição</h2>
<p>
    Este conjunto de testes é responsável por verificar o funcionamento correto das funções matemáticas básicas definidas no módulo <code>math</code>.
    As funções testadas incluem adição, subtração, multiplicação e divisão. O framework de testes utilizado é o Mocha.
    O objetivo é garantir que cada função execute corretamente a operação matemática esperada e retorne os resultados esperados para as entradas fornecidas.
</p>

<h2>Funcionamento</h2>

<h3>Importação de Dependências</h3>
<p>
    O módulo de teste importa o módulo <code>math</code>, que contém as funções matemáticas a serem testadas.
</p>

<h3>Estrutura dos Testes</h3>
<p>
    A estrutura dos testes é organizada utilizando as funções <code>describe</code> e <code>it</code> do Mocha. A função <code>describe</code> agrupa os testes relacionados em uma suíte de testes, enquanto a função <code>it</code> define testes individuais.
</p>

<ul>
    <li><code>describe</code>: Agrupa um conjunto de testes relacionados. O primeiro argumento é uma descrição do grupo de testes, e o segundo é uma função que contém os testes.</li>
    <li><code>it</code>: Define um teste individual. O primeiro argumento é uma descrição do teste, e o segundo é uma função que executa o teste.</li>
</ul>

<h3>Definição dos Testes</h3>
<p>
    Cada teste utiliza o método <code>assert.strictEqual</code> para comparar o resultado da função matemática com o valor esperado. O método <code>assert.strictEqual</code> verifica se dois valores são estritamente iguais, isto é, têm o mesmo valor e o mesmo tipo.
</p>

<h3>Testes Específicos</h3>
<p>
    Os testes específicos verificam se cada função matemática retorna o resultado correto para uma operação dada.
</p>

<ul>
    <li><code>adicao</code>: Testa se a função <code>adicao</code> retorna 13 para a entrada 10 + 3.</li>
    <li><code>subtracao</code>: Testa se a função <code>subtracao</code> retorna 7 para a entrada 10 - 3.</li>
    <li><code>multiplicacao</code>: Testa se a função <code>multiplicacao</code> retorna 30 para a entrada 10 * 3.</li>
    <li><code>divisao</code>: Testa se a função <code>divisao</code> retorna 3.33 para a entrada 10 / 3. O método <code>toFixed(2)</code> é utilizado para formatar o resultado com duas casas decimais.</li>
</ul>

<h3>Criação e Execução dos Testes</h3>
<p>
    Os testes são criados e executados utilizando o framework Mocha. O arquivo de testes deve ser nomeado com a extensão <code>.test.js</code> e localizado no diretório de testes configurado.
    Para executar os testes, o comando <code>npm test</code> é utilizado, que chama o Mocha para executar todos os testes definidos.
</p>

<h3>Configuração do Projeto para Testes</h3>
<p>
    O projeto deve ser configurado com o Mocha.
    As dependências são especificadas no arquivo <code>package.json</code>, e os testes são definidos em arquivos separados dentro do diretório de testes.
</p>
