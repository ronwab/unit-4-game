$(document).ready(function () {
  var randomNumber = 0;
  var crystal1 = 0;
  var crystal2 = 0;
  var crystal3 = 0;
  var crystal4 = 0;
  var crystalTotal = 0;
  var count2 = 0;
  wins = 0;
  losses = 0;

  function displaycrystalValues() {
    $("#btn1").text(crystal1);
    $("#btn2").text(crystal2);
    $("#btn3").text(crystal3);
    $("#btn4").text(crystal4);
  }

  // reset counters to zero
  // *******need to restart game *****
  function resetGame() {
    $("#btnResetGame").on("click", () => {
      randomNumber = 0;
      crystal1 = 0;
      crystal2 = 0;
      crystal3 = 0;
      crystal4 = 0;
      crystalTotal = 0;

      displaycrystalValues();
      alert("Click to restart game");
    });
  }

  //generate computer number
  function generateRandomNumber() {
    $("#btnPlayGame").on("click", () => {
      randomNumber = Math.round(Math.random() * 101 + 19);
      $("#displayRandomNum").text(randomNumber);
    });
    generateCrytalNumbers();
  }
  generateRandomNumber();

  //generate four random numbers for the four Crytals
  function generateCrytalNumbers() {
    $("#btnPlayGame").on("click", () => {
      crystal1 = Math.round(Math.random() * 12);
      crystal2 = Math.round(Math.random() * 12);
      crystal3 = Math.round(Math.random() * 12);
      crystal4 = Math.round(Math.random() * 12);
      displaycrystalValues();

    });
  }

  //if user clicks crystal add the value and display total value.
  function computeCrystalValues() {
    $("#btn1").click(() => {
      crystalTotal += crystal1;
      if (randomNumber > crystalTotal) {

        $("#displayScore").text(crystalTotal)
      } else if (randomNumber === crystalTotal) {
        win();
      } else {
        loss();
        resetGame();
      }
    });

    $("#btn2").click(() => {
      crystalTotal += crystal2;
      if (randomNumber >= crystalTotal) {
        $("#displayScore").text(crystalTotal)
      } else if (randomNumber === crystalTotal) {
        win();
      } else {
        loss();
        resetGame();
      }
    });

    $("#btn3").click(() => {
      crystalTotal += crystal3;
      if (randomNumber >= crystalTotal) {
        $("#displayScore").text(crystalTotal)
      } else if (randomNumber === crystalTotal) {
        win();
      } else {
        loss();
        resetGame();
      }
    });

    $("#btn4").click(() => {
      crystalTotal += crystal4;
      if (randomNumber >= crystalTotal) {
        $("#displayScore").text(crystalTotal)
      } else if (randomNumber === crystalTotal) {
        win();
      } else {
        loss();
        resetGame();
      }
    });
  }

  function win() {
    alert("You won!");
    wins++;
    $("#numberWins").text(wins);
    resetGame();
  }
  //addes the losses to the userTotal
  function loss() {
    alert("You lose!");
    losses++;
    $("#numberLosses").text(losses);
    resetGame();
  }
  computeCrystalValues();
});