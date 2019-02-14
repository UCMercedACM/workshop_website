var x;
var expando;
var i = 0;  //increase percentage
var y;
var color = "";     //will define color of skill
var skillLevel;     //will define skill percentage of skill
//WILL CALL EXPANDOF EVERY 11 UNTIL PERCENTAGE IS 100%
export function expand(skill){
    i = 0;              //make sure i is always zero
    clearInterval(x);   //clear previous interval if conflicts exist
    y = document.getElementById("skillBox");
    y.style.width= '1%';
    //series of if statements to check color and percentage
    if(skill === "mongo"){
        y.style.backgroundColor = "#1c9e3c";
        skillLevel = "20%";
    }
    else if(skill === "html"){
        y.style.backgroundColor = "#e5470d";
        skillLevel = "90%";
    }
    else if(skill === "css"){
        y.style.backgroundColor = "#1de50b";
        skillLevel = "80%";
    }
    else if(skill === "javaScript"){
        y.style.backgroundColor = "#caef0e";
        skillLevel = "83%";
    }
    else if(skill === "java"){
        y.style.backgroundColor = "#bf0716";
        skillLevel = "70%";
    }
    else if(skill === "C++"){
        y.style.backgroundColor = "#0101bc";
        skillLevel = "89%";
    }
    else if(skill === "C"){
        y.style.backgroundColor = "#7591ef";
        skillLevel = "86%";
    }
    else if(skill === "NodeJS"){
        y.style.backgroundColor = "#89ef75";
        skillLevel = "82%";
    }
    else if(skill === "ReactJS"){
        y.style.backgroundColor = "#e357e5";
        skillLevel = "75%";
    }
    else if(skill === "VueJS"){
        y.style.backgroundColor = "#59b6ae";
        skillLevel = "66%";
    }
    else if(skill === "SQL"){
        y.style.backgroundColor = "#ff0000";
        skillLevel = "89%";
    }
    else if(skill === "python"){
        y.style.backgroundColor = "#302d2d";
        skillLevel = "88%";
    }
    console.log(skill);
    x =setInterval(expandoF, 1);
}

function expandoF(){
    expando = i + '%'; //GET PERCENTAGE SO IT IS PASSED DOWN TO DOM
    console.log(expando);
    y.style.width = expando;
    y.innerHTML = expando;
    if(y.style.width === skillLevel){
        clearInterval(x);
    }
    i++;
}
