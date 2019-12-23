const questions = [
    {
        question: "You like to go out.",
        answer: [1, 2, 3, 4, 5],
    },
    {
        question:"You don't like to socialize.",
        answer: [1, 2, 3, 4, 5],
    },
    {
        question:"You have no trouble keeping conversation.",
        answer: [1, 2, 3, 4, 5],
    },
    {
        question:"You like to talk about your emotions.",
        answer: [1, 2, 3, 4, 5],
    },
    {
        question:"You lead with your heart.",
        answer: [1, 2, 3, 4, 5],
    },




];




function answerMe(){
    let counter = 0;

    for(i = 0; i < questions.length; i++){
        $("jumbotron").text(questions[i].question);
        




    }




}


