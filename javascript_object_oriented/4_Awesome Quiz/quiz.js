function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.currentQuestionIndex = 0;
}

Quiz.prototype.getCurrentQuestion = function() {
    return this.questions[this.currentQuestionIndex];
}

Quiz.prototype.gues = function() {
    if(this.getCurrentQuestion().isCorrectAnswer) {
           this.score ++;
    }
    this.currentQuestionIndex++;
}

Quiz.prototype.hasEnded = function() {
    return this.currentQuestionIndex >= this.questions.length;
       
}