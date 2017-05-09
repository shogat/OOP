function Question(theQuestion, theChoices, theCorrectAnswer) {
    // Initialize the instance properties​
    this.question = theQuestion;
    this.choices = theChoices;
    this.correctAnswer = theCorrectAnswer;
    this.userAnswer = "";
    };
Question.prototype.getCorrectAnswer = function () {
    return  this.correctAnswer;
};
​
Question.prototype.getUserAnswer = function () {
    return this.userAnswer;
};
​
Question.prototype.displayQuestion = function () {
    var questionToDisplay =this.question;
    console.log (questionToDisplay);
}; 

function DragDropQuestion(theQuestion, theChoices, theCorrectAnswer) {
    Question.call(this, theQuestion, theChoices, theCorrectAnswer);
}
​// inherit the methods and properties from Question​
​inheritPrototype(DragDropQuestion, Question);
// Override the displayQuestion method it inherited​
DragDropQuestion.prototype.displayQuestion = function () {
    // Just return the question. Drag and Drop implementation detail is beyond this article​
    console.log(this.question);
};