var user;
var defender;
var characterList;

var ObiWan = {
    name: "Obi-Wan Kenobi",
    health: 140,
    power: 15
}

var Luke = {
    name: "Luke Skywalker",
    health: 100,
    power: 20
}

var Sidious = {
    name: "Darth Sidious",
    health: 80,
    power: 25
}

var DarthMaul = {
    name: "Darth Maul",
    health: 140,
    power: 15
}

characterList = [ObiWan, Luke, Sidious, DarthMaul];

$("#selection").html(
    "<div class='card'> <div class='card-body'>This is more test</div></div>");