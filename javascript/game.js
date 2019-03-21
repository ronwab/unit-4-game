$(document).ready(function() {
  var randomNumber = 0;
  var crystal1 = 0;
  var crystal2 = 0;
  var crystal3 = 0;
  var crystal4 = 0;
  var crystalTotal = 0;
  var count2 = 0;

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
  resetGame();

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
      console.log(typeof crystal1); //to check that it is a number.
    });
  }

  //if user clicks crystal add the value and display total value.
  function computeCrystalValues() {
    $("#btn1").click(() => {
      if (randomNumber > crystalTotal) {
        crystalTotal += crystal1;
        console.log(crystalTotal);
      } else if ((randomNumber = crystalTotal)) {
        console.log("You Win!");
      } else {
        console.log("YOU LOSE");
      }
    });

    $("#btn2").click(() => {
      // crystal2 = parseInt(e.target.textContent);

      if (randomNumber >= crystalTotal) {
        crystalTotal += crystal2;
        console.log(crystalTotal);
      } else {
        console.log("YOU LOSE");
      }
    });

    $("#btn3").click(() => {
      // crystal3 = parseInt(e.target.textContent);

      if (randomNumber >= crystalTotal) {
        crystalTotal += crystal3;
        console.log(crystalTotal);
      } else {
        console.log("YOU LOSE");
      }
    });

    $("#btn4").click(() => {
      // crystal4 = parseInt(e.target.textContent);

      if (randomNumber >= crystalTotal) {
        crystalTotal += crystal4;
        console.log(crystalTotal);
      } else {
        console.log("YOU LOSE");
      }
    });
  }
  computeCrystalValues();
});
