const test = require('node:test');
const assert = require('node:assert');
const { calculo_mult } = require('../calculadora/main');

test('teste multiplicacao', () => {
    assert.strictEqual(calculo_mult(3, 4), 12);
});
