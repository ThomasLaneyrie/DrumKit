function play(){

  // Code qui joue quand on appuie sur une touche
  document.addEventListener("keydown", playOneKey);

  function playOneKey(e) {
    let name = e.key;
    let buttonToPlay = document.querySelector("#button" + name);
    let soundToPlay = document.querySelector("#sound" + name);
    if (/[asdfghjkl]/.exec(name)) {
      buttonToPlay.classList.add("playing");
      soundToPlay.currentTime = 0;
      soundToPlay.play();
    } else console.log("C'est pas une touche de clavier gros nigo");
  }

  // Code qui annule l'animation après qu'on ai joué la touche
  buttons = document.querySelectorAll(".bouton");
  
  for (let button = 0; button <= buttons.length-1; button++){
    let buttonToUnplay = buttons[button];
    buttonToUnplay.addEventListener("transitionend", unplayOneKey);

    function unplayOneKey() {
      buttonToUnplay.classList.remove("playing");
    }
  }
}
play();