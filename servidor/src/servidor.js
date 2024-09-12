import http from 'node:http';

// Mapa de rotas e suas respostas
const routes = {
    '/': 'Bem-vindo à página inicial!',
    '/sobre': 'Esta é a página sobre.',
    '/contato': 'Esta é a página de contato.'
};

// Função para lidar com as requisições e respostas do servidor
const requestHandler = (req, res) => {
    res.setHeader('Content-Type', 'text/plain'); // Define o tipo de conteúdo como texto simples

    // Verifica se a rota existe no mapa de rotas
    if (routes[req.url]) {
        res.statusCode = 200; // Status OK
        res.end(routes[req.url]); // Retorna a resposta correspondente à rota
    } else {
        res.statusCode = 404; // Status "Página não encontrada"
        res.end('Página não encontrada.');
    }
};

// Cria o servidor
const server = http.createServer(requestHandler);

// Define a porta para o servidor
const port = 3000;

// Servidor ouvindo na porta definida
server.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}/`);
});
