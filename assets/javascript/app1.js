var questions = [{
    question: "What was Mario from the Mario Bros. series original name?",
    choices: ["Mario", "Jumpman", "Luigi", "Jerry"],
    validAnswer: 1
  }, {
    question: "Who is the main protagonist (player controlled) in the Legend of Zelda series?",
    choices: ["Ganon", "Tingle", "Link", "Zelda"],
    validAnswer: 2
  }, {
    question: "Who was the secret fighter in the original Mortal Kombat?",
    choices: ["Goro", "Smoke", "Your Mom", "Reptile"],
    validAnswer: 3
  }, {
    question: "Metroid Prime is what kind of game genre?",
    choices: ["First Person Shooter", "Platformer", "Simulation", "Strategy"],
    validAnswer: 0
  }, {
    question: "What is the name of the lead character from Earthbound?",
    choices: ["Ninten", "Ness", "Jeff", "Paula"],
    validAnswer: 1
}];

var count = 60;
var currentquestion = 0;
var correctAnswers = 0;

function gameSetup() {
$('#question').html(parseInt(currentquestion) + 1 + ". " + questions[currentquestion].question);
var options = questions[currentquestion].choices;
var formHtml = '';
for (var i = 0; i < options.length; i++) {
  formHtml += '<div><input type="radio" name="option" value="' + i + '" id="option' + i + '"><label for="option' + i + '">' +
    questions[currentquestion].choices[i] + '</label></div><br/>';
}

$('#form').html(formHtml);
$("#option0").prop('checked', true);
};

function checkAns() {
if ($("input[name=option]:checked").val() == questions[currentquestion].validAnswer) {
  correctAnswers++;
};
};

$(document).ready(function() {

$(".jumbotron").hide();
$('#start').click(function() {
  $(".jumbotron").fadeIn();
  $(this).hide();
 
  });

gameSetup();

$("#next").click(function() {
  event.preventDefault();
  checkAns();
  currentquestion++;

  if (currentquestion < questions.length) {
    gameSetup();
    if (currentquestion === questions.length - 1) {
      $('#next').html("Submit");
      $('#next').click(function() {
        $(".jumbotron").hide();
        $("#results").html("You correctly answered " + correctAnswers + " out of " + currentquestion + " questions! ").show();
      });
    };
  };
});
});
