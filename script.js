let tg = window.Telegram.WebApp;
let theory = document.getElementById("calctheory");
let practice = document.getElementById("calcpract");
let test = document.getElementById("calctest");
let snake = document.getElementById("calcgame");
let text = ["test", "test2"]
let theorycont = document.getElementById("theorycont")
let theorytext = document.getElementById("theorytext")
let theorycounter = 0;
let theorytextdefault = 'Добро пожаловать в теоретический раздел!';


//обработчик на теоретическую часть
theory.addEventListener("click", () => {
  document.getElementById("main").style.display = "none";
  document.getElementById("theorypart").style.display = "block";
});

//обработчик на кнопку дале
theorycont.addEventListener("click", () => {
    if (theorycounter > text.length - 1){
      document.getElementById("main").style.display = "block";
      document.getElementById("theorypart").style.display = "none";
      theorycounter = 0;
      theorytext.textContent = theorytextdefault;
    } else {  
    theorytext.textContent = text[theorycounter];
    theorycounter += 1;
    }
});
