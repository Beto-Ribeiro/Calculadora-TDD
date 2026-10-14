const test = require('node:test');
const assert = require('node:assert');
const { calculo_soma } = require('../calculadora/main');

test('teste soma', () => {
    assert.strictEqual(calculo_soma(2, 2), 4);
});
