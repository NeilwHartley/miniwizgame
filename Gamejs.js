class Game {

	whenPlayer1StatsUpdate = null;
	whenPlayer2StatsUpdate = null;
	whenEnemyStatsUpdate = null;
	whenCurrentPlayerChanges = null;
	whenPlayerAttacks = null;
	whenEnemyAttacks = null;
	currentTurnPlayer = null;
	enemy = null;
	player1 = null;
	player2 = null;
	whichPlayerToAttack = null;

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

	setWhenEnemyAttacksCallback (callback) {

		this.whenEnemyAttacks = callback;
	}

	setWhichPlayerToAttack () {

		let rand = Math.random();
		if (rand < 0.5) {
			this.whichPlayerToAttack = this.player1;
		} else {
			this.whichPlayerToAttack = this.player2;
		}
	}

	getWhichPlayerToAttack () {

		return this.whichPlayerToAttack;
	}

	createEnemy (enemyType) {

		this.enemy = new Character(enemyType);
	}

	getEnemy () {

		return this.enemy;
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

	playerAttack () {

		if (this.getCurrentTurnPlayer() != this.getEnemy()) {

			this.enemy.attack(this.getCurrentTurnPlayer()); 
			this.whenPlayerAttacks();
			this.updateCharacterIcons();
			this.setCurrentTurnPlayer();
			this.whenCurrentPlayerChanges();
		} else {

			this.enemyAttack();
		}
	}

	enemyAttack () {

		this.setWhichPlayerToAttack();

		this.getWhichPlayerToAttack().attack(this.getEnemy()); 
		this.whenEnemyAttacks();
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

	getPlayerAttackDetailsHTML () {
		
		return `
		<li>${this.getCurrentTurnPlayer().getName()} attacks ${this.getEnemy().getName()} for ${this.getEnemy().calculateAttackDamage(this.getCurrentTurnPlayer())} points. 
		`
	}

	getEnemyAttackDetailsHTML () {
		
		return `
		<li>${this.getEnemy().getName()} attacks ${this.getWhichPlayerToAttack().getName()} for ${this.getWhichPlayerToAttack().calculateAttackDamage(this.getEnemy())} points. 
		`
	}

	getCurrentPlayerTurnHTML () {
		
		return `
			<li>It's ${this.getCurrentTurnPlayer().getName()}'s turn.</li>
		`
	} 
}
