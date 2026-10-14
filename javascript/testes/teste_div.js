const test = require('node:test');
const assert = require('node:assert');
const { calculo_div } = require('../calculadora/main');

test('teste divisao', () => {
    assert.strictEqual(calculo_div(10, 2), 5);
});

test('teste divisao por zero', () => {
    assert.throws(() => {
        calculo_div(5, 0);
    }, new Error('Não é possível dividir por zero.'));
});
