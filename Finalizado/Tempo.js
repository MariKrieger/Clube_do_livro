let timerInterval; 
let totalTime = 0; 
let isPaused = false; 


const hoursDisplay = document.getElementById("hours");
const minutesDisplay = document.getElementById("minutes");
const secondsDisplay = document.getElementById("seconds");
const historyList = document.getElementById("historyList");


document.getElementById('startButton').addEventListener('click', startTimer);
document.getElementById('pauseButton').addEventListener('click', pauseTimer);
document.getElementById('stopButton').addEventListener('click', stopTimer);
document.getElementById('saveButton').addEventListener('click', saveHistory);

function startTimer() {
    if (isPaused) {
        
        isPaused = false;
        timerInterval = setInterval(() => {
            totalTime++;
            updateDisplay();
        }, 1000);
    } else {
        
        totalTime = 0; 
        timerInterval = setInterval(() => {
            totalTime++;
            updateDisplay();
        }, 1000);
    }
}

function pauseTimer() {
    clearInterval(timerInterval); 
    isPaused = true; 
}

function stopTimer() {
    clearInterval(timerInterval); 
    totalTime = 0; 
    updateDisplay(); 
    isPaused = false; 
}

function updateDisplay() {
    const hours = Math.floor(totalTime / 3600);
    const minutes = Math.floor((totalTime % 3600) / 60);
    const seconds = totalTime % 60;

    hoursDisplay.innerHTML = hours.toString().padStart(2, '0');
    minutesDisplay.innerHTML = minutes.toString().padStart(2, '0');
    secondsDisplay.innerHTML = seconds.toString().padStart(2, '0');
}

function saveHistory() {
    const bookTitle = document.getElementById("bookTitle").value;
    const pagesRead = document.getElementById("pagesRead").value;
    const comments = document.getElementById("comments").value;

    if (bookTitle && pagesRead) {
        const historyEntry = document.createElement("li");
        historyEntry.textContent = `Livro: ${bookTitle}, Páginas Lidas: ${pagesRead}, Tempo: ${hoursDisplay.innerHTML}:${minutesDisplay.innerHTML}:${secondsDisplay.innerHTML}, Comentários: ${comments}`;
        
        historyList.appendChild(historyEntry);

        
        document.getElementById("bookTitle").value = '';
        document.getElementById("pagesRead").value = '';
        document.getElementById("comments").value = '';
        
        
        stopTimer();
    } else {
        alert("Por favor, preencha todos os campos obrigatórios.");
    }
}