class Game {

	whenPlayer1StatsUpdate = null;
	whenPlayer2StatsUpdate = null;
	whenEnemyStatsUpdate = null;
	whenCurrentPlayerChanges = null;
	whenPlayerAttacks = null;
	currentTurnPlayer = null;
	enemy = null;
	player1 = null;
	player2 = null;

	constructor (player1Input, player2Input) {

		console.log("gameCreated");
		this.player1 = new Character(player1Input);
		this.player2 = new Character(player2Input);
		this.currentTurnPlayer = this.player1;
	}

	setWhenPlayer1StatsUpdateCallback (callback) {

		this.whenPlayer1StatsUpdate = callback;
	}

	setWhenPlayer2StatsUpdateCallback (callback) {

		this.whenPlayer2StatsUpdate = callback;
	}

	setWhenEnemyStatsUpdateCallback (callback) {

		this.whenEnemyStatsUpdate = callback;
	}

	setWhenCurrentPlayerChangesCallback (callback) {

		this.whenCurrentPlayerChanges = callback;
	}

	setWhenPlayerAttacksCallback (callback) {

		this.whenPlayerAttacks = callback;
	}

	createEnemy (enemyType) {

		this.enemy = new Character(enemyType);
	}

	setCurrentTurnPlayer () {

		if (this.getCurrentTurnPlayer() === this.player1) {
			this.currentTurnPlayer = this.player2;
		} else if (this.getCurrentTurnPlayer() === this.player2) {
			this.currentTurnPlayer = this.enemy;
		} else {
			this.currentTurnPlayer = this.player1;
		}
	}

	getCurrentTurnPlayer () {

		return this.currentTurnPlayer;
	}

	updateCharacterIcons () {

		this.whenPlayer1StatsUpdate(this.player1);
		this.whenPlayer2StatsUpdate(this.player2);
		this.whenEnemyStatsUpdate(this.enemy);
	}

	attack () {

		this.enemy.attack(this.getCurrentTurnPlayer()); 
		this.whenPlayerAttacks();
		this.updateCharacterIcons();
		this.setCurrentTurnPlayer();
		this.whenCurrentPlayerChanges();
	}

	getPlayerIconsHTML () {

		return `
		<div id="playerIconContainer">
		<div id="player1Icon" class="playerIcon"></div>
		<div id="player2Icon" class="playerIcon"></div>
		<div id="enemyIcon" class="playerIcon"></div>
		</div>
		`
	}
 
 	getGameBuildHTML () {

 		return `
 		<div id="container">
 		<div id="gameLogContainer">
 		<ol id="gameLog"></ol>
 		</div>
 		</div>
 		<div id="playerIconContainer">
		<div id="player1Icon" class="playerIcon"></div>
		<div id="player2Icon" class="playerIcon"></div>
		<div id="enemyIcon" class="playerIcon"></div>
		</div>
		<div id="buttonContainer">
		<div id="controlsContainer"></div>
 		<div id="optionsContainer"></div>
 		</div>
 		`
 	}

	getAttackButtonHTML () {

		return `
			<button id="attackButton">Attack!</button>
		`
	}

	getAttackDetailsHTML () {
		//Youre doing battle specific calculations in a log method, we should probably abstract that calculation to Character somehow, maybe the attack method could return some results for what happened
		//Or there could be another method in character specifically for calculating damage if there isnt already, and you can use that...

		//**** Indeed. I have added a method in Character to return the attack damage. However can't amend below as dragon still in playerList.
		return `
		<li>${this.getCurrentTurnPlayer().getName()} attacks ${this.enemy.getName()} for ${this.enemy.calculateAttackDamage(this.getCurrentTurnPlayer())} points. 
		`
	}

	getCurrentPlayerTurnHTML () {
		
		return `
			<li>It's ${this.getCurrentTurnPlayer().getName()}'s turn.</li>
		`
	} 
}
