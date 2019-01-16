var user;
var defender;
var characterList;
var stage = 0;
var tempList = [];
var tempList2 = [];
var tempList3 = [];
var inCombat = false;

var ObiWan = {
    id: 0,
    name: "Obi-Wan Kenobi",
    health: 140,
    basePower: 15,
    power: 15,
    img: "assets/images/Obi.jpg"
}

var Luke = {
    id: 1,
    name: "Luke Skywalker",
    health: 100,
    basePower: 20,
    power: 20,
    img: "assets/images/luke.jpeg"
}

var Sidious = {
    id: 2,
    name: "Darth Sidious",
    health: 80,
    basePower: 25,
    power: 25,
    img: "assets/images/Sidious.jpg"
}

var DarthMaul = {
    id: 3,
    name: "Darth Maul",
    health: 140,
    basePower: 15,
    power: 15,
    img: "assets/images/Maul.png"
}
characterList = [ObiWan, Luke, Sidious, DarthMaul];

$(document).ready(function(){
    $("#1st").html(makeCard(0));
    $("#2nd").html(makeCard(1));
    $("#3rd").html(makeCard(2));
    $("#4th").html(makeCard(3)); 
});

$("#1st").on("click", function(){
    console.log("test");
    user = characterList[0];
    console.log(user);
    stage++;
    updateStage();
});
$("#2nd").on("click", function(){
    console.log("test");
    user = characterList[1];
    console.log(user);
    stage++;
    updateStage();
});
$("#3rd").on("click", function(){
    console.log("test");
    user = characterList[2];
    console.log(user);
    stage++;
    updateStage();
});
$("#4th").on("click", function(){
    console.log("test");
    user = characterList[3];
    console.log(user);
    stage++;
    updateStage();
});
$("#6th").on("click", function(){
    if(stage === 4){
        defender = characterList[tempList2[0]];
        console.log(characterList[tempList2[0]]);
        updateStage();
    } else if(stage === 5){
        defender = characterList[tempList3[0]];
        updateStage();
    } else if(stage === 2){
        defender = characterList[tempList[0]];
        updateStage();
    }
});
$("#7th").on("click", function(){
    if(stage === 4){
        defender = characterList[tempList2[1]];
        updateStage();
    } else if(stage === 2){
        defender = characterList[tempList[1]];
        updateStage();
    }
});
$("#8th").on("click", function(){
    defender = characterList[tempList[2]];
    updateStage();
});
$("#attack").on("click", function(){
    if(stage >= 2 && user.health > 0 && stage !== 6){
        user.health = user.health - defender.power;
        $("#userCombat").text("You did " + user.power + " damage!");
        $("#defenderCombat").text("The defender did " + defender.power + " damage to you!");
        defender.health = defender.health - user.power;
        user.power = user.power + user.basePower;
        updateStage();
    }
});

function makeCard(char){
    var val = "<div class='character'>" + characterList[char].name + "<img src='"+characterList[char].img +"'>"+characterList[char].health +"</div>";
    return val;
}

function updateStage(){
    emptyPage();
    if(stage === 1){
        $("#5th").html(makeCard(user.id));
        for(var i = 0; i < characterList.length; i++){
            if(user.id !== i){
                tempList.push(i);
            }
        }
        $("#6th").html(makeCard(tempList[0]));
        $("#7th").html(makeCard(tempList[1]));
        $("#8th").html(makeCard(tempList[2]));
        stage++;
    } else if(stage === 2){
        $("#5th").html(makeCard(user.id));
        for(var i = 0; i < tempList.length; i++){
            if(defender.id !== tempList[i]){
                tempList2.push(tempList[i]);
            }
        }
        $("#6th").html(makeCard(tempList2[0]));
        $("#7th").html(makeCard(tempList2[1]));
        $("#9th").html(makeCard(defender.id));
        stage++;
    } else if(stage === 3){
        $("#5th").html(makeCard(user.id));
        $("#6th").html(makeCard(tempList2[0]));
        $("#7th").html(makeCard(tempList2[1]));
        $("#9th").html(makeCard(defender.id));
        if(user.health <= 0){
            $("#end").html('<button id="restart" type="button">Restart</button>');
            $("#restart").on("click", function(){
                restartGame();
            });
            $("#userCombat").text("You lost!");
            $("#defenderCombat").text("");
        } else if(defender.health <= 0){
            stage++;
            $("#9th").html("");    
            $("#5th").html(makeCard(user.id));
            $("#6th").html(makeCard(tempList2[0]));
            $("#7th").html(makeCard(tempList2[1]));
        }
    } else if(stage === 4){
        $("#5th").html(makeCard(user.id));
        if(defender.id === tempList2[0]){
            $("#9th").html(makeCard(tempList2[0]));
            tempList3.push(tempList2[1]);
            $("#6th").html(makeCard(tempList2[1])); 
        } else {
            $("#6th").html(makeCard(tempList2[0]));
            tempList3.push(tempList2[0]);
            $("#9th").html(makeCard(tempList2[1]));
        }
        if(user.health <= 0){
            $("#end").html('<button id="restart" type="button">Restart</button>');
            $("#restart").on("click", function(){
                restartGame();
            });
            $("#userCombat").text("You lost!");
            $("#defenderCombat").text("");
        } else if(defender.health <= 0){
            $("#9th").html("");    
            $("#5th").html(makeCard(user.id));
            $("#6th").html(makeCard(tempList3[0]));
            stage++;
        }
    } else if(stage === 5){
        $("#5th").html(makeCard(user.id));
        $("#9th").html(makeCard(defender.id));
        if(user.health <= 0){
            $("#end").html('<button id="restart" type="button">Restart</button>');
            $("#restart").on("click", function(){
                restartGame();
            });
            $("#userCombat").text("You lost!");
            $("#defenderCombat").text("");
        } else if(defender.health <= 0) {
            $("#end").html('<button id="restart" type="button">Restart</button>');
            $("#restart").on("click", function(){
                restartGame();
            });
            stage++;
        }
    } else if(stage === 6){
        $("#userCombat").text("You WIN!");
        $("#defenderCombat").text("");
    } else {
        $("#1st").html(makeCard(0));
        $("#2nd").html(makeCard(1));
        $("#3rd").html(makeCard(2));
        $("#4th").html(makeCard(3));
        $("#userCombat").html("");
    }
}

function emptyPage(){
    $("#1st").html("");
    $("#2nd").html("");
    $("#3rd").html("");
    $("#4th").html("");
    $("#5th").html("");
    $("#6th").html("");
    $("#7th").html("");
    $("#8th").html("");
    $("#9th").html("");
}

function restartGame(){
    $("#end").html("");
    user = "";
    defender = "";
    stage = 0;
    tempList = [];
    tempList2 = [];
    tempList3 = [];

    ObiWan.health = 140;
    ObiWan.basePower = 15;
    ObiWan.power = 15;
    Luke.health = 100;
    Luke.basePower = 20;
    Luke.power = 20;
    Sidious.health = 80;
    Sidious.basePower = 25;
    Sidious.power = 25;
    DarthMaul.health = 140;
    DarthMaul.basePower = 15;
    DarthMaul.power = 15;
    characterList = [ObiWan, Luke, Sidious, DarthMaul];
    updateStage();
}
// function checkStage(){
//     if(stage === 1){
//         $("#character").html(makeContainer);
//     } else if(stage === 2){
//         $("#enemies").html(makeContainer);
//     } else if(stage === 3){    
//         $("#defender").html(makeContainer);
//     }    
// }

// function makeContainer(){
//     var val="<div class='container'>";
//     val = val + "<div class='row'>";
//     val = val + "<div class='col-sm-2 choice' value='1'>" + makeCard(0) + "</div>";
//     val = val + "<div class='col-sm-2 choice'>" + makeCard(1) + "</div>";
//     val = val + "<div class='col-sm-2 choice'>" + makeCard(2) + "</div>";
//     val = val + "<div class='col-sm-2 choice'>" + makeCard(3) + "</div>";
//     val = val + "</div></div>";
//     return val;
// }