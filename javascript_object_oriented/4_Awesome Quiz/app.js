var questions = [
    new Question("Who was the first president of the United States", ["George Washington", "Thomas Jefferson"], "George Washington"), 
    new Question("What is the answer to the Ultimate  Question of Life, the Universe, and Everything", ["PI", "42"], 42)
];

var createQuiz = new Quiz(questions);

QuizUI.displayNext();