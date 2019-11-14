window.onload = function () {

	console.log("load");
	test();
	main();
}

function main () {

	console.log("main");
}

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




	const updateGameLogWithPlayerAttackDetails = function () {

		document.getElementById("gameLog").innerHTML = 
		(document.getElementById("gameLog").innerHTML + newGame.getPlayerAttackDetailsHTML());
	}
	newGame.setWhenPlayerAttacksCallback(updateGameLogWithPlayerAttackDetails);



	const updateGameLogWithPlayerHealDetails = function () {

		document.getElementById("gameLog").innerHTML = 
		(document.getElementById("gameLog").innerHTML + newGame.getPlayerHealDetailsHTML());
	}
	newGame.setWhenPlayerHealsCallback(updateGameLogWithPlayerHealDetails);



	const updateGameLogWithEnemyAttackDetails = function () {

		document.getElementById("gameLog").innerHTML = 
		(document.getElementById("gameLog").innerHTML + newGame.getEnemyAttackDetailsHTML());
	}
	newGame.setWhenEnemyAttacksCallback(updateGameLogWithEnemyAttackDetails);



	const updateGameLogWhenEnemyDies = function () {

		document.getElementById("gameLog").innerHTML = 
		(document.getElementById("gameLog").innerHTML + newGame.getEnemyHasDiedHTML());
	}
	newGame.setWhenEnemyDiesCallback(updateGameLogWhenEnemyDies);

	newGame.createEnemy("Dragon");



	const displayOptionMenu = function () {

		document.getElementById("optionsContainer").innerHTML = newGame.getWhichPlayerToHealHTML();	

		document.getElementById("healPlayer1").addEventListener('click', function () {
		newGame.setWhichPlayerToHeal(newGame.getPlayer1());
		newGame.playerHeal();
		})		
		
		document.getElementById("healPlayer2").addEventListener('click', function () {
		newGame.setWhichPlayerToHeal(newGame.getPlayer2());
		newGame.playerHeal();
		})	
	}

	const removeOptionMenu = function () {

		document.getElementById("optionsContainer").innerHTML = "";	
	}

	newGame.setAfterHealButtonClickedCallback(removeOptionMenu);
		
	document.body.innerHTML = newGame.getGameBuildHTML();

	document.getElementById("gameLog").innerHTML = newGame.getCurrentPlayerTurnHTML();

	document.getElementById("controlsContainer").innerHTML = newGame.getAttackButtonHTML() + newGame.getHealButtonHTML();

	document.getElementById("attackButton").onclick = newGame.playerAttack.bind(newGame);

	document.getElementById("healButton").addEventListener('click', function () {
		newGame.setWhenHealButtonClickedCallback(displayOptionMenu);
		newGame.whenHealButtonIsClicked();
	})
	
	newGame.updateCharacterIcons();
}