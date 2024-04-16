document.addEventListener('DOMContentLoaded', function() {
    const quizForm = document.getElementById('quiz-form');
    const quizFeedback = document.getElementById('quiz-feedback');

    quizForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // 각 문제의 정답을 객체에 저장합니다.
        const correctAnswers = {
            question1: 'O',
            question2: 'X',
            question3: 'O',
            question4: 'X',
            question5: 'O'
        };

        // 사용자가 선택한 답변을 가져옵니다.
        const userAnswers = {
            question1: document.querySelector('input[name="question1"]:checked').value,
            question2: document.querySelector('input[name="question2"]:checked').value,
            question3: document.querySelector('input[name="question3"]:checked').value,
            question4: document.querySelector('input[name="question4"]:checked').value,
            question5: document.querySelector('input[name="question5"]:checked').value
        };

        // 채점 결과를 초기화합니다.
        let score = 0;

        // 각 문제에 대한 채점을 진행합니다.
        for (const question in correctAnswers) {
            if (userAnswers[question] === correctAnswers[question]) {
                score++;
            }
        }

        // 채점 결과를 출력합니다.
        quizFeedback.innerHTML = `총 ${Object.keys(correctAnswers).length}문제 중 ${score}문제를 맞췄습니다.`;
    });
});
