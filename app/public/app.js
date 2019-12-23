let counter = 0;
let name;
let photo;

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
    if ( counter >= 5){
        $(".quest").empty();
        $(".btn").remove();
        return;
    }

    $(".quest").text(questions[counter].question);



    $("#submit").on("click", function(){
        console.log(`SUBMIT ACTIVATED`);
        counter++;


        let answer = $(".active").val();


        $("#submit").off("click");
        answerMe();
    });





}


function apply(){

    $("#submit0").on("click", function(){
        name = $("#name").val();
        photo = $("#link").val();



        window.location.replace("./survey.html");

        $("#submit0").off("click");
        
    });


}






















$(".but").on("click", function(){
    event.preventDefault();
    $(".but").removeClass("active");
    
    $(this).toggleClass("active");
    



});






apply();
answerMe();














