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

	updatePlayer1Statistics(newGame.getPlayer(player1Name));
	updatePlayer2Statistics(newGame.getPlayer(player2Name));
	updatePlayer3Statistics(newGame.getPlayer("Dragon"));

	//document.getElementById("attackButton").addEventListener("click", newGame.attack.bind(newGame));
	//Numerous forums say using onclick is not good and eventListener should be used instead?
}

function updatePlayer1Statistics (player) {

	document.getElementById("player1").innerHTML = player.getPlayerStatisticsHTML();

}

function updatePlayer2Statistics (player) {

	document.getElementById("player2").innerHTML = player.getPlayerStatisticsHTML();

}

function updatePlayer3Statistics (player) {

	document.getElementById("player3").innerHTML = player.getPlayerStatisticsHTML();

}

function updateGameLogWithCurrentPlayerTurn () {

	let x = document.getElementById("gameLog").innerHTML;
	document.getElementById("gameLog").innerHTML = (x + newGame.getCurrentPlayerTurnHTML());
}

function updateGamelogWithAttackDetails () {

	let x = document.getElementById("gameLog").innerHTML;
	document.getElementById("gameLog").innerHTML = (x + newGame.getAttackDetailsHTML());
}



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


