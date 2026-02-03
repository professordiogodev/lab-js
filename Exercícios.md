# 🚀 Lab JavaScript - Fundamentos Interativos

---

## 📚 Objetivo do Lab

Neste laboratório, vais explorar os conceitos fundamentais de JavaScript através de exercícios práticos e interativos. Cada secção apresenta um conceito-chave com exemplos de código que podes executar diretamente no browser.

**Duração estimada:** 2-3 horas  
**Nível:** Iniciante a Intermédio  
**Pré-requisitos:** Conhecimentos básicos de HTML

---

## 📋 Índice

1. [Variáveis e Tipos de Dados](#1-variáveis-e-tipos-de-dados)
2. [Manipulação do DOM](#2-manipulação-do-dom)
3. [Operadores e Expressões](#3-operadores-e-expressões)
4. [Estruturas de Controlo](#4-estruturas-de-controlo)
5. [Funções](#5-funções)
6. [Arrays e Métodos](#6-arrays-e-métodos)
7. [Objetos e JSON](#7-objetos-e-json)
8. [Event Handling](#8-event-handling)
9. [Async/Await e Promises](#9-asyncawait-e-promises)
10. [Projeto Final: Lista de Tarefas](#10-projeto-final-lista-de-tarefas)

---

## 🎯 1. Variáveis e Tipos de Dados

### Conceitos Teóricos

JavaScript tem diferentes formas de declarar variáveis:
- `var` - Escopo de função (evitar)
- `let` - Escopo de bloco (preferir)
- `const` - Constante, não pode ser reatribuída

### Tipos de Dados Primitivos

```javascript
// String
let nome = "Diogo";
let saudacao = 'Olá, JavaScript!';

// Number
let idade = 30;
let preco = 19.99;

// Boolean
let isAtivo = true;
let temPermissao = false;

// Undefined
let valorIndefinido;

// Null
let valorNulo = null;

// Symbol (ES6)
let id = Symbol('id');

// BigInt
let numeroGrande = 9007199254740991n;
```

### 💻 Exercício 1: Verificar Tipos

**Tarefa:** Cria variáveis de cada tipo e usa `typeof` para verificar o tipo de cada uma.

```javascript
// O teu código aqui
let texto = "JavaScript";
console.log(typeof texto); // "string"

let numero = 42;
console.log(typeof numero); // "number"

// Continua para os restantes tipos...
```

**🎯 Objetivo:** Compreender os tipos primitivos e como verificá-los.

> 💡 **Dica:** `typeof null` retorna "object" - isto é um bug histórico do JavaScript!

---

## 🎨 2. Manipulação do DOM

### Conceitos Teóricos

O DOM (Document Object Model) é uma representação em árvore do documento HTML. JavaScript permite-nos aceder e manipular qualquer elemento da página.

### Métodos de Seleção

```javascript
// Selecionar elementos
document.getElementById('meuId');
document.querySelector('.minhaClasse');
document.querySelectorAll('div');
document.getElementsByClassName('classe');
document.getElementsByTagName('p');
```

### Manipulação de Elementos

```javascript
// Alterar conteúdo
elemento.textContent = "Novo texto";
elemento.innerHTML = "<strong>HTML</strong>";

// Alterar estilos
elemento.style.color = "blue";
elemento.style.backgroundColor = "#f0f0f0";

// Adicionar/Remover classes
elemento.classList.add('ativo');
elemento.classList.remove('inativo');
elemento.classList.toggle('destaque');

// Criar e adicionar elementos
const novoDiv = document.createElement('div');
novoDiv.textContent = "Elemento novo";
document.body.appendChild(novoDiv);
```

### 💻 Exercício 2: Manipular uma Caixa Colorida

**HTML Base:**
```html
<!DOCTYPE html>
<html>
<head>
    <style>
        #caixa {
            width: 200px;
            height: 200px;
            background-color: lightblue;
            margin: 20px;
            transition: all 0.3s ease;
        }
    </style>
</head>
<body>
    <div id="caixa"></div>
    <button onclick="mudarCor()">Mudar Cor</button>
    <button onclick="mudarTamanho()">Mudar Tamanho</button>
    
    <script>
        // O teu código aqui
    </script>
</body>
</html>
```

**Tarefa:** Implementa as funções `mudarCor()` e `mudarTamanho()`.

```javascript
function mudarCor() {
    const caixa = document.getElementById('caixa');
    // Gera uma cor aleatória
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    caixa.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

function mudarTamanho() {
    const caixa = document.getElementById('caixa');
    // Alterna entre 200px e 300px
    const tamanhoAtual = parseInt(caixa.style.width || '200px');
    const novoTamanho = tamanhoAtual === 200 ? 300 : 200;
    caixa.style.width = novoTamanho + 'px';
    caixa.style.height = novoTamanho + 'px';
}
```

**🎯 Objetivo:** Compreender a manipulação básica do DOM e estilos CSS via JavaScript.

---

## 🔢 3. Operadores e Expressões

### Operadores Aritméticos

```javascript
let a = 10;
let b = 3;

console.log(a + b);  // 13 - Adição
console.log(a - b);  // 7 - Subtração
console.log(a * b);  // 30 - Multiplicação
console.log(a / b);  // 3.333... - Divisão
console.log(a % b);  // 1 - Módulo (resto)
console.log(a ** b); // 1000 - Exponenciação
```

### Operadores de Comparação

```javascript
console.log(5 == "5");   // true - Igualdade (com conversão de tipo)
console.log(5 === "5");  // false - Igualdade estrita (sem conversão)
console.log(5 != "5");   // false
console.log(5 !== "5");  // true
console.log(10 > 5);     // true
console.log(10 >= 10);   // true
console.log(5 < 3);      // false
```

### Operadores Lógicos

```javascript
let x = true;
let y = false;

console.log(x && y);  // false - AND
console.log(x || y);  // true - OR
console.log(!x);      // false - NOT
```

### 💻 Exercício 3: Calculadora Simples

**Tarefa:** Cria uma calculadora que aceita dois números e uma operação.

```javascript
function calculadora(num1, num2, operacao) {
    let resultado;
    
    switch(operacao) {
        case '+':
            resultado = num1 + num2;
            break;
        case '-':
            resultado = num1 - num2;
            break;
        case '*':
            resultado = num1 * num2;
            break;
        case '/':
            resultado = num2 !== 0 ? num1 / num2 : 'Erro: Divisão por zero';
            break;
        default:
            resultado = 'Operação inválida';
    }
    
    return resultado;
}

// Testes
console.log(calculadora(10, 5, '+'));  // 15
console.log(calculadora(10, 5, '-'));  // 5
console.log(calculadora(10, 5, '*'));  // 50
console.log(calculadora(10, 5, '/'));  // 2
```

**🎯 Objetivo:** Praticar operadores e estruturas de decisão.

---

## 🔀 4. Estruturas de Controlo

### If/Else

```javascript
let nota = 15;

if (nota >= 16) {
    console.log("Muito Bom!");
} else if (nota >= 14) {
    console.log("Bom");
} else if (nota >= 10) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}
```

### Switch

```javascript
let diaSemana = 3;
let nomeDia;

switch(diaSemana) {
    case 0:
        nomeDia = "Domingo";
        break;
    case 1:
        nomeDia = "Segunda-feira";
        break;
    case 2:
        nomeDia = "Terça-feira";
        break;
    // ... continua
    default:
        nomeDia = "Dia inválido";
}
```

### Loops

```javascript
// For loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// While loop
let contador = 0;
while (contador < 5) {
    console.log(contador);
    contador++;
}

// Do-While loop
let num = 0;
do {
    console.log(num);
    num++;
} while (num < 5);

// For...of (para arrays)
const frutas = ['maçã', 'banana', 'laranja'];
for (let fruta of frutas) {
    console.log(fruta);
}

// For...in (para objetos)
const pessoa = { nome: 'Ana', idade: 25 };
for (let chave in pessoa) {
    console.log(`${chave}: ${pessoa[chave]}`);
}
```

### 💻 Exercício 4: FizzBuzz

**Tarefa:** Implementa o clássico problema FizzBuzz.

> Imprime números de 1 a 100, mas:
> - Para múltiplos de 3, imprime "Fizz"
> - Para múltiplos de 5, imprime "Buzz"
> - Para múltiplos de ambos, imprime "FizzBuzz"

```javascript
function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

fizzBuzz();
```

**🎯 Objetivo:** Dominar estruturas de controlo e lógica condicional.

---

## ⚡ 5. Funções

### Declaração de Funções

```javascript
// Declaração tradicional
function saudar(nome) {
    return `Olá, ${nome}!`;
}

// Expressão de função
const despedir = function(nome) {
    return `Adeus, ${nome}!`;
};

// Arrow function (ES6)
const multiplicar = (a, b) => a * b;

// Arrow function com corpo
const calcularArea = (largura, altura) => {
    const area = largura * altura;
    return area;
};
```

### Parâmetros e Argumentos

```javascript
// Parâmetros padrão
function saudar(nome = "Visitante") {
    return `Olá, ${nome}!`;
}

// Rest parameters
function somar(...numeros) {
    return numeros.reduce((acc, num) => acc + num, 0);
}

console.log(somar(1, 2, 3, 4, 5)); // 15

// Destructuring de parâmetros
function apresentar({ nome, idade, cidade }) {
    console.log(`${nome}, ${idade} anos, de ${cidade}`);
}

apresentar({ nome: "João", idade: 30, cidade: "Lisboa" });
```

### Callbacks e Higher-Order Functions

```javascript
// Função que recebe outra função como argumento
function processar(array, callback) {
    const resultado = [];
    for (let item of array) {
        resultado.push(callback(item));
    }
    return resultado;
}

const numeros = [1, 2, 3, 4, 5];
const dobrados = processar(numeros, x => x * 2);
console.log(dobrados); // [2, 4, 6, 8, 10]
```

### 💻 Exercício 5: Conversor de Temperatura

**Tarefa:** Cria funções para converter temperaturas entre Celsius, Fahrenheit e Kelvin.

```javascript
// Converte Celsius para Fahrenheit
const celsiusParaFahrenheit = celsius => (celsius * 9/5) + 32;

// Converte Fahrenheit para Celsius
const fahrenheitParaCelsius = fahrenheit => (fahrenheit - 32) * 5/9;

// Converte Celsius para Kelvin
const celsiusParaKelvin = celsius => celsius + 273.15;

// Converte Kelvin para Celsius
const kelvinParaCelsius = kelvin => kelvin - 273.15;

// Função universal de conversão
function converterTemperatura(valor, deUnidade, paraUnidade) {
    // Primeiro converte tudo para Celsius
    let celsius;
    
    if (deUnidade === 'C') {
        celsius = valor;
    } else if (deUnidade === 'F') {
        celsius = fahrenheitParaCelsius(valor);
    } else if (deUnidade === 'K') {
        celsius = kelvinParaCelsius(valor);
    }
    
    // Depois converte de Celsius para a unidade desejada
    if (paraUnidade === 'C') {
        return celsius;
    } else if (paraUnidade === 'F') {
        return celsiusParaFahrenheit(celsius);
    } else if (paraUnidade === 'K') {
        return celsiusParaKelvin(celsius);
    }
}

// Testes
console.log(converterTemperatura(0, 'C', 'F'));    // 32
console.log(converterTemperatura(100, 'C', 'K'));  // 373.15
console.log(converterTemperatura(32, 'F', 'C'));   // 0
```

**🎯 Objetivo:** Criar e compor funções reutilizáveis.

---

## 📊 6. Arrays e Métodos

### Criação e Acesso

```javascript
// Criação de arrays
const frutas = ['maçã', 'banana', 'laranja'];
const numeros = new Array(1, 2, 3, 4, 5);
const misto = [1, 'texto', true, { nome: 'objeto' }];

// Acesso a elementos
console.log(frutas[0]);        // 'maçã'
console.log(frutas.length);    // 3
console.log(frutas[frutas.length - 1]); // último elemento
```

### Métodos Essenciais

```javascript
const numeros = [1, 2, 3, 4, 5];

// Adicionar/Remover elementos
numeros.push(6);           // Adiciona ao final
numeros.pop();             // Remove do final
numeros.unshift(0);        // Adiciona ao início
numeros.shift();           // Remove do início

// Slice (não modifica o original)
const copia = numeros.slice(1, 3); // [2, 3]

// Splice (modifica o original)
numeros.splice(2, 1);      // Remove 1 elemento na posição 2

// Concat
const array1 = [1, 2];
const array2 = [3, 4];
const combinado = array1.concat(array2); // [1, 2, 3, 4]

// Join
const palavras = ['JavaScript', 'é', 'incrível'];
console.log(palavras.join(' ')); // "JavaScript é incrível"
```

### Higher-Order Methods

```javascript
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Map - Transforma cada elemento
const dobrados = numeros.map(n => n * 2);
console.log(dobrados); // [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

// Filter - Filtra elementos baseado numa condição
const pares = numeros.filter(n => n % 2 === 0);
console.log(pares); // [2, 4, 6, 8, 10]

// Reduce - Reduz o array a um único valor
const soma = numeros.reduce((acc, n) => acc + n, 0);
console.log(soma); // 55

// Find - Encontra o primeiro elemento que satisfaz a condição
const maiorQue5 = numeros.find(n => n > 5);
console.log(maiorQue5); // 6

// Some - Verifica se pelo menos um elemento satisfaz a condição
const temPares = numeros.some(n => n % 2 === 0);
console.log(temPares); // true

// Every - Verifica se todos os elementos satisfazem a condição
const todosPositivos = numeros.every(n => n > 0);
console.log(todosPositivos); // true

// ForEach - Executa uma função para cada elemento
numeros.forEach((n, index) => {
    console.log(`Índice ${index}: ${n}`);
});
```

### 💻 Exercício 6: Processamento de Dados de Alunos

**Tarefa:** Trabalha com um array de objetos representando alunos.

```javascript
const alunos = [
    { nome: "Ana", notas: [15, 17, 16, 18] },
    { nome: "Bruno", notas: [12, 14, 13, 15] },
    { nome: "Carlos", notas: [8, 9, 7, 10] },
    { nome: "Diana", notas: [18, 19, 20, 19] },
    { nome: "Eduardo", notas: [11, 10, 9, 12] }
];

// 1. Calcula a média de cada aluno
const alunosComMedia = alunos.map(aluno => {
    const soma = aluno.notas.reduce((acc, nota) => acc + nota, 0);
    const media = soma / aluno.notas.length;
    return {
        ...aluno,
        media: media.toFixed(2)
    };
});

console.log(alunosComMedia);

// 2. Filtra alunos aprovados (média >= 10)
const aprovados = alunosComMedia.filter(aluno => aluno.media >= 10);
console.log("Alunos aprovados:", aprovados);

// 3. Encontra o aluno com a melhor média
const melhorAluno = alunosComMedia.reduce((melhor, atual) => 
    atual.media > melhor.media ? atual : melhor
);
console.log("Melhor aluno:", melhorAluno);

// 4. Calcula a média geral da turma
const mediaGeral = alunosComMedia.reduce((acc, aluno) => 
    acc + parseFloat(aluno.media), 0
) / alunosComMedia.length;
console.log("Média da turma:", mediaGeral.toFixed(2));

// 5. Lista os nomes dos alunos aprovados
const nomesAprovados = aprovados.map(aluno => aluno.nome);
console.log("Nomes dos aprovados:", nomesAprovados.join(', '));
```

**🎯 Objetivo:** Dominar métodos de arrays e processamento de dados.

---

## 🎯 7. Objetos e JSON

### Criação de Objetos

```javascript
// Object literal
const pessoa = {
    nome: "João",
    idade: 30,
    cidade: "Lisboa",
    saudar: function() {
        console.log(`Olá, eu sou ${this.nome}`);
    }
};

// Acesso a propriedades
console.log(pessoa.nome);      // Dot notation
console.log(pessoa['idade']);  // Bracket notation

// Adicionar propriedades
pessoa.profissao = "Programador";

// Deletar propriedades
delete pessoa.cidade;
```

### Métodos de Objetos

```javascript
const livro = {
    titulo: "JavaScript Avançado",
    autor: "John Doe",
    paginas: 450,
    
    detalhes() {
        return `${this.titulo} por ${this.autor} - ${this.paginas} páginas`;
    },
    
    ler(paginas) {
        this.paginas -= paginas;
        console.log(`Faltam ${this.paginas} páginas`);
    }
};
```

### Object Methods

```javascript
const obj = { a: 1, b: 2, c: 3 };

// Object.keys() - Retorna array de chaves
console.log(Object.keys(obj)); // ['a', 'b', 'c']

// Object.values() - Retorna array de valores
console.log(Object.values(obj)); // [1, 2, 3]

// Object.entries() - Retorna array de pares [chave, valor]
console.log(Object.entries(obj)); // [['a', 1], ['b', 2], ['c', 3]]

// Object.assign() - Copia propriedades
const copia = Object.assign({}, obj);

// Spread operator
const novoCopia = { ...obj, d: 4 };
```

### JSON

```javascript
// Objeto JavaScript para JSON string
const pessoa = { nome: "Ana", idade: 25, cidade: "Porto" };
const jsonString = JSON.stringify(pessoa);
console.log(jsonString); // '{"nome":"Ana","idade":25,"cidade":"Porto"}'

// JSON string para objeto JavaScript
const jsonParsed = JSON.parse(jsonString);
console.log(jsonParsed.nome); // "Ana"

// JSON com formatação
const jsonFormatado = JSON.stringify(pessoa, null, 2);
console.log(jsonFormatado);
/*
{
  "nome": "Ana",
  "idade": 25,
  "cidade": "Porto"
}
*/
```

### 💻 Exercício 7: Gestor de Biblioteca

**Tarefa:** Cria um sistema simples de gestão de livros.

```javascript
const biblioteca = {
    livros: [],
    
    adicionarLivro(titulo, autor, ano, isbn) {
        const livro = {
            id: Date.now(),
            titulo: titulo,
            autor: autor,
            ano: ano,
            isbn: isbn,
            disponivel: true
        };
        this.livros.push(livro);
        console.log(`✅ Livro "${titulo}" adicionado com sucesso!`);
    },
    
    listarLivros() {
        if (this.livros.length === 0) {
            console.log("📚 A biblioteca está vazia.");
            return;
        }
        
        console.log("📚 Livros na biblioteca:");
        this.livros.forEach(livro => {
            const status = livro.disponivel ? "✅ Disponível" : "❌ Emprestado";
            console.log(`- ${livro.titulo} por ${livro.autor} (${livro.ano}) - ${status}`);
        });
    },
    
    buscarPorTitulo(titulo) {
        return this.livros.filter(livro => 
            livro.titulo.toLowerCase().includes(titulo.toLowerCase())
        );
    },
    
    buscarPorAutor(autor) {
        return this.livros.filter(livro => 
            livro.autor.toLowerCase().includes(autor.toLowerCase())
        );
    },
    
    emprestarLivro(id) {
        const livro = this.livros.find(l => l.id === id);
        if (!livro) {
            console.log("❌ Livro não encontrado.");
            return;
        }
        
        if (!livro.disponivel) {
            console.log("❌ Livro já está emprestado.");
            return;
        }
        
        livro.disponivel = false;
        console.log(`✅ Livro "${livro.titulo}" emprestado com sucesso!`);
    },
    
    devolverLivro(id) {
        const livro = this.livros.find(l => l.id === id);
        if (!livro) {
            console.log("❌ Livro não encontrado.");
            return;
        }
        
        if (livro.disponivel) {
            console.log("❌ Este livro não está emprestado.");
            return;
        }
        
        livro.disponivel = true;
        console.log(`✅ Livro "${livro.titulo}" devolvido com sucesso!`);
    },
    
    estatisticas() {
        const total = this.livros.length;
        const disponiveis = this.livros.filter(l => l.disponivel).length;
        const emprestados = total - disponiveis;
        
        console.log("📊 Estatísticas da Biblioteca:");
        console.log(`Total de livros: ${total}`);
        console.log(`Disponíveis: ${disponiveis}`);
        console.log(`Emprestados: ${emprestados}`);
    },
    
    exportarJSON() {
        return JSON.stringify(this.livros, null, 2);
    },
    
    importarJSON(jsonString) {
        try {
            this.livros = JSON.parse(jsonString);
            console.log("✅ Dados importados com sucesso!");
        } catch (error) {
            console.log("❌ Erro ao importar dados:", error.message);
        }
    }
};

// Testes
biblioteca.adicionarLivro("JavaScript: The Good Parts", "Douglas Crockford", 2008, "978-0596517748");
biblioteca.adicionarLivro("Clean Code", "Robert C. Martin", 2008, "978-0132350884");
biblioteca.adicionarLivro("The Pragmatic Programmer", "Andy Hunt", 1999, "978-0201616224");

biblioteca.listarLivros();

const livroId = biblioteca.livros[0].id;
biblioteca.emprestarLivro(livroId);

biblioteca.estatisticas();

// Buscar livros
const resultados = biblioteca.buscarPorAutor("Martin");
console.log("Resultados da busca:", resultados);

// Exportar dados
const json = biblioteca.exportarJSON();
console.log("JSON exportado:", json);
```

**🎯 Objetivo:** Trabalhar com objetos complexos, métodos e JSON.

---

## 🖱️ 8. Event Handling

### Tipos de Eventos

```javascript
// Click
elemento.addEventListener('click', function(event) {
    console.log('Clicado!');
});

// Mouse events
elemento.addEventListener('mouseenter', () => console.log('Mouse entrou'));
elemento.addEventListener('mouseleave', () => console.log('Mouse saiu'));
elemento.addEventListener('mousemove', (e) => {
    console.log(`X: ${e.clientX}, Y: ${e.clientY}`);
});

// Keyboard events
document.addEventListener('keydown', (e) => {
    console.log(`Tecla pressionada: ${e.key}`);
});

document.addEventListener('keyup', (e) => {
    console.log(`Tecla solta: ${e.key}`);
});

// Form events
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Previne o comportamento padrão
    console.log('Formulário submetido');
});

input.addEventListener('input', (e) => {
    console.log(`Valor atual: ${e.target.value}`);
});

input.addEventListener('change', (e) => {
    console.log(`Valor alterado para: ${e.target.value}`);
});

// Window events
window.addEventListener('load', () => {
    console.log('Página carregada');
});

window.addEventListener('resize', () => {
    console.log(`Largura: ${window.innerWidth}, Altura: ${window.innerHeight}`);
});

window.addEventListener('scroll', () => {
    console.log(`Scroll Y: ${window.scrollY}`);
});
```

### Event Object

```javascript
elemento.addEventListener('click', (event) => {
    // Informações sobre o evento
    console.log(event.type);          // Tipo do evento
    console.log(event.target);        // Elemento que disparou o evento
    console.log(event.currentTarget); // Elemento que tem o listener
    console.log(event.clientX);       // Posição X do mouse
    console.log(event.clientY);       // Posição Y do mouse
    
    // Métodos úteis
    event.preventDefault();           // Previne comportamento padrão
    event.stopPropagation();          // Para a propagação do evento
});
```

### 💻 Exercício 8: Aplicação Interativa

**HTML Base:**
```html
<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <title>Eventos Interativos</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 800px;
            margin: 50px auto;
            padding: 20px;
        }
        
        #canvas {
            border: 2px solid #333;
            cursor: crosshair;
            margin: 20px 0;
        }
        
        .controls {
            margin: 20px 0;
        }
        
        button {
            padding: 10px 20px;
            margin: 5px;
            cursor: pointer;
            background: #007bff;
            color: white;
            border: none;
            border-radius: 5px;
        }
        
        button:hover {
            background: #0056b3;
        }
        
        #info {
            background: #f8f9fa;
            padding: 15px;
            border-radius: 5px;
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <h1>🎨 Canvas Interativo</h1>
    
    <div class="controls">
        <button id="btnLimpar">🗑️ Limpar</button>
        <button id="btnCor">🎨 Mudar Cor</button>
        <input type="range" id="tamanho" min="1" max="50" value="10">
        <label>Tamanho: <span id="tamanhoValor">10</span>px</label>
    </div>
    
    <canvas id="canvas" width="800" height="400"></canvas>
    
    <div id="info">
        <strong>Instruções:</strong>
        <ul>
            <li>Clique e arraste para desenhar</li>
            <li>Use o slider para ajustar o tamanho</li>
            <li>Clique em "Mudar Cor" para trocar a cor do pincel</li>
        </ul>
        <p id="posicao">Posição do mouse: X: 0, Y: 0</p>
    </div>
    
    <script>
        // O teu código aqui
    </script>
</body>
</html>
```

**JavaScript:**
```javascript
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const btnLimpar = document.getElementById('btnLimpar');
const btnCor = document.getElementById('btnCor');
const sliderTamanho = document.getElementById('tamanho');
const tamanhoValor = document.getElementById('tamanhoValor');
const posicaoTexto = document.getElementById('posicao');

let isDrawing = false;
let corAtual = '#000000';
let tamanho = 10;

// Configuração inicial do canvas
ctx.lineCap = 'round';
ctx.lineJoin = 'round';

// Event Listeners
canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    ctx.beginPath();
    ctx.moveTo(x, y);
});

canvas.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Atualiza a posição do mouse
    posicaoTexto.textContent = `Posição do mouse: X: ${Math.round(x)}, Y: ${Math.round(y)}`;
    
    if (isDrawing) {
        ctx.strokeStyle = corAtual;
        ctx.lineWidth = tamanho;
        ctx.lineTo(x, y);
        ctx.stroke();
    }
});

canvas.addEventListener('mouseup', () => {
    isDrawing = false;
});

canvas.addEventListener('mouseleave', () => {
    isDrawing = false;
});

// Botão limpar
btnLimpar.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

// Botão mudar cor
btnCor.addEventListener('click', () => {
    const cores = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8', '#F7DC6F', '#BB8FCE'];
    corAtual = cores[Math.floor(Math.random() * cores.length)];
    btnCor.style.background = corAtual;
});

// Slider de tamanho
sliderTamanho.addEventListener('input', (e) => {
    tamanho = e.target.value;
    tamanhoValor.textContent = tamanho;
});

// Prevenir scroll em dispositivos touch
canvas.addEventListener('touchmove', (e) => {
    e.preventDefault();
}, { passive: false });
```

**🎯 Objetivo:** Dominar event handling e criar interações complexas.

---

## ⏱️ 9. Async/Await e Promises

### Callbacks (Approach Antiga)

```javascript
// Callback Hell (evitar!)
getData(function(a) {
    getMoreData(a, function(b) {
        getMoreData(b, function(c) {
            console.log(c);
        });
    });
});
```

### Promises

```javascript
// Criar uma Promise
const minhaPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const sucesso = true;
        if (sucesso) {
            resolve("Operação bem-sucedida!");
        } else {
            reject("Algo correu mal...");
        }
    }, 1000);
});

// Usar a Promise
minhaPromise
    .then(resultado => console.log(resultado))
    .catch(erro => console.error(erro))
    .finally(() => console.log("Operação concluída"));

// Encadear Promises
fetch('https://api.exemplo.com/dados')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        return fetch('https://api.exemplo.com/mais-dados');
    })
    .then(response => response.json())
    .then(moreData => console.log(moreData))
    .catch(error => console.error('Erro:', error));
```

### Async/Await

```javascript
// Função assíncrona básica
async function buscarDados() {
    try {
        const response = await fetch('https://api.exemplo.com/dados');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erro ao buscar dados:', error);
        throw error;
    }
}

// Usar a função
buscarDados()
    .then(data => console.log(data))
    .catch(error => console.error(error));

// Ou com await (dentro de outra função async)
async function main() {
    const dados = await buscarDados();
    console.log(dados);
}
```

### Promise.all e Promise.race

```javascript
// Promise.all - Espera todas as promises
async function buscarTodosUsuarios() {
    try {
        const [usuarios, posts, comentarios] = await Promise.all([
            fetch('https://api.exemplo.com/usuarios').then(r => r.json()),
            fetch('https://api.exemplo.com/posts').then(r => r.json()),
            fetch('https://api.exemplo.com/comentarios').then(r => r.json())
        ]);
        
        return { usuarios, posts, comentarios };
    } catch (error) {
        console.error('Erro em uma das requisições:', error);
    }
}

// Promise.race - Retorna a primeira promise que resolver
async function buscarComTimeout() {
    const timeout = new Promise((_, reject) => 
        setTimeout(() => reject(new Error('Timeout!')), 5000)
    );
    
    const dados = fetch('https://api.exemplo.com/dados').then(r => r.json());
    
    try {
        const resultado = await Promise.race([dados, timeout]);
        return resultado;
    } catch (error) {
        console.error('Erro ou timeout:', error);
    }
}
```

### 💻 Exercício 9: App de Clima

**Tarefa:** Cria uma aplicação que busca dados meteorológicos de uma API.

**HTML:**
```html
<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <title>App de Clima</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0;
            padding: 20px;
        }
        
        .container {
            background: white;
            padding: 40px;
            border-radius: 20px;
            box-shadow: 0 20px 60px rgba(0,0,0,0.3);
            max-width: 500px;
            width: 100%;
        }
        
        h1 {
            text-align: center;
            color: #667eea;
            margin-bottom: 30px;
        }
        
        .busca {
            display: flex;
            gap: 10px;
            margin-bottom: 20px;
        }
        
        input {
            flex: 1;
            padding: 12px;
            border: 2px solid #ddd;
            border-radius: 8px;
            font-size: 16px;
        }
        
        input:focus {
            outline: none;
            border-color: #667eea;
        }
        
        button {
            padding: 12px 30px;
            background: #667eea;
            color: white;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            font-size: 16px;
            font-weight: 600;
        }
        
        button:hover {
            background: #5568d3;
        }
        
        .loading {
            text-align: center;
            padding: 40px;
            color: #667eea;
            font-weight: 600;
        }
        
        .clima-info {
            text-align: center;
        }
        
        .temperatura {
            font-size: 4em;
            font-weight: bold;
            color: #667eea;
            margin: 20px 0;
        }
        
        .detalhes {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 15px;
            margin-top: 20px;
        }
        
        .detalhe {
            background: #f8f9fa;
            padding: 15px;
            border-radius: 10px;
        }
        
        .detalhe-label {
            color: #666;
            font-size: 0.9em;
            margin-bottom: 5px;
        }
        
        .detalhe-valor {
            font-size: 1.2em;
            font-weight: 600;
            color: #333;
        }
        
        .erro {
            background: #fee;
            color: #c33;
            padding: 15px;
            border-radius: 8px;
            margin-top: 20px;
            text-align: center;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>🌤️ App de Clima</h1>
        
        <div class="busca">
            <input type="text" id="cidadeInput" placeholder="Digite uma cidade...">
            <button onclick="buscarClima()">Buscar</button>
        </div>
        
        <div id="resultado"></div>
    </div>
    
    <script>
        // O teu código aqui
    </script>
</body>
</html>
```

**JavaScript:**
```javascript
const API_KEY = 'SUA_API_KEY_AQUI'; // Obter em https://openweathermap.org/api
const cidadeInput = document.getElementById('cidadeInput');
const resultado = document.getElementById('resultado');

// Função para buscar clima
async function buscarClima() {
    const cidade = cidadeInput.value.trim();
    
    if (!cidade) {
        mostrarErro('Por favor, digite uma cidade!');
        return;
    }
    
    mostrarLoading();
    
    try {
        const dados = await obterDadosClima(cidade);
        mostrarClima(dados);
    } catch (error) {
        mostrarErro(error.message);
    }
}

// Obter dados da API
async function obterDadosClima(cidade) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${API_KEY}&units=metric&lang=pt`;
    
    const response = await fetch(url);
    
    if (!response.ok) {
        if (response.status === 404) {
            throw new Error('Cidade não encontrada!');
        }
        throw new Error('Erro ao buscar dados do clima');
    }
    
    const data = await response.json();
    return data;
}

// Mostrar loading
function mostrarLoading() {
    resultado.innerHTML = `
        <div class="loading">
            <p>🔄 Buscando informações...</p>
        </div>
    `;
}

// Mostrar dados do clima
function mostrarClima(dados) {
    const temperatura = Math.round(dados.main.temp);
    const sensacao = Math.round(dados.main.feels_like);
    const descricao = dados.weather[0].description;
    const icone = dados.weather[0].icon;
    const umidade = dados.main.humidity;
    const vento = dados.wind.speed;
    const pressao = dados.main.pressure;
    
    resultado.innerHTML = `
        <div class="clima-info">
            <img src="https://openweathermap.org/img/wn/${icone}@2x.png" alt="${descricao}">
            <h2>${dados.name}, ${dados.sys.country}</h2>
            <div class="temperatura">${temperatura}°C</div>
            <p style="text-transform: capitalize; font-size: 1.2em; color: #666;">
                ${descricao}
            </p>
            
            <div class="detalhes">
                <div class="detalhe">
                    <div class="detalhe-label">Sensação Térmica</div>
                    <div class="detalhe-valor">${sensacao}°C</div>
                </div>
                <div class="detalhe">
                    <div class="detalhe-label">Humidade</div>
                    <div class="detalhe-valor">${umidade}%</div>
                </div>
                <div class="detalhe">
                    <div class="detalhe-label">Vento</div>
                    <div class="detalhe-valor">${vento} m/s</div>
                </div>
                <div class="detalhe">
                    <div class="detalhe-label">Pressão</div>
                    <div class="detalhe-valor">${pressao} hPa</div>
                </div>
            </div>
        </div>
    `;
}

// Mostrar erro
function mostrarErro(mensagem) {
    resultado.innerHTML = `
        <div class="erro">
            <strong>❌ Erro:</strong> ${mensagem}
        </div>
    `;
}

// Permitir busca com Enter
cidadeInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        buscarClima();
    }
});

// Nota: Para usar esta app, precisas de uma API key gratuita de https://openweathermap.org/api
// Alternativa sem API key: usar https://api.open-meteo.com/v1/forecast
```

**Versão Alternativa Sem API Key (Open-Meteo):**
```javascript
async function buscarClima() {
    const cidade = cidadeInput.value.trim();
    
    if (!cidade) {
        mostrarErro('Por favor, digite uma cidade!');
        return;
    }
    
    mostrarLoading();
    
    try {
        // Primeiro, buscar coordenadas da cidade
        const coordenadas = await obterCoordenadas(cidade);
        
        // Depois, buscar dados do clima
        const dados = await obterDadosClima(coordenadas.latitude, coordenadas.longitude);
        
        mostrarClima({
            ...dados,
            nome: coordenadas.nome,
            pais: coordenadas.pais
        });
    } catch (error) {
        mostrarErro(error.message);
    }
}

async function obterCoordenadas(cidade) {
    const url = `https://geocoding-api.open-meteo.com/v1/search?name=${cidade}&count=1&language=pt&format=json`;
    
    const response = await fetch(url);
    const data = await response.json();
    
    if (!data.results || data.results.length === 0) {
        throw new Error('Cidade não encontrada!');
    }
    
    return {
        latitude: data.results[0].latitude,
        longitude: data.results[0].longitude,
        nome: data.results[0].name,
        pais: data.results[0].country
    };
}

async function obterDadosClima(lat, lon) {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code&timezone=auto`;
    
    const response = await fetch(url);
    
    if (!response.ok) {
        throw new Error('Erro ao buscar dados do clima');
    }
    
    const data = await response.json();
    return data.current;
}
```

**🎯 Objetivo:** Dominar operações assíncronas e integração com APIs.

---

## 🎨 10. Projeto Final: Lista de Tarefas Completa

### Especificações do Projeto

Cria uma aplicação de lista de tarefas (Todo List) com as seguintes funcionalidades:

**Funcionalidades Obrigatórias:**
- ✅ Adicionar tarefas
- ✅ Marcar tarefas como concluídas
- ✅ Editar tarefas
- ✅ Eliminar tarefas
- ✅ Filtrar tarefas (todas, ativas, concluídas)
- ✅ Persistência com Local Storage
- ✅ Contador de tarefas
- ✅ Design responsivo

**Funcionalidades Extra (Opcional):**
- ⭐ Prioridades (alta, média, baixa)
- ⭐ Categorias/Tags
- ⭐ Data de vencimento
- ⭐ Ordenação personalizada
- ⭐ Exportar/Importar JSON

### Código Completo

```html
<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>📝 Todo List Pro</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            padding: 20px;
        }
        
        .container {
            max-width: 800px;
            margin: 0 auto;
            background: white;
            border-radius: 20px;
            box-shadow: 0 20px 60px rgba(0,0,0,0.3);
            overflow: hidden;
        }
        
        header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 30px;
            text-align: center;
        }
        
        h1 {
            font-size: 2.5em;
            margin-bottom: 10px;
        }
        
        .stats {
            display: flex;
            justify-content: center;
            gap: 30px;
            margin-top: 15px;
        }
        
        .stat {
            text-align: center;
        }
        
        .stat-number {
            font-size: 2em;
            font-weight: bold;
        }
        
        .stat-label {
            font-size: 0.9em;
            opacity: 0.9;
        }
        
        .main-content {
            padding: 30px;
        }
        
        .add-task {
            display: flex;
            gap: 10px;
            margin-bottom: 30px;
        }
        
        input[type="text"] {
            flex: 1;
            padding: 15px;
            border: 2px solid #ddd;
            border-radius: 10px;
            font-size: 16px;
            transition: border-color 0.3s;
        }
        
        input[type="text"]:focus {
            outline: none;
            border-color: #667eea;
        }
        
        button {
            padding: 15px 30px;
            background: #667eea;
            color: white;
            border: none;
            border-radius: 10px;
            cursor: pointer;
            font-size: 16px;
            font-weight: 600;
            transition: all 0.3s;
        }
        
        button:hover {
            background: #5568d3;
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
        }
        
        .filters {
            display: flex;
            gap: 10px;
            margin-bottom: 20px;
            flex-wrap: wrap;
        }
        
        .filter-btn {
            padding: 10px 20px;
            background: #f8f9fa;
            color: #333;
            border: 2px solid #ddd;
            border-radius: 8px;
            cursor: pointer;
            font-size: 14px;
            transition: all 0.3s;
        }
        
        .filter-btn:hover {
            background: #e9ecef;
        }
        
        .filter-btn.active {
            background: #667eea;
            color: white;
            border-color: #667eea;
        }
        
        .tasks-list {
            list-style: none;
        }
        
        .task-item {
            background: #f8f9fa;
            padding: 20px;
            margin-bottom: 10px;
            border-radius: 10px;
            display: flex;
            align-items: center;
            gap: 15px;
            transition: all 0.3s;
            animation: slideIn 0.3s ease;
        }
        
        @keyframes slideIn {
            from {
                opacity: 0;
                transform: translateX(-20px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }
        
        .task-item:hover {
            transform: translateX(5px);
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }
        
        .task-item.completed {
            opacity: 0.6;
        }
        
        .task-item.completed .task-text {
            text-decoration: line-through;
        }
        
        .task-checkbox {
            width: 24px;
            height: 24px;
            cursor: pointer;
        }
        
        .task-text {
            flex: 1;
            font-size: 16px;
            color: #333;
        }
        
        .task-actions {
            display: flex;
            gap: 10px;
        }
        
        .task-actions button {
            padding: 8px 15px;
            font-size: 14px;
        }
        
        .btn-edit {
            background: #ffc107;
        }
        
        .btn-edit:hover {
            background: #e0a800;
        }
        
        .btn-delete {
            background: #dc3545;
        }
        
        .btn-delete:hover {
            background: #c82333;
        }
        
        .empty-state {
            text-align: center;
            padding: 60px 20px;
            color: #999;
        }
        
        .empty-state-icon {
            font-size: 4em;
            margin-bottom: 20px;
        }
        
        .priority-badge {
            padding: 4px 12px;
            border-radius: 12px;
            font-size: 12px;
            font-weight: 600;
        }
        
        .priority-high {
            background: #fee;
            color: #c33;
        }
        
        .priority-medium {
            background: #ffc;
            color: #c93;
        }
        
        .priority-low {
            background: #efe;
            color: #3c3;
        }
        
        select {
            padding: 8px;
            border: 2px solid #ddd;
            border-radius: 8px;
            font-size: 14px;
        }
        
        .export-import {
            display: flex;
            gap: 10px;
            margin-top: 20px;
            padding-top: 20px;
            border-top: 2px solid #eee;
        }
    </style>
</head>
<body>
    <div class="container">
        <header>
            <h1>📝 Todo List Pro</h1>
            <div class="stats">
                <div class="stat">
                    <div class="stat-number" id="totalTasks">0</div>
                    <div class="stat-label">Total</div>
                </div>
                <div class="stat">
                    <div class="stat-number" id="activeTasks">0</div>
                    <div class="stat-label">Ativas</div>
                </div>
                <div class="stat">
                    <div class="stat-number" id="completedTasks">0</div>
                    <div class="stat-label">Concluídas</div>
                </div>
            </div>
        </header>
        
        <div class="main-content">
            <div class="add-task">
                <input 
                    type="text" 
                    id="taskInput" 
                    placeholder="O que precisas fazer hoje?"
                    onkeypress="if(event.key==='Enter') adicionarTarefa()"
                >
                <select id="prioritySelect">
                    <option value="low">Baixa</option>
                    <option value="medium" selected>Média</option>
                    <option value="high">Alta</option>
                </select>
                <button onclick="adicionarTarefa()">➕ Adicionar</button>
            </div>
            
            <div class="filters">
                <button class="filter-btn active" onclick="filtrarTarefas('all')">Todas</button>
                <button class="filter-btn" onclick="filtrarTarefas('active')">Ativas</button>
                <button class="filter-btn" onclick="filtrarTarefas('completed')">Concluídas</button>
            </div>
            
            <ul id="tasksList" class="tasks-list"></ul>
            
            <div class="export-import">
                <button onclick="exportarDados()">📥 Exportar</button>
                <button onclick="document.getElementById('fileInput').click()">📤 Importar</button>
                <input type="file" id="fileInput" style="display: none" onchange="importarDados(event)" accept=".json">
                <button onclick="limparTodas()">🗑️ Limpar Todas</button>
            </div>
        </div>
    </div>
    
    <script>
        // Estado da aplicação
        let tarefas = [];
        let filtroAtual = 'all';
        
        // Carregar tarefas do Local Storage ao iniciar
        window.addEventListener('load', () => {
            carregarTarefas();
            renderizarTarefas();
            atualizarEstatisticas();
        });
        
        // Adicionar tarefa
        function adicionarTarefa() {
            const input = document.getElementById('taskInput');
            const texto = input.value.trim();
            const prioridade = document.getElementById('prioritySelect').value;
            
            if (!texto) {
                alert('Por favor, escreve uma tarefa!');
                return;
            }
            
            const tarefa = {
                id: Date.now(),
                texto: texto,
                concluida: false,
                prioridade: prioridade,
                dataCriacao: new Date().toISOString()
            };
            
            tarefas.push(tarefa);
            input.value = '';
            
            salvarTarefas();
            renderizarTarefas();
            atualizarEstatisticas();
        }
        
        // Alternar conclusão
        function alternarConclusao(id) {
            const tarefa = tarefas.find(t => t.id === id);
            if (tarefa) {
                tarefa.concluida = !tarefa.concluida;
                salvarTarefas();
                renderizarTarefas();
                atualizarEstatisticas();
            }
        }
        
        // Editar tarefa
        function editarTarefa(id) {
            const tarefa = tarefas.find(t => t.id === id);
            if (!tarefa) return;
            
            const novoTexto = prompt('Editar tarefa:', tarefa.texto);
            if (novoTexto && novoTexto.trim()) {
                tarefa.texto = novoTexto.trim();
                salvarTarefas();
                renderizarTarefas();
            }
        }
        
        // Eliminar tarefa
        function eliminarTarefa(id) {
            if (confirm('Tens a certeza que queres eliminar esta tarefa?')) {
                tarefas = tarefas.filter(t => t.id !== id);
                salvarTarefas();
                renderizarTarefas();
                atualizarEstatisticas();
            }
        }
        
        // Filtrar tarefas
        function filtrarTarefas(filtro) {
            filtroAtual = filtro;
            
            // Atualizar botões
            document.querySelectorAll('.filter-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            event.target.classList.add('active');
            
            renderizarTarefas();
        }
        
        // Renderizar tarefas
        function renderizarTarefas() {
            const lista = document.getElementById('tasksList');
            
            let tarefasFiltradas = tarefas;
            if (filtroAtual === 'active') {
                tarefasFiltradas = tarefas.filter(t => !t.concluida);
            } else if (filtroAtual === 'completed') {
                tarefasFiltradas = tarefas.filter(t => t.concluida);
            }
            
            if (tarefasFiltradas.length === 0) {
                lista.innerHTML = `
                    <div class="empty-state">
                        <div class="empty-state-icon">📭</div>
                        <p>Nenhuma tarefa encontrada</p>
                    </div>
                `;
                return;
            }
            
            // Ordenar por prioridade e data
            const prioridadeOrdem = { high: 0, medium: 1, low: 2 };
            tarefasFiltradas.sort((a, b) => {
                if (a.concluida !== b.concluida) {
                    return a.concluida ? 1 : -1;
                }
                return prioridadeOrdem[a.prioridade] - prioridadeOrdem[b.prioridade];
            });
            
            lista.innerHTML = tarefasFiltradas.map(tarefa => `
                <li class="task-item ${tarefa.concluida ? 'completed' : ''}">
                    <input 
                        type="checkbox" 
                        class="task-checkbox" 
                        ${tarefa.concluida ? 'checked' : ''}
                        onchange="alternarConclusao(${tarefa.id})"
                    >
                    <span class="task-text">${tarefa.texto}</span>
                    <span class="priority-badge priority-${tarefa.prioridade}">
                        ${traduzirPrioridade(tarefa.prioridade)}
                    </span>
                    <div class="task-actions">
                        <button class="btn-edit" onclick="editarTarefa(${tarefa.id})">
                            ✏️ Editar
                        </button>
                        <button class="btn-delete" onclick="eliminarTarefa(${tarefa.id})">
                            🗑️ Eliminar
                        </button>
                    </div>
                </li>
            `).join('');
        }
        
        // Atualizar estatísticas
        function atualizarEstatisticas() {
            const total = tarefas.length;
            const concluidas = tarefas.filter(t => t.concluida).length;
            const ativas = total - concluidas;
            
            document.getElementById('totalTasks').textContent = total;
            document.getElementById('activeTasks').textContent = ativas;
            document.getElementById('completedTasks').textContent = concluidas;
        }
        
        // Salvar no Local Storage
        function salvarTarefas() {
            localStorage.setItem('tarefas', JSON.stringify(tarefas));
        }
        
        // Carregar do Local Storage
        function carregarTarefas() {
            const dados = localStorage.getItem('tarefas');
            if (dados) {
                tarefas = JSON.parse(dados);
            }
        }
        
        // Exportar dados
        function exportarDados() {
            const dataStr = JSON.stringify(tarefas, null, 2);
            const dataBlob = new Blob([dataStr], { type: 'application/json' });
            
            const url = URL.createObjectURL(dataBlob);
            const link = document.createElement('a');
            link.href = url;
            link.download = `tarefas_${new Date().toISOString().split('T')[0]}.json`;
            link.click();
            
            URL.revokeObjectURL(url);
        }
        
        // Importar dados
        function importarDados(event) {
            const file = event.target.files[0];
            if (!file) return;
            
            const reader = new FileReader();
            reader.onload = (e) => {
                try {
                    const dados = JSON.parse(e.target.result);
                    if (Array.isArray(dados)) {
                        tarefas = dados;
                        salvarTarefas();
                        renderizarTarefas();
                        atualizarEstatisticas();
                        alert('Dados importados com sucesso!');
                    } else {
                        alert('Formato de ficheiro inválido!');
                    }
                } catch (error) {
                    alert('Erro ao importar ficheiro!');
                }
            };
            reader.readAsText(file);
        }
        
        // Limpar todas as tarefas
        function limparTodas() {
            if (confirm('Tens a certeza que queres eliminar TODAS as tarefas?')) {
                tarefas = [];
                salvarTarefas();
                renderizarTarefas();
                atualizarEstatisticas();
            }
        }
        
        // Traduzir prioridade
        function traduzirPrioridade(prioridade) {
            const traducao = {
                high: 'Alta',
                medium: 'Média',
                low: 'Baixa'
            };
            return traducao[prioridade] || prioridade;
        }
    </script>
</body>
</html>
```

**🎯 Objetivo Final:** Consolidar todos os conhecimentos adquiridos num projeto completo e funcional.

---

## 🎓 Conclusão

Parabéns por completares este laboratório de JavaScript! Agora dominas:

✅ Variáveis e tipos de dados  
✅ Manipulação do DOM  
✅ Operadores e expressões  
✅ Estruturas de controlo  
✅ Funções e callbacks  
✅ Arrays e métodos avançados  
✅ Objetos e JSON  
✅ Event handling  
✅ Programação assíncrona  
✅ Desenvolvimento de projetos completos

### 📚 Próximos Passos

1. **Frameworks Modernos** - React, Vue, Angular
2. **Node.js** - JavaScript no backend
3. **TypeScript** - JavaScript com tipos
4. **APIs REST** - Integração com backends
5. **Testes** - Jest, Mocha, Cypress

### 🔗 Recursos Adicionais

- [MDN Web Docs](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [JavaScript.info](https://javascript.info/)
- [Eloquent JavaScript](https://eloquentjavascript.net/)
- [You Don't Know JS](https://github.com/getify/You-Dont-Know-JS)
