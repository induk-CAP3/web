async function loadQuizzes() {
    try {
        const response = await fetch('quiz.json');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error loading quizzes:', error);
    }
}

async function initQuiz(quizCategory) {
    try {
        const quizSet = await loadQuizzes(); // loadQuizzes 함수를 호출하여 퀴즈 데이터를 가져옵니다.
        if (quizSet) {
            const categoryQuizSet = quizSet[quizCategory]; // 선택한 카테고리의 퀴즈 세트를 가져옵니다.
            loadQuizSet(categoryQuizSet); // 가져온 퀴즈 세트를 로드하는 함수를 호출합니다.
        } else {
            console.error('Quiz set not found for category:', quizCategory);
        }
    } catch (error) {
        console.error('Error initializing quiz:', error);
    }
}

function loadQuizSet(quizSet) {
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = '';

    quizSet.forEach(quiz => {
        const questionElement = document.createElement('div');
        questionElement.className = 'quiz-question';
        questionElement.textContent = quiz.question;

        const buttonTrue = document.createElement('button');
        buttonTrue.textContent = 'O';
        buttonTrue.onclick = () => alert(quiz.correct ? "정답입니다!" : "틀렸습니다.");

        const buttonFalse = document.createElement('button');
        buttonFalse.textContent = 'X';
        buttonFalse.onclick = () => alert(!quiz.correct ? "정답입니다!" : "틀렸습니다.");

        quizContainer.appendChild(questionElement);
        quizContainer.appendChild(buttonTrue);
        quizContainer.appendChild(buttonFalse);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initQuiz('burn'); // 예시로 'burn' 카테고리의 퀴즈를 초기화합니다. 다른 카테고리로 변경 가능합니다.
});
