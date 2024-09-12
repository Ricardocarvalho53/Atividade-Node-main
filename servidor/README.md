<h1>Documentação - Criação do Servidor HTTP</h1>

<h2>Descrição</h2>
    <p>
        O servidor HTTP básico em Node.js foi criado para lidar com requisições em quatro situações distintas.
        Ele responde a três rotas específicas (<code>/</code>, <code>/sobre</code>, <code>/contato</code>) com mensagens predefinidas e retorna uma resposta de "Página não encontrada" para qualquer outra rota.
        A implementação foi feita utilizando apenas módulos nativos do Node.js, garantindo simplicidade e foco no básico da criação de servidores HTTP.
    </p>

<h2>Funcionamento</h2>

<h3>Importação de Dependências</h3>
    <p>
        O servidor utiliza o módulo nativo <code>http</code> do Node.js, que fornece a funcionalidade para criar e gerenciar servidores HTTP.
        A sintaxe <code>import</code> é usada para importar o módulo, o que exige que o projeto esteja configurado como um módulo ECMAScript (ESM).
        Isso pode ser feito adicionando <code>"type": "module"</code> ao <code>package.json</code> ou renomeando o arquivo para <code>.mjs</code>.
    </p>

<h3>Definição das Rotas</h3>
    <p>
        As rotas são armazenadas em um objeto <code>routes</code>, onde cada chave corresponde a uma rota específica do servidor.
    </p>
    <ul>
        <li><code>/</code>: Retorna "Bem-vindo à página inicial!"</li>
        <li><code>/sobre</code>: Retorna "Esta é a página sobre."</li>
        <li><code>/contato</code>: Retorna "Esta é a página de contato."</li>
    </ul>
    <p>
        Para qualquer outra rota que não esteja definida no objeto <code>routes</code>, o servidor retorna uma mensagem de erro 404 com o texto "Página não encontrada."
    </p>

<h3>Tratamento de Requisições e Respostas</h3>
    <p>
        O servidor manipula as requisições HTTP utilizando uma função <code>requestHandler</code>, que processa a URL solicitada e envia a resposta adequada.
        A função verifica se a URL da requisição está presente no objeto <code>routes</code>. Se a rota existir, a resposta correspondente é enviada com um código de status 200 (OK).
        Caso a rota não seja encontrada, o servidor retorna um código de status 404 e a mensagem "Página não encontrada."
    </p>

<h3>Criação do Servidor</h3>
    <p>
        O servidor é criado utilizando o método <code>http.createServer</code>, que recebe a função <code>requestHandler</code> como argumento.
        Isso define o comportamento padrão para todas as requisições feitas ao servidor.
        A porta 3000 é definida como a porta padrão para o servidor, o que significa que o servidor estará acessível em <code>http://localhost:3000</code>.
    </p>

<h3>Configuração da Porta</h3>
    <p>
        O servidor é configurado para escutar na porta 3000. Essa configuração pode ser alterada conforme a necessidade do ambiente, mas por padrão, a aplicação rodará nessa porta.
    </p>

<h3>Início do Servidor</h3>
    <p>
        Após a configuração, o servidor é iniciado e começa a escutar as requisições na porta especificada.
        Uma mensagem de confirmação é exibida no console, informando que o servidor está em execução e acessível no endereço <code>http://localhost:3000</code>.
    </p>
