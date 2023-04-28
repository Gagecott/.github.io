

var date = new Date();
	document.getElementById("date").innerHTML = "The time is currently: " + date;

function userinput() {
    let userName = document.querySelector("#userName");
    let userMood = document.querySelector("#userMood");
    let greeting = document.querySelector("#greeting");

    greeting.innerHTML = "Hello " + userName.value + "! Welcome to the company page. We're glad you're " + userMood.value;
    
}

function goofyword() {
    let goofywords = ["Meow :)", "Hullaballoo", "Bamboozle", "You execution will be in three days.", "Erm.... what the scallop...."];
    let wordDiv = document.getElementById("word");
    wordDiv.innerHTML = goofywords [Math.floor(  Math.random() * goofywords.length ) ];
}
let counts=0;
function sillycount() {
        counts += 1;
        document.getElementById("counts").innerHTML = counts;
        }

        function kittyWord() {
            let catSpeak = document.querySelector("#catSpeak");
            let catWord= document.querySelector("#catWord")
        
            catWord.innerHTML= "| " + catSpeak.value + " |";
            
        }

        var i = 0;
        var yesTxt = "THE CAT IS BEING FORMED. ^( ^.^ )^ BEWARE."; /* The text */
        var speed = 50;
        function yesCool() {
            if (i <yesTxt.length) {
                document.getElementById("yesPlease").innerHTML += yesTxt.charAt(i);
                i++;
                setTimeout(yesCool,speed);
            }
            document.getElementById("yesButton")
                    .style.display = "none";
        }

        function noCool() {
            document.getElementById("noPlease")
                    .style.display = "block";
 
            document.getElementById("noButton")
                    .style.display = "none";
        }

