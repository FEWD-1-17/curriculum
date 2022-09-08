let playerA = "scissors"
let playerB = "rock"

function playGame(playerA,playerB){
    if(playerA == playerB){
        return "tie";
    }
    
    if(playerA == "scissors"){
        if(playerB == "rock"){
            return "B";
        }else{
            return "A";
        }
    }
    
    
    if(playerA == "rock"){
        if(playerB == "paper"){
            return "B";
        }else{
            return "A";
        }
    }
    
    if(playerA == "paper"){
        if(playerB == "scissors"){
            return "B";
        }else{
            return "A";
        }
    }
}
