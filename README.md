# Calculadora TDD (JavaScript & Python)

Projeto acadêmico contendo a implementação de calculadoras simples para terminal com as 4 operações básicas (soma, subtração, multiplicação e divisão), desenvolvidas utilizando o ciclo de **TDD (Test-Driven Development)**:
1. **Red**: Criação de testes unitários que falham antes da implementação da lógica.
2. **Green**: Desenvolvimento do código mínimo necessário para que todos os testes passem.
3. **Refactor**: Organização e refinamento do código mantendo os testes 100% aprovados.

---

## 📁 Estrutura do Repositório

```text
.
├── javascript/
│   ├── calculadora/
│   │   └── main.js
│   ├── testes/
│   │   ├── teste_soma.js
│   │   ├── teste_sub.js
│   │   ├── teste_mult.js
│   │   └── teste_div.js
│   ├── prints/
│   │   ├── print_red_div.png
│   │   ├── print_red_mult.png
│   │   ├── print_red_soma.png
│   │   ├── print_red_sub.png
│   │   ├── print_green_soma.png
│   │   ├── print_green_sub.png
│   │   ├── print_green_mult.png
│   │   ├── print_green_div.png
│   │   └── print_funcionou.png
│   └── Relatorio_Calculadora_TDD.pdf
├── python/
│   ├── calculadora/
│   │   ├── __init__.py
│   │   └── main.py
│   └── testes/
│       ├── __init__.py
│       ├── teste_soma.py
│       ├── teste_sub.py
│       ├── teste_mult.py
│       └── teste_div.py
├── Relatorio_Calculadora_TDD.pdf
├── .gitignore
└── README.md
```

---

## 🚀 Como Executar

### 1. JavaScript (Node.js)

Abra o terminal na pasta `javascript/`:
```bash
cd javascript
```

- **Executar todos os testes:**
  ```bash
  node --test testes/*.js
  ```

- **Executar testes individuais:**
  ```bash
  node --test testes/teste_soma.js
  node --test testes/teste_sub.js
  node --test testes/teste_mult.js
  node --test testes/teste_div.js
  ```

- **Executar a calculadora interativa no terminal:**
  ```bash
  node calculadora/main.js
  ```

---

### 2. Python

Abra o terminal na pasta `python/`:
```bash
cd python
```

- **Executar todos os testes:**
  ```bash
  python -m unittest discover testes
  ```

- **Executar testes individuais:**
  ```bash
  python -m unittest testes/teste_soma.py
  python -m unittest testes/teste_sub.py
  python -m unittest testes/teste_mult.py
  python -m unittest testes/teste_div.py
  ```

- **Executar a calculadora interativa no terminal:**
  ```bash
  python calculadora/main.py
  ```

---

## 📄 Relatório Acadêmico

O arquivo [Relatorio_Calculadora_TDD.pdf](Relatorio_Calculadora_TDD.pdf) contém a estruturação completa das etapas do TDD com todos os prints capturados (fases RED, GREEN/PASSOU, CÓDIGO FONTE e FUNCIONOU no terminal).
