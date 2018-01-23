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
  }, {
    question: "Nintendo broke off an agreement with Sony while developing project which led to the creation of the Sony Playstation?",
    choices: ["True", "False"],
    validAnswer: 0
  }, {
    question: "How rich is Valve?",
    choices: ["They're broke", "They have enough money to end world hunger", "eh, I've seen richer"],
    validAnswer: 1
  }, {
    question: "Where did Shigeru Miyamoto's inspiration come from when creating The Legend of Zelda",
    choices: ["movies", "fairytales", "exploring as a child", "drugs"],
    validAnswer: 2
  }, {
    question: "What was the term coined for Sonic the Hedgehog's game engine to explain the high speeds found in the game?",
    choices: ["fast processing", "quick processing", "blitz processing", "blast processing"],
    validAnswer: 3
  }, {
    question: "Is Pokemon morally messed up?",
    choices: ["yes", "no, nothing wrong with sending unsupervised children out into the world to make animals fight."],
    validAnswer: 1
}];


var currentquestion = 0;
var correctAnswers = 0;

function gameSetup() {
$('#question').html(parseInt(currentquestion) + 1 + ". " + questions[currentquestion].question);
var options = questions[currentquestion].choices;
var layout = '';
for (var i = 0; i < options.length; i++) {
  layout += '<div><input type="radio" name="option" value="' + i + '" id="option' + i + '"><label for="option' + i + '">' +
    questions[currentquestion].choices[i] + '</label></div><br/>';
}

$('#form').html(layout);
$("#option0").prop('checked', true);
};

function checkAns() {
if ($("input[name=option]:checked").val() == questions[currentquestion].validAnswer) {
  correctAnswers++;
};
};

$(document).ready(function() {

var count = 60;

$(".jumbotron").hide();
$('#start').click(function() {
  $(".jumbotron").fadeIn();
  $(this).hide();

clock = setInterval(timer, 1000);

function timer() {
  count--;
  if (count <= 0) {
    clearInterval(clock);
    return;
  }
  $("#Timer").html("Time Left: " + count);
}

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
        $("#results").html("You correctly answered " + correctAnswers + " out of " + currentquestion + " ! ").show();
      });
    };
  };
});
});
