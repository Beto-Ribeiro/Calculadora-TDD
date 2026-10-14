def calculo_soma(a, b):
    return a + b


def calculo_sub(a, b):
    return a - b


def calculo_mult(a, b):
    return a * b


def calculo_div(a, b):
    if b == 0:
        raise ValueError("Não é possível dividir por zero.")
    return a / b


if __name__ == '__main__':
    a = int(input("Digite o primeiro valor: "))
    b = int(input("Digite o segundo valor: "))
    op = input("Digite a operação: ")

    if op == "+":
        print(calculo_soma(a, b))
    elif op == "-":
        print(calculo_sub(a, b))
    elif op == "*":
        print(calculo_mult(a, b))
    elif op == "/":
        print(calculo_div(a, b))
