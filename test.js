const newGame = new Game(); //I expect you will tell me off for this

function createGame () {

	const player1Name = document.getElementById("player1Input").value;
	const player2Name = document.getElementById("player2Input").value;

	
	//const newGame = new Game();
	//newGame.createPlayer();
	newGame.setPlayerName(player1Name);
	//newGame.createPlayer();
	newGame.setPlayerName(player2Name);

	newGame.createEnemy();
	newGame.setPlayerName("Dragon");

	document.body.innerHTML = newGame.getGameBuildHTML();
	document.getElementById("gameLog").innerHTML = newGame.getCurrentPlayerTurnHTML();

	document.getElementById("controlsContainer").innerHTML = newGame.getAttackButtonHTML();

	updatePlayerStatisticsIcons(newGame.getPlayer(player1Name), newGame.getPlayer(player2Name));
	//updatePlayer2Statistics(newGame.getPlayer(player2Name));
	updatePlayer3StatisticsIcon(newGame.getPlayer("Dragon"));

	document.getElementById("attackButton").onclick = newGame.attack.bind(newGame);
}

const updatePlayerStatisticsIcons = function (player, player2) {

	document.getElementById("player1").innerHTML = player.getPlayerStatisticsHTML();

	document.getElementById("player2").innerHTML = player2.getPlayerStatisticsHTML();
}

newGame.setWhenPlayerStatsUpdateCallback(updatePlayerStatisticsIcons);

const updatePlayer3StatisticsIcon = function (player) {

	document.getElementById("player3").innerHTML = player.getPlayerStatisticsHTML();

}

const updateGameLogWithAttackDetails = function () {

	document.getElementById("gameLog").innerHTML = 
	(document.getElementById("gameLog").innerHTML + newGame.getAttackDetailsHTML());
}

newGame.setWhenPlayerAttacksCallback(updateGameLogWithAttackDetails)

const updateGameLogWithCurrentPlayerTurn = function () {
	document.getElementById("gameLog").innerHTML = 
	(document.getElementById("gameLog").innerHTML + newGame.getCurrentPlayerTurnHTML());

}

newGame.setWhenCurrentPlayerChangesCallback(updateGameLogWithCurrentPlayerTurn);

/*function updateGameLogWithAttackDetails () {

	document.getElementById("gameLog").innerHTML = 
	(document.getElementById("gameLog").innerHTML + newGame.getAttackDetailsHTML());
}
*/


function test () {

	console.log("test");

	const character = new Character();
	character.setName("Joe");

	console.assert(character instanceof Character);
	//console.assert(character.level === 1);
	//console.assert(character.StrengthStat === 1);
	//console.assert(character.getCurrenthp() === character.MaxhpStat);


	//character.sethp(200);
	console.log("Currenthp:" + character.getCurrenthp());
	console.log("Maxhp:" + character.getMaxhpStat());
	//console.assert(character.Currenthp === character.maxhpStat);


	const character2 = new Character();
	character2.setName("Neil");

	console.log(character.getStatisticsString());

	character.attack(character2);

	console.log(character.getStatisticsString());

	character.heal(character2);
	console.assert(character.getCurrenthp() <= character.getMaxhpStat());

	console.log(character.getStatisticsString());
	console.log(character2.getStatisticsString());

	character.attack(character2);

	console.log(character2.getStatisticsString());
		character.attack(character2);
		character.attack(character2);
		character.attack(character2);
		character.attack(character2);
		character.attack(character2);
		character.attack(character2);
		character.attack(character2);
		character.attack(character2);
		character.attack(character2);
		character.attack(character2);
		character.attack(character2);
		character.attack(character2);
		character.attack(character2);
		character.attack(character2);
		character.attack(character2);
		character.attack(character2);
		character.attack(character2);
		character.attack(character2);
		character.attack(character2);
		character.attack(character2);
		character.attack(character2);
		character.attack(character2);
		character.attack(character2);
		character.attack(character2);
		character.attack(character2);
		character.attack(character2);
		character.attack(character2);
		character.attack(character2);
		character.attack(character2);
		character.attack(character2);
		character.attack(character2);
		character.attack(character2);
		character.attack(character2);
		character.attack(character2);
		character.attack(character2);
		character.attack(character2);
		character.attack(character2);
		character.attack(character2);
		character.attack(character2);
		character.attack(character2);
		character.attack(character2);
	
	console.log(character2.getStatisticsString());

	document.getElementById("fornow").innerHTML = character2.getPlayerStatisticsHTML();
}


