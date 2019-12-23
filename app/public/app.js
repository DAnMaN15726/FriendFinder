let counter = 0;
let name;
let photo;
let answerArray = [];
let matchName;
let matchPhoto;

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
    let active;
    if ( counter >= 5){
        $(".quest").empty();
        $(".btn").remove();
        compare();
        return;
    }

    $(".quest").text(questions[counter].question);



    $(".btn").on("click", function(){
        active = $(this).val;
        console.log(active);

    });



    $("#submit").on("click", function(){
        console.log(`SUBMIT ACTIVATED`);
        counter++;

        
        console.log(active);
        answerArray.push(active);



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





        $.ajax({ url: "/api/friends", method: "POST" }).then(function() {
            people.push(name);



          });
        
    });


}



function compare(){
    let total = 0;
    let arrayScore = [];
    console.log(answerArray[1]);

    $.ajax({
        type: "GET",
        dataType: "json",
        url: "/api/friends",
        data: {
            object: people
        },
        success: function(data){
            for( i = 0; i < data.length; i++){



                for( y = 0; y < answerArray.length; y++){
                    let x = answerArray[y] - data[i].scores[y];
                    total += Math.abs(x);
            
            
            
                }
                arrayScore.push(total);
                




            }
            let minimum = Math.min(...arrayScore);
            for (z = 0; z < arrayScore.length; z++){
                if(minimum === arrayScore[z]){
                    
                    matchName = data[z].name;
                    matchPhoto = data[z].photo;

                    $(".quest").text(`Say Hello To Your Match! \n ${matchName}`);

                    // $(".quest").append(matchPhoto);



                }





            }










        }
    });








}






















$(".but").on("click", function(){
    event.preventDefault();
    $(".but").removeClass("active");
    
    $(this).toggleClass("active");
    



});






apply();
answerMe();














