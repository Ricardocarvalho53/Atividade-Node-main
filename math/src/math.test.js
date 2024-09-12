import math from './math.js';
import assert from 'assert';

describe('Funções Matemáticas', function () {
    it('Deve retornar 13 para adição de 10 + 3', function () {
        assert.strictEqual(math.adicao(10, 3), 13);
    });

    it('Deve retornar 7 para subtração de 10 - 3', function () {
        assert.strictEqual(math.subtracao(10, 3), 7);
    });

    it('Deve retornar 30 para multiplicação de 10 * 3', function () {
        assert.strictEqual(math.multiplicacao(10, 3), 30);
    });

    it('Deve retornar 3.33 para divisão de 10 / 3', function () {
        assert.strictEqual(math.divisao(10, 3).toFixed(2), '3.33');
    });
});

