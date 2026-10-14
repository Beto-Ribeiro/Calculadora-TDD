const test = require('node:test');
const assert = require('node:assert');
const { calculo_sub } = require('../calculadora/main');

test('teste subtracao', () => {
    assert.strictEqual(calculo_sub(5, 3), 2);
});
