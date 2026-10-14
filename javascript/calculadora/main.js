const readline = require('readline');

function calculo_soma(a, b) {
    return a + b;
}

function calculo_sub(a, b) {
    return a - b;
}

function calculo_mult(a, b) {
    return a * b;
}

function calculo_div(a, b) {
    if (b === 0) {
        throw new Error('Não é possível dividir por zero.');
    }
    return a / b;
}

if (require.main === module) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Digite o primeiro valor: ', (v1) => {
        rl.question('Digite o segundo valor: ', (v2) => {
            rl.question('Digite a operação: ', (op) => {
                const a = Number(v1);
                const b = Number(v2);

                if (op === '+') {
                    console.log(calculo_soma(a, b));
                } else if (op === '-') {
                    console.log(calculo_sub(a, b));
                } else if (op === '*') {
                    console.log(calculo_mult(a, b));
                } else if (op === '/') {
                    console.log(calculo_div(a, b));
                }
                rl.close();
            });
        });
    });
}

module.exports = {
    calculo_soma,
    calculo_sub,
    calculo_mult,
    calculo_div
};
