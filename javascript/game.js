$(document).ready(function () {
  var randomNumber
  var crystal1
  var crystal2
  var crystal3
  var crystal4
  var crystalTotal = 0

  wins = 0;
  losses = 0;

  function resetGame() {

    // randomNumber = 0;
    crystal1 = 0;
    crystal2 = 0;
    crystal3 = 0;
    crystal4 = 0;
    crystalTotal = 0;

    $("#displayScore").text(crystalTotal)

  }


  $("#btnPlayGame").on("click", generateRandomNumber);

  function generateRandomNumber() {

    randomNumber = Math.round(Math.random() * 101 + 19);

    $("#displayRandomNum").text(randomNumber);

    generateCrytalNumbers();
  }
  generateRandomNumber();

  //generate four random numbers for the four Crytals
  function generateCrytalNumbers() {

    crystal1 = Math.round(Math.random() * 12);
    crystal2 = Math.round(Math.random() * 12);
    crystal3 = Math.round(Math.random() * 12);
    crystal4 = Math.round(Math.random() * 12);


  }


  $("#btn1").click(() => {
    console.log(crystal1)
    crystalTotal += crystal1;
    if (randomNumber > crystalTotal) {
      $("#displayScore").text(crystalTotal)
    } else if (randomNumber === crystalTotal) {
      win();

    } else {

      loss()
    }
    // else if (randomNumber < crystalTotal) {
    //   loss();

    // }
  });

  $("#btn2").click(() => {
    crystalTotal += crystal2;
    if (randomNumber >= crystalTotal) {
      $("#displayScore").text(crystalTotal)
    } else if (randomNumber === crystalTotal) {
      win();
    } else {

      loss()
    }
  });

  $("#btn3").click(() => {
    crystalTotal += crystal3;
    if (randomNumber >= crystalTotal) {
      $("#displayScore").text(crystalTotal)
    } else if (randomNumber === crystalTotal) {
      win();
    } else {

      loss()
    }
  });

  $("#btn4").click(() => {
    crystalTotal += crystal4;
    if (randomNumber >= crystalTotal) {
      $("#displayScore").text(crystalTotal)
    } else if (randomNumber === crystalTotal) {
      win();
    } else {

      loss()
    }
  });


  function win() {
    alert("You won!");
    wins++;
    $("#numberWins").text(wins);
    resetGame();
    generateRandomNumber()
  }

  function loss() {
    alert("You lose!");
    losses++;
    $("#numberLosses").text(losses);
    resetGame();
    generateRandomNumber()
  }


});