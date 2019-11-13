class Game {

	whenPlayer1StatsUpdate = null;
	whenPlayer2StatsUpdate = null;
	whenEnemyStatsUpdate = null;
	whenCurrentPlayerChanges = null;
	whenPlayerAttacks = null;
	whenEnemyAttacks = null;
	whenPlayerHeals = null;
	whenHealButtonClicked = null;
	afterHealButtonClicked = null;
	whenEnemyDies = null;
	currentTurnPlayer = null;
	enemy = null;
	player1 = null;
	player2 = null;
	whichPlayerToAttack = null;
	whichPlayertoHeal = null;

	constructor (player1Input, player2Input) {

		console.log("gameCreated");
		this.player1 = new Character(player1Input);
		this.player2 = new Character(player2Input);
		this.currentTurnPlayer = this.getPlayer1();
	}

	getPlayer1 () {

		return this.player1;
	}

	getPlayer2 () {

		return this.player2;
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

	setWhenEnemyDiesCallback (callback) {

		this.whenEnemyDies = callback;
	}

	setWhenPlayerHealsCallback (callback) {

		this.whenPlayerHeals = callback;
	}

	setWhichPlayerToAttack () {

		let rand = Math.random();
		if (rand < 0.5) {
			this.whichPlayerToAttack = this.getPlayer1();
		} else {
			this.whichPlayerToAttack = this.getPlayer2();
		}
	}

	setWhichPlayerToHeal (playerToHeal) {

		this.whichPlayerToHeal = playerToHeal;
	}

	getWhichPlayerToHeal () {

		return this.whichPlayerToHeal;
	}

	playerHeal () {

		this.getWhichPlayerToHeal().heal(this.getCurrentTurnPlayer());

		this.updateCharacterIcons();
		this.whenPlayerHeals();
		this.afterHealButtonClicked();
		this.setCurrentTurnPlayer();
		this.whenCurrentPlayerChanges();
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

		if (this.getCurrentTurnPlayer() === this.getPlayer1()) {
			this.currentTurnPlayer = this.getPlayer2();
		} else if (this.getCurrentTurnPlayer() === this.getPlayer2()) {
			this.currentTurnPlayer = this.getEnemy();
		} else {
			this.currentTurnPlayer = this.getPlayer1();
		}
	}

	getCurrentTurnPlayer () {

		return this.currentTurnPlayer;
	}

	updateCharacterIcons () {

		this.whenPlayer1StatsUpdate(this.getPlayer1());
		this.whenPlayer2StatsUpdate(this.getPlayer2());
		this.whenEnemyStatsUpdate(this.getEnemy());
	}

	checkEnemyhp () {

		return (!(this.getEnemy().getCurrenthp() > 0));
	}

	playerAttack () {

		if (this.getCurrentTurnPlayer() != this.getEnemy()) {

			this.getEnemy().attack(this.getCurrentTurnPlayer()); 
			this.whenPlayerAttacks();
			this.updateCharacterIcons();
			if (this.checkEnemyhp()) {
				this.whenEnemyDies();
				return;
			}
			this.setCurrentTurnPlayer();
			this.whenCurrentPlayerChanges();
			
		} else {

			this.enemyAttack();
		}
	}

	setWhenHealButtonClickedCallback (callback) {

		this.whenHealButtonClicked = callback;
	}

	setAfterHealButtonClickedCallback (callback) {

		this.afterHealButtonClicked = callback;
	}

	whenHealButtonIsClicked () {

		this.whenHealButtonClicked();
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
		<button id="attackButton">Attack</button>
		`
	}

	getHealButtonHTML () {

		return `
		<button id="healButton">Heal</button>
		`
	}

	getWhichPlayerToHealHTML () {

		return `
		<p>Who to heal?</p>
		<button id="healPlayer1">${this.getPlayer1().getName()}</button>
		<button id="healPlayer2">${this.getPlayer2().getName()}</button>
		`
	}

	getPlayerAttackDetailsHTML () {
		
		return `
		<li>${this.getCurrentTurnPlayer().getName()} attacks ${this.getEnemy().getName()} for ${this.getEnemy().calculateAttackDamage(this.getCurrentTurnPlayer())} points. 
		`
	}

	getPlayerHealDetailsHTML () {

		return `
		<li>${this.getCurrentTurnPlayer().getName()} heals ${this.getWhichPlayerToHeal().getName()} for ${this.getCurrentTurnPlayer().calculateHealAmount()} points.`
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

	getEnemyHasDiedHTML () {

		return `
		<li>${this.getEnemy().getName()} has died.</li>
		`
	}
}
