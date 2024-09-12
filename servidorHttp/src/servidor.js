import express from 'express';

// Cria uma instância do aplicativo Express
const app = express();

// Middleware para analisar o corpo das requisições como JSON
app.use(express.json());

// Retorna uma mensagem 'Hello World'
app.get('/', (req, res) => {
  res.send('Hello World');
});

// Recebe dados no corpo da requisição e retorna uma resposta JSON com a mensagem 'Sucesso' e os dados recebidos
app.post('/data', (req, res) => {
  res.json({ message: 'Sucesso', data: req.body });
});

// Porta padrão definida como variável de ambiente
const PORT = 3000;

// Inicia o servidor na porta definida e exibe uma mensagem no console
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

// Exporta a instância do aplicativo para ser usada em outros arquivos (por exemplo, em testes)
export default app;
