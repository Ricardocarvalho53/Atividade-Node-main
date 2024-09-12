import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../servidor.js';

const { expect } = chai;
chai.use(chaiHttp);

describe('API', () => {
  it('deve retornar "Hello World" na rota GET /', async () => {
    const response = await chai.request(app).get('/');
    expect(response).to.have.status(200);
    expect(response.text).to.equal('Hello World');
  });

  it('deve lidar com requisições POST para /data', async () => {
    const data = { message: 'Teste' };
    const response = await chai.request(app)
      .post('/data')
      .send(data);
    expect(response).to.have.status(200);
    expect(response.body).to.deep.equal({ message: 'Sucesso', data });
  });
});
