// Global variables
let counter = 0; // Variável para o exercício do contador
let students = []; // Lista de estudantes
let todos = []; // Lista de afazeres

// Barra de progresso
let progressInterval = null;
let currentProgress = 0;

// 1. Data Types Demonstration
function demonstrateDataTypes() {
    // Obter o quadrado de demonstração dos tipos de dados
    const output = document.getElementById('dataTypesOutput');

    // Criar um objeto com exemplos (para preencher o nosso HTML)
    const examples = {
        string: 'Hello, JavaScript!',
        number: 42,
        boolean: true,
        undefined: undefined,
        null: null,
        object: { name: 'Diogo', role: 'Trainer' },
        array: [1, 2, 3, 4, 5]
    };

    let html = '<h3>JavaScript Data Types:</h3>';

    // Para cada propriedade no objeto, vamos extrair o tipo e o valor
    // Usando esta função especial Object.entries, vamos obter pares de chave-valor
    // Abaixo chamados de [type, value]
    for (let [type, value] of Object.entries(examples)) {
        html += `<strong>${type}:</strong> ${JSON.stringify(value)} (typeof: ${typeof value})<br>`;
    }

    output.innerHTML = html;
}

// 2. DOM Manipulation - Color Box
function changeColor() {
    const box = document.getElementById('colorBox');
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    box.style.background = `rgb(${r}, ${g}, ${b})`; // rgb(248, 176, 142)
}

// Alternar entre 300 (width, height) e 200 (width, height)
function changeSize() {
    const box = document.getElementById('colorBox');
    const currentWidth = parseInt(getComputedStyle(box).width);
    box.style.width = currentWidth === 200 ? '300px' : '200px';
    box.style.height = currentWidth === 200 ? '300px' : '200px';
}

// 3. Counter Application

// Aumentar o contador e fazer update ao HTML
function incrementCounter() {
    counter++;
    updateCounterDisplay();
}

// Diminuir o contador e fazer update ao HTML
function decrementCounter() {
    counter--;
    updateCounterDisplay();
}

// Resetar o contador e fazer update ao HTML
function resetCounter() {
    counter = 0;
    updateCounterDisplay();
}

// Update ao HTML em função do que está na variável "counter" declarada acima
function updateCounterDisplay() {
    document.getElementById('counterDisplay').textContent = counter;
}

// 4. Arrays & Higher-Order Functions
function demonstrateArrays() {
    // Começar um array com números
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    // Manipulação de arrays
    const doubled = numbers.map(n => n * 2);
    const evens = numbers.filter(n => n % 2 === 0);
    const sum = numbers.reduce((acc, n) => acc + n, 0);

    // Obter um elemento HTML para preencher
    const output = document.getElementById('arrayOutput');

    // Preencher esse elemento com um conjunto grande de código HTML
    output.innerHTML = `
                <h3>Original Array:</h3> ${JSON.stringify(numbers)}<br><br>
                <h3>Map (doubled):</h3> ${JSON.stringify(doubled)}<br><br>
                <h3>Filter (evens only):</h3> ${JSON.stringify(evens)}<br><br>
                <h3>Reduce (sum):</h3> ${sum}
            `;
}

// 5. Objects & JSON
function addStudent() {
    // Obter os valores dos inputs
    const name = document.getElementById('studentName').value;
    const grade = parseFloat(document.getElementById('studentGrade').value);

    // Verificar se os inputs estão preenchidos
    if (!name || isNaN(grade)) {
        alert('Please enter valid name and grade!');
        return;
    }

    // Criar um novo objeto JSON
    const student = {
        id: Date.now(),
        name: name,
        grade: grade,
        passed: grade >= 10 // colocar passed: True caso a nota seja >= 10
    };

    // Adicionar um novo aluno no array
    students.push(student);
    displayStudents();

    // Limpar os inputs
    document.getElementById('studentName').value = '';
    document.getElementById('studentGrade').value = '';
}

function displayStudents() {

    // Obter o output (mensagem) para preencher com informação se necessário
    const output = document.getElementById('studentsOutput');

    // Se não houver alunos, colocar "No students yet"
    if (students.length === 0) {
        output.innerHTML = '<em>No students yet...</em>';
        return; // aqui, se não houver alunos, terminamos a função
    }

    // Calcular a média de todos os alunos
    const avgGrade = students.reduce((acc, s) => acc + s.grade, 0) / students.length;

    // Construir todo o HTML:

    // 1. Colocar um título
    let html = '<h3>Students List:</h3>';

    // 2. Para cada aluno, colocar nome, nota/20, e se passou colocar Passed
    students.forEach(student => {
        html += `
                    📚 <strong>${student.name}</strong>: ${student.grade}/20 
                    ${student.passed ? '✅ Passed' : '❌ Failed'}<br>
                `;
    });

    // 3. No final, colocar a média
    html += `<br><strong>Average Grade:</strong> ${avgGrade.toFixed(2)}`;

    // 4. Colocar o HTML final no elemento obtido anteriormente
    output.innerHTML = html;
}

// 6. Event Handling - Grid
function generateGrid() {
    const container = document.getElementById('gridContainer');

    // Limpar quaisquer itens que existam anteriormente e recomeçar
    container.innerHTML = '';

    // Gerar automaticamente 12 elementos (do 1 ao 12) com a cor inicial resetada
    for (let i = 1; i <= 12; i++) {

        // Demonstração de DOM para criação de elementos:
        
        // 1. Criar um elemento
        const item = document.createElement('div');
        
        // 2. Colocar uma classe
        item.className = 'grid-item';

        // 3. Colocar texto
        item.textContent = `Item ${i}`;

        // 4. Colocar evento (ao clicar, mudar o background)
        // Gerar um background aleatório ao clicar
        item.onclick = function () {
            // ESTA LINHA (ABAIXO) SÓ É EXECUTADA SE CLICAREM NO ELEMENTO!!!
            this.style.background = `hsl(${Math.random() * 360}, 70%, 60%)`;
        };

        // 5. Colocar o item na lista total de elementos
        container.appendChild(item);
    }
}

// Initialize grid on page load
window.addEventListener('load', generateGrid);

// 7. Todo List (CRUD)
function addTodo() {
    const input = document.getElementById('todoInput');
    const text = input.value.trim();

    if (!text) {
        alert('Please enter a task!');
        return;
    }

    const todo = {
        id: Date.now(),
        text: text,
        completed: false
    };

    todos.push(todo);
    input.value = '';
    renderTodos();
}

function toggleTodo(id) {
    const todo = todos.find(t => t.id === id);
    if (todo) {
        todo.completed = !todo.completed;
        renderTodos();
    }
}

function deleteTodo(id) {
    todos = todos.filter(t => t.id !== id);
    renderTodos();
}

function renderTodos() {
    const list = document.getElementById('todoList');
    if (todos.length === 0) {
        list.innerHTML = '<em>No tasks yet. Add one above!</em>';
        return;
    }

    list.innerHTML = '';
    todos.forEach(todo => {
        const li = document.createElement('li');
        li.className = `task-item ${todo.completed ? 'completed' : ''}`;
        li.innerHTML = `
                    <span>${todo.text}</span>
                    <div>
                        <button onclick="toggleTodo(${todo.id})">
                            ${todo.completed ? '↩️ Undo' : '✅ Complete'}
                        </button>
                        <button onclick="deleteTodo(${todo.id})">🗑️ Delete</button>
                    </div>
                `;
        list.appendChild(li);
    });
}

// 8. Async/Await & Fetch API
async function fetchRandomUser() {
    const output = document.getElementById('apiOutput');
    output.innerHTML = '<div class="loading">Loading user data...</div>';

    try {
        const response = await fetch('https://randomuser.me/api/');
        const data = await response.json();
        const user = data.results[0];

        output.innerHTML = `
                    <h3>Random User:</h3>
                    <img src="${user.picture.large}" alt="User" style="border-radius: 50%; margin: 10px 0;">
                    <br><strong>Name:</strong> ${user.name.first} ${user.name.last}
                    <br><strong>Email:</strong> ${user.email}
                    <br><strong>Location:</strong> ${user.location.city}, ${user.location.country}
                    <br><strong>Phone:</strong> ${user.phone}
                `;
    } catch (error) {
        output.innerHTML = `<strong style="color: red;">Error:</strong> ${error.message}`;
    }
}

async function fetchRandomJoke() {
    const output = document.getElementById('apiOutput');
    output.innerHTML = '<div class="loading">Fetching joke...</div>';

    try {
        const response = await fetch('https://official-joke-api.appspot.com/random_joke');
        const joke = await response.json();

        output.innerHTML = `
                    <h3>Random Joke:</h3>
                    <p><strong>Setup:</strong> ${joke.setup}</p>
                    <p><strong>Punchline:</strong> ${joke.punchline}</p>
                    <p><em>Type: ${joke.type}</em></p>
                `;
    } catch (error) {
        output.innerHTML = `<strong style="color: red;">Error:</strong> ${error.message}`;
    }
}

// 9. Progress Bar & Timers
function startProgress() {
    if (progressInterval) return; // Already running

    currentProgress = 0;
    const fill = document.getElementById('progressFill');

    progressInterval = setInterval(() => {
        currentProgress += 1;
        fill.style.width = currentProgress + '%';
        fill.textContent = currentProgress + '%';

        if (currentProgress >= 100) {
            stopProgress();
            alert('Progress Complete! 🎉');
        }
    }, 50);
}

function stopProgress() {
    if (progressInterval) {
        clearInterval(progressInterval);
        progressInterval = null;
    }
}

// 10. Local Storage
function saveToStorage() {
    const key = document.getElementById('storageKey').value;
    const value = document.getElementById('storageValue').value;

    if (!key) {
        alert('Please enter a key!');
        return;
    }

    localStorage.setItem(key, value);
    displayStorage();
}

function loadFromStorage() {
    const key = document.getElementById('storageKey').value;

    if (!key) {
        alert('Please enter a key to load!');
        return;
    }

    const value = localStorage.getItem(key);
    const output = document.getElementById('storageOutput');

    if (value !== null) {
        output.innerHTML = `<strong>Value for "${key}":</strong> ${value}`;
    } else {
        output.innerHTML = `<strong>No value found for key "${key}"</strong>`;
    }
}

function clearStorage() {
    if (confirm('Clear all local storage data?')) {
        localStorage.clear();
        displayStorage();
    }
}

function displayStorage() {
    const output = document.getElementById('storageOutput');
    const keys = Object.keys(localStorage);

    if (keys.length === 0) {
        output.innerHTML = '<em>Local storage is empty</em>';
        return;
    }

    let html = '<h3>Current Storage:</h3>';
    keys.forEach(key => {
        html += `<strong>${key}:</strong> ${localStorage.getItem(key)}<br>`;
    });
    output.innerHTML = html;
}

// Initialize storage display
displayStorage();