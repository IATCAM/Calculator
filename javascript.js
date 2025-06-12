
(function () {
  
  let screen = document.querySelector(".screen");
  let buttons = document.querySelectorAll(".btn");
  let clear = document.querySelector(".btn-clear");
  let equal = document.querySelector(".btn-equal");

  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      let value = e.target.dataset.num;
      screen.value += value;
    });
  });

  equal.addEventListener("click", (e) => {
    if (screen.value == "") {
      screen.value = "please enter a number";
    }
    else{
      if (/^[0-9+\-*/().]+$/.test(screen.value)){ 
        let answer = eval(screen.value);
        screen.value = answer;
      } 
      else{
        screen.value = "Invalid...";
      }
    }
  });

  clear.addEventListener("click", (e) => {
    screen.value = "";
  });

})();
