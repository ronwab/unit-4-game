$(document).ready(function() {
  var randomNumber = 0;
  var crystal1 = 0;
  var crystal2 = 0;
  var crystal3 = 0;
  var crystal4 = 0;
  var crystalTotal = 0;

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
      crystal1 = Math.round(Math.random() * 101 + 19);
      crystal2 = Math.round(Math.random() * 101 + 19);
      crystal3 = Math.round(Math.random() * 101 + 19);
      crystal4 = Math.round(Math.random() * 101 + 19);

      displaycrystalValues();
    });
  }

  //if user clicks crystal add the value and display total value.
  function computeCrystalValues() {
    if(crystalTotal <randomNumber) {
      var clickcrystal1 = $("#btn1").on("click", e => {
        var count1 = parseInt(e.target.textContent);
  
        console.log(count1);
      }); ||
      var clickcrystal2 = $("#btn2").on("click", e => {
        var count2 = parseInt(e.target.textContent);
  
        console.log(count2);
      });
      var clickcrystal3 = $("#btn3").on("click", e => {
        var count3 = parseInt(e.target.textContent);
  
        console.log(count3);
      });
      var clickcrystal4 = $("#btn4").on("click", e => {
        var count4 = parseInt(e.target.textContent);
  
        console.log(count4);
      });
    }
    

    // if(clickcrystal1 || clickcrystal2 || clickcrystal3 || clickcrystal4){
    //   count
    // }
  }
  computeCrystalValues();
});
