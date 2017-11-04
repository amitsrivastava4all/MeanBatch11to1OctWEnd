window.addEventListener("load",init);
var buttons;
function init(){
     buttons = document.getElementsByTagName("button");
    //for(let i = 0; i<buttons.length; i++){
        for(let button of buttons){
        //buttons[i].addEventListener("click",printXorZero);
        //buttons[i].addEventListener("click",printXorZero);
            button.addEventListener("click",printXorZero);
    }
}
var isXorZero = true;

const isNotBlank = (...currentRow)=>{
       for(let button of currentRow){
           if(!button.innerHTML){
               return false;
           }
       }
        return true;     
}

const printXorZero = (event)=>{
            var currentButton = event.target.innerHTML;
            if(!currentButton){
            event.target.innerHTML = isXorZero?"X":"0";
            //cpuTurn();
            document.getElementById("gameover").innerHTML = winOrLose()?"Game Over U Win "+event.target.innerHTML:"";
            isXorZero = !isXorZero;
            }
        };
       var gameOver ; 
const winOrLose=()=>{
    gameOver = false;
    if(isNotBlank(buttons[0],buttons[1],buttons[2])){
    if(buttons[0].innerHTML == buttons[1].innerHTML && buttons[0].innerHTML ==buttons[2].innerHTML)
        {
            gameOver = true;
        }
    }
    
    if(isNotBlank(buttons[0],buttons[3],buttons[6])){
       if(buttons[0].innerHTML == buttons[3].innerHTML && buttons[0].innerHTML ==buttons[6].innerHTML)
        {
            gameOver = true;
        } 
    }    
    return gameOver;    
}
/*function printXorZero(event){
    event.target.innerHTML = isXorZero?"X":"0";
    //console.log("U click on Button ");
    /*if(isXorZero){
    event.target.innerHTML = "X";
    }
    else{
        event.target.innerHTML = "0";
    }
    isXorZero = !isXorZero;
}*/