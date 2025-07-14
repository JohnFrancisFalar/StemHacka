window.techEasy = [
  {
    question: 'What does "www" stand for?',
    choices: ['Web Wireless World', 'Wide Web World', 'World Wide Web', 'World Web Window'],
    answer: 'World Wide Web'
  },
  {
    question: 'Which device displays the output of a computer?',
    choices: ['CPU', 'Mouse', 'Monitor', 'Keyboard'],
    answer: 'Monitor'
  },
  {
    question: 'What symbol is commonly used for email?',
    choices: ['#', '%', '@', '&'],
    answer: '@'
  },
  {
    question: 'What does a keyboard help you do?',
    choices: ['Listen', 'See', 'Type', 'Print'],
    answer: 'Type'
  },
  {
    question: 'What kind of device is a smartphone?',
    choices: ['Input', 'Smart', 'Output', 'Scanner'],
    answer: 'Input'
  },
  {
    question: 'What is the use of a printer?',
    choices: ['Type text', 'Scan papers', 'Print documents', 'Surf the internet'],
    answer: 'Print documents'
  },
  {
    question: 'What is the brain of the computer?',
    choices: ['Monitor', 'CPU', 'RAM', 'Hard drive'],
    answer: 'CPU'
  },
  {
    question: 'What part moves the cursor on screen?',
    choices: ['Keyboard', 'Monitor', 'Scanner', 'Mouse'],
    answer: 'Mouse'
  },
  {
    question: 'Which file format is used for pictures?',
    choices: ['.doc', '.mp3', '.jpg', '.txt'],
    answer: '.jpg'
  },
  {
    question: 'What does Wi-Fi help you connect to?',
    choices: ['Bluetooth', 'Internet', 'Scanner', 'Printer'],
    answer: 'Internet'
  }
];

window.techMedium = [
  {
    question: 'What does CPU stand for?',
    choices: ['Central Power Unit', 'Central Processing Unit', 'Computer Personal Unit', 'Core Processor Utility'],
    answer: 'Central Processing Unit'
  },
  {
    question: 'Which key is used to refresh a web page?',
    choices: ['F1', 'F5', 'F11', 'F9'],
    answer: 'F5'
  },
  {
    question: 'What type of storage is a USB flash drive?',
    choices: ['Optical', 'Magnetic', 'Solid-State', 'Mechanical'],
    answer: 'Solid-State'
  },
  {
    question: 'Which company developed the Windows operating system?',
    choices: ['Apple', 'Microsoft', 'IBM', 'Google'],
    answer: 'Microsoft'
  },
  {
    question: 'What is the main purpose of an antivirus software?',
    choices: ['Speed up the computer', 'Scan documents', 'Block ads', 'Protect from malware'],
    answer: 'Protect from malware'
  },
  {
    question: 'What does HTML stand for?',
    choices: ['Hyper Trainer Marking Language', 'Hyper Text Markup Language', 'Home Tool Markup Language', 'Hyperlinks and Text Mark Language'],
    answer: 'Hyper Text Markup Language'
  },
  {
    question: 'Which component stores long-term data on a computer?',
    choices: ['RAM', 'Motherboard', 'Hard Drive', 'GPU'],
    answer: 'Hard Drive'
  },
  {
    question: 'What is a computer virus?',
    choices: ['A physical defect', 'A heat issue', 'A malicious software program', 'A type of hard drive'],
    answer: 'A malicious software program'
  },
  {
    question: 'Which part of a website URL identifies the type of organization?',
    choices: ['Subdomain', 'File path', 'Top-level domain (TLD)', 'IP address'],
    answer: 'Top-level domain (TLD)'
  },
  {
    question: 'Which shortcut key is used to copy selected text?',
    choices: ['Ctrl + C', 'Ctrl + V', 'Ctrl + X', 'Ctrl + Z'],
    answer: 'Ctrl + C'
  }
];


window.techHard = [
  {
    question: 'Which programming language is known for its snake logo?',
    choices: ['Java', 'Python', 'C++', 'HTML'],
    answer: 'Python'
  },
  {
    question: 'What does “HTTP” stand for?',
    choices: ['HyperText Transfer Protocol', 'HyperText Transmission Port', 'High Transfer Text Protocol', 'HyperTool Text Program'],
    answer: 'HyperText Transfer Protocol'
  },
  {
    question: 'What is the main function of a GPU?',
    choices: ['Process sound', 'Store files', 'Render graphics', 'Connect networks'],
    answer: 'Render graphics'
  },
  {
    question: 'What is the brain of a smartphone called?',
    choices: ['Battery', 'Motherboard', 'Processor', 'Sensor'],
    answer: 'Processor'
  },
  {
    question: 'Which device allows wireless internet connection?',
    choices: ['Router', 'CPU', 'Monitor', 'Switch'],
    answer: 'Router'
  },
  {
    question: 'Which is NOT a type of software?',
    choices: ['Operating system', 'Browser', 'Keyboard', 'Antivirus'],
    answer: 'Keyboard'
  },
  {
    question: 'What does “URL” stand for?',
    choices: ['Universal Resource Locator', 'Uniform Resource Locator', 'United Reference Line', 'User Resource Link'],
    answer: 'Uniform Resource Locator'
  },
  {
    question: 'Which company developed the Android operating system?',
    choices: ['Microsoft', 'Apple', 'Google', 'IBM'],
    answer: 'Google'
  },
  {
    question: 'What kind of memory is non-volatile?',
    choices: ['RAM', 'ROM', 'Cache', 'Registers'],
    answer: 'ROM'
  },
  {
    question: 'What does Ctrl + Z do in most programs?',
    choices: ['Redo', 'Zoom', 'Undo', 'Copy'],
    answer: 'Undo'
  }
];

// Read difficulty from URL
const params = new URLSearchParams(window.location.search);
const difficulty = params.get('difficulty');

let currentQuestions = [];
let currentIndex = 0;
let score = 0;

// Load questions based on difficulty
if (difficulty === 'easy') {
  currentQuestions = window.techEasy;
} else if (difficulty === 'medium') {
  currentQuestions = window.techMedium;
} else if (difficulty === 'hard') {
  currentQuestions = window.techHard;
} else {
  alert('Invalid or missing difficulty!');
}

const modal = document.getElementById('quiz-modal');
const questionText = document.getElementById('question-text');
const choicesBox = document.getElementById('choices');
const nextBtn = document.getElementById('next-btn');

if (currentQuestions.length > 0) {
  modal.style.display = 'flex';
  showQuestion();
}

function showQuestion() {
  const q = currentQuestions[currentIndex];
  questionText.textContent = `${currentIndex + 1}. ${q.question}`;
  choicesBox.innerHTML = '';

  q.choices.forEach(choice => {
    const btn = document.createElement('button');
    btn.textContent = choice;
    btn.className = 'choice-btn';
    btn.onclick = () => selectAnswer(btn, q.answer);
    choicesBox.appendChild(btn);
  });
}

function selectAnswer(selectedBtn, correctAnswer) {
  const allBtns = document.querySelectorAll('.choice-btn');
  allBtns.forEach(btn => btn.disabled = true);

  if (selectedBtn.textContent === correctAnswer) {
    selectedBtn.style.backgroundColor = 'green';
    score++;
  } else {
    selectedBtn.style.backgroundColor = 'red';
    allBtns.forEach(btn => {
      if (btn.textContent === correctAnswer) {
        btn.style.backgroundColor = 'green';
      }
    });
  }
}

nextBtn.onclick = () => {
  currentIndex++;
  if (currentIndex < currentQuestions.length) {
    showQuestion();
  } else {
    questionText.textContent = `🎉 Quiz Complete! Score: ${score} / ${currentQuestions.length}`;
    choicesBox.innerHTML = '';
    nextBtn.style.display = 'none';
  }
};
