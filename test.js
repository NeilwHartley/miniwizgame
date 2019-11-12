
function createGame () {

	
	const player1Name = document.getElementById("player1Input").value;
	const player2Name = document.getElementById("player2Input").value;
	const newGame = new Game(player1Name, player2Name);


	const updatePlayer1StatisticsIcon = function (player1) {

		document.getElementById("player1Icon").innerHTML = player1.getPlayerStatisticsHTML();
	}
	newGame.setWhenPlayer1StatsUpdateCallback(updatePlayer1StatisticsIcon);




	const updatePlayer2StatisticsIcon = function (player2) {

		document.getElementById("player2Icon").innerHTML = player2.getPlayerStatisticsHTML();
	}
	newGame.setWhenPlayer2StatsUpdateCallback(updatePlayer2StatisticsIcon);




	const updateEnemyStatisticsIcon = function (enemy) {

		document.getElementById("enemyIcon").innerHTML = enemy.getPlayerStatisticsHTML();
	}
	newGame.setWhenEnemyStatsUpdateCallback(updateEnemyStatisticsIcon);
	



	const updateGameLogWithCurrentPlayerTurn = function () {
		document.getElementById("gameLog").innerHTML = 
		(document.getElementById("gameLog").innerHTML + newGame.getCurrentPlayerTurnHTML());
	}
	newGame.setWhenCurrentPlayerChangesCallback(updateGameLogWithCurrentPlayerTurn);




	const updateGameLogWithAttackDetails = function () {

		document.getElementById("gameLog").innerHTML = 
		(document.getElementById("gameLog").innerHTML + newGame.getAttackDetailsHTML());
	}
	newGame.setWhenPlayerAttacksCallback(updateGameLogWithAttackDetails);



		newGame.createEnemy("Dragon");



	
	document.body.innerHTML = newGame.getGameBuildHTML();


	document.getElementById("gameLog").innerHTML = newGame.getCurrentPlayerTurnHTML();

	document.getElementById("controlsContainer").innerHTML = newGame.getAttackButtonHTML();

	document.getElementById("attackButton").onclick = newGame.attack.bind(newGame);

newGame.updateCharacterIcons();
}













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


