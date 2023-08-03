// alert("works");
let buttoncolors=["red", "blue", "green", "yellow"];
var sequence=[];
var usersequence=[];

function getID(c){
    var audio= new Audio("sounds/"+c+".mp3");
    audio.play();
    usersequence.push(c);
    console.log(c);
    var b = document.getElementById(c);
    b.classList.add("pressed");
    setTimeout(() => {
        b.classList.remove("pressed");
      }, 100);
      console.log(usersequence.length)
      if(first==0)
      {
        usersequence=[];
      }
      check(usersequence.length)
  
}


function nextsequence(){
    let randomnumber=Math.floor(Math.random()*4);
    let randomchosencolours= buttoncolors[randomnumber];
    sequence.push(randomchosencolours)
    var xyz= document.getElementById(randomchosencolours)
    xyz.classList.add("pressed");
    setTimeout(() => {
        xyz.classList.remove("pressed");
      }, 100);
      console.log(sequence.length)
    var audio = new Audio("sounds/" + randomchosencolours + ".mp3");
    audio.play();
}

var level=1;
var first=0;
document.onkeydown = function() {
    if(first==0){
    document.body.classList.remove("game-over");
    document.getElementById("level-title").innerHTML="level "+level;
    nextsequence();
    first=1;
    }
}

function check(index){
    if(index==sequence.length)
    {
        for(let ind=0;ind<index;ind++)
        {
            if(usersequence[ind]==sequence[ind])
            {
                if(ind==index-1){
                    if(usersequence[index-1]==sequence[index-1])
                    {
                        level=level+1;
                        usersequence=[];
                        document.getElementById("level-title").innerHTML="level "+level;
                        setTimeout(function () {
                                        nextsequence();
                                    }, 1000);
                    }
                    else{
                        return gameover();
                    }
                }
                else
                {
                    continue;
                }

            }
            else{
                return gameover();
            }

        }
    }
}
function gameover(){
    document.body.classList.add("game-over");
    var audio = new Audio("sounds/wrong.mp3");
    audio.play();
    usersequence=[];
    sequence=[];
    level=1;
    document.getElementById("level-title").innerHTML="Press any key to restart";
    first=0;
}
    