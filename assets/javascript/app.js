
var timerNumber = 30;
var timerInterval;
var correctAnswers = 0;
var incorrectAnswers = 0;
var answer1 = "";
var answer2 = "";
var answer3 = "";
var answer4 = "";

var answers = [];
var answerKey = ["Lone Peak", "Broads Fork", "A.F. Twin Peaks", "Maybird Gulch"];


$("#startButton").on("click", start);



function start() {
    $("#startButton").hide();
    $(".timer").html("<h4>" + timerNumber + " seconds</h4>");

    clearInterval(timerInterval);
    timerInterval = setInterval(countDown, 1000);

    $(".row").show();
    $(".timerText").show();
    $(".hr").show();

    questionFunctional();

}

function checkAnswers() {
    for (i = 0; i < answerKey.length; i++) {
        if(answers[i] === answerKey[i]) {
            correctAnswers++
        } else {
            incorrectAnswers++
        }
    }
}

function countDown() {
    timerNumber--;
    $(".timer").html("<h4>" + timerNumber + " seconds</h4>");

    if (timerNumber <= 10) {
        $(".timer").css("color", "red");
    }
    if (timerNumber === 1) {
        $(".timer").html("<h4>" + timerNumber + " second</h4>");
    }
    if (timerNumber === 0) {
        stop();
        $(".timer").html("<h4>TIME UP</h4>");
        buildAnswersArray();
        disableButtons();
        checkAnswers();
        results(); console.log("number correct: " + correctAnswers);
    }
}

function questionFunctional() {
    //  QUESTION 1
    $(".q1Button").on("click", function () {
        $(".q1Button").removeClass("btn-success");
        $(this).addClass("btn-success");
        answer1 = this.value; console.log("you chose " + answer1);
    });
    // QUESTION 2
    $(".q2Button").on("click", function () {
        $(".q2Button").removeClass("btn-success");
        $(this).addClass("btn-success");
        answer2 = this.value; console.log("you chose " + answer2);
    });
     //  QUESTION 3
     $(".q3Button").on("click", function () {
        $(".q3Button").removeClass("btn-success");
        $(this).addClass("btn-success");
        answer3 = this.value; console.log("you chose " + answer3);
    });
    // QUESTION 4
    $(".q4Button").on("click", function () {
        $(".q4Button").removeClass("btn-success");
        $(this).addClass("btn-success");
        answer4 = this.value; console.log("you chose " + answer4);
    });
}

function buildAnswersArray() {
    answers.push(answer1);
    answers.push(answer2);
    answers.push(answer3);
    answers.push(answer4);
}

function stop() {
    clearInterval(timerInterval);
}

function disableButtons() {
    $(".q1Button").off("click");
    $(".q2Button").off("click");
    $(".q3Button").off("click");
    $(".q4Button").off("click");
    
}

function results() {
    $("#results").show();
    $("#results").append("<h3>Correct Responses: " + correctAnswers + "</h3>");
    $("#results").append("<h3>Incorrect Responses: " + incorrectAnswers + "</h3>");
    initialState();
    $("#tryAgain").show();
    $("#tryAgain").on("click", function() {
       tryAgain();
    })
}

function initialState() {
    $(".row").hide();
    $(".timerText").hide();
    $(".hr").hide();
    $("#tryAgain").hide();
}

function tryAgain() {
    initialState();
    timerNumber = 30;
    correctAnswers = 0;
    incorrectAnswers = 0;
    $("#results").html("");
    $("#results").hide();
    $(".timer").css("color", "white");
    start();
}

initialState();







