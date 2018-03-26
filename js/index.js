let image = document.querySelector("#principal-image");
let button = document.querySelector("#play");
let game_image = document.querySelector("#image-game");
let title = document.querySelector("#title");
let input = document.querySelector("#input");
let container1 = document.querySelector(".game1");
let container2 = document.querySelector(".game2");
let containerGame = document.querySelector("#container-game");
let levels = document.getElementsByClassName("level-button");
let start_game = document.querySelector("#start");
let title_time = document.querySelector("#title_time");
let time = document.querySelector("#time");
let word_space = document.querySelector("#words");
let total_score = document.querySelector("#total_score");
let life_player = document.querySelectorAll(".skulls");
let loose = document.querySelector("#loose");
let again = document.querySelector("#again");
var score = document.getElementsByClassName("scorest");
let score1 = document.querySelector("#score1");
let score2 = document.querySelector("#score2");
let score3 = document.querySelector("#score3");
let score4 = document.querySelector("#score4");
let score5 = document.querySelector("#score5");
let opens = true;
let valor1 = 0,
    valor2 = 0,
    valor3 = 0,
    valor4 = 0,
    valor5 = 0;
let first = true;
let colors = ["red", "yellow", "lightblue", "orange", "white", "#9A61E5"];
let level_words = [
    ["anacusia", "aduccion", "escorbuto", "isquion", "neuritis", "urticaria", "disnea", "astenia", "beriberi", "afasia"],
    ["estrabismo", "ferropenia", "glucosuria", "hematemesis", "hemoptisis", "hipercapnia", "neningitis", "nasogastrico", "preeclampsia", "rabdomiolisis"],
    ["mixology", "kerfuffle", "bequeath", "flexitarian", "pescatarian", "gobemouche", "ingurgitate", "opsimath", "quacksalver", "snollygoster"],
    ["hullaballoo", "nudiustertian", "impignorate", "discombobulate", "paralelepipedo", "questionnaire", "americanization", "cardiopulmonary", "impenetrability", "gerrymandering"],
    ["whippersnapper", "gobbledygook", "characterization", "lackadaisical", "winklepicker", "esternocleidomastoideo", "electroencephalogram", "accommodation", "nudiustertian", "transcendentalism"]
];
let level = 0,
    complete, score_player, nivel = 0,
    round = 0;
let open = false;
let currentTime = 5;
let word, color_choose;
let tries, actual_life = 2;
window.addEventListener('load', function() {
    container1.classList.remove("game2");
    containerGame.style.display = 'none';
    button.style.display = 'block';
});
for (i = 0; i < 5; i++) {
    score[i].innerHTML = "0";
};

function game() {
    function start() {
        container1.classList.remove("game1");
        container2.classList.add("game2");
        button.style.display = 'none';
        input.placeholder = "Write Here..."
        containerGame.style.display = 'block';
        again.style.display = 'none';
        title_time.style.visibility = 'visible';
        title_time.innerHTML = "Time";
        title_time.style.color = "white";
        nivel = 0;
        level = 0;
        score_player = 0;
        round = 0;
        opens = true;
        complete = 0;
        actual_life = 2;
        tries = 2;;
        currentTime = 10;
        for (i = 0; i < 3; i++) {
            life_player[i].style.visibility = 'visible';
            life_player[i].style.display = 'inline-block';
        }
        init_game()
    }

    function init_game() {
        for (i = 0; i < levels.length; i++) {
            levels[i].disabled = false;
            levels[i].style.transform = "translate(0px)";
        }
        levels[level].style.background = '#FFDDD5';
        levels[level].style.color = 'black';
    }

    function init() {
        input.focus();
        start_game.style.display = 'none';
        input.value="";
        title_time.style.visibility = 'hidden';
        time.addEventListener('animationend', lifes)
  
        words()
    }

    function words() {
        reset_animation();
        time.style.animationDuration = String(currentTime) + "s";
        word = level_words[nivel][Math.floor(Math.random() * 10)];
        color_choose = colors[Math.floor(Math.random() * colors.length)]
        word_space.innerHTML = "[" + word + "]";
        word_space.style.color = color_choose;
    }

    function lifes() {
        if (tries >= 0) {
            life_player[actual_life].style.visibility = 'hidden';
            input.value = "";
            words();
        }
        if ((tries == 0) && (actual_life == 0)) {
            for (i = 0; i < 3; i++) {
                life_player[i].style.display = 'none';
            }
            life_player[actual_life].style.visibility = 'hidden';
            loose.style.display = 'block';
            loose.innerHTML = "Game Over!";
            input.disabled = true;
            again.style.display = 'block';
            reset_animation();
        }
        tries--;
        actual_life -= 1;
    }

    function finish() {
        word_space.innerHTML = "[words]";
        input.disabled = false;
        again.style.display = 'none';
        total_score.innerHTML = "0";
        word_space.style.color = "white";
        start_game.style.display = 'block';
        loose.style.display = 'none';
        input.value = "";
        for (i = 0; i < levels.length; i++) {
            levels[i].style.background = 'white';
            levels[i].style.color = 'black';
        }
        score_table();
        start()
    }

    function score() {
        total_score.innerHTML = score_player;
    }

    function reset_animation() {
        time.style.animation = "none";
        time.offsetHeight;
        time.style.animation = null;
    }

    function win() {
        word_space.innerHTML = "YOU WIN!!!";
        title_time.style.visibility = 'visible';
         title_time.innerHTML="You are the best!"
        input.value = "";
      
        input.placeholder = "Congratulations";
        again.style.display = 'block';
    }

    function check() {
        if ((input.value.toLowerCase() == word) && (opens == true)) {
            score_player += 2 * word.length * (level + 1);
            input.value = "";
            complete++;

            if(complete % 10==0){

              
                if(level<4){

                  level++
                  nivel++;
                  init_game()
                  init()
                
                }else{
                  opens=false;
                }

            }
       if(opens!=false) {

                score();
                words()  
        }else{

            win()
            score()
            time.style.animation = "none";

        }
}

}

    function score_table() {
        if (score_player < parseInt(score4.textContent)) {
            valor5 = parseInt(score5.textContent);
            random()
            score5.innerHTML = score_player;
        }
        if ((score_player < parseInt(score3.textContent)) && (score_player > parseInt(score5.textContent))) {
            valor4 = parseInt(score4.textContent)
            random()
            score4.innerHTML = score_player;
        }
        if ((score_player < parseInt(score2.textContent)) && (score_player > parseInt(score4.textContent))) {
            valor3 = parseInt(score3.textContent)
            random()
            score3.innerHTML = score_player;
        }
        if ((score_player < parseInt(score1.textContent)) && (score_player > parseInt(score3.textContent))) {
            valor2 = parseInt(score2.textContent)
            random()
            score2.innerHTML = score_player;
        }
        if (score_player > parseInt(score2.textContent)) {
            valor1 = parseInt(score1.textContent);
            random()
            score1.innerHTML = score_player;
        }
        valor1 = parseInt(score1.textContent);
        valor2 = parseInt(score2.textContent)
        valor3 = parseInt(score3.textContent)
        valor4 = parseInt(score4.textContent)
        valor5 = parseInt(score5.textContent)
    }

    function random() {
        if ((score_player > parseInt(score4.textContent)) && (score_player < parseInt(score3.textContent))) {
            score4.innerHTML = score_player;
            score5.innerHTML = valor4;
        }
        if ((score_player > parseInt(score3.textContent)) && (score_player < parseInt(score2.textContent))) {
            score3.innerHTML = score_player;
            score4.innerHTML = valor3;
            score5.innerHTML = valor4;
        }
        if ((score_player > parseInt(score2.textContent)) && (score_player < parseInt(score1.textContent))) {
            score2.innerHTML = score_player;
            score3.innerHTML = valor2;
            score4.innerHTML = valor3;
            score5.innerHTML = valor4;
        }
        if (score_player > parseInt(score1.textContent)) {
            score1.innerHTML = score_player;
            score2.innerHTML = valor1;
            score3.innerHTML = valor2;
            score4.innerHTML = valor3;
            score5.innerHTML = valor4;
        }
    }
    button.addEventListener('click', start);
    start_game.addEventListener('click', init)
    input.addEventListener('input', check);
    again.addEventListener('click', finish)
}
game()