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
	currentTurnCharacter = null;
	enemy = null;
	player1 = null;
	player2 = null;
	whichPlayerToAttack = null;
	whichPlayertoHeal = null;

	constructor (player1Input, player2Input) {

		console.log("gameCreated");
		this.player1 = new Character(player1Input);
		this.player2 = new Character(player2Input);
		this.currentTurnCharacter = this.getPlayer1();
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

	setWhenHealButtonClickedCallback (callback) {

		this.whenHealButtonClicked = callback;
	}

	setAfterHealButtonClickedCallback (callback) {

		this.afterHealButtonClicked = callback;
	}

	setWhichPlayerToHeal (playerToHeal) {

		this.whichPlayerToHeal = playerToHeal;
	}

	setCurrentTurnCharacter () {

	if (this.getCurrentTurnCharacter() === this.getPlayer1()) {
		
		this.currentTurnCharacter = this.getPlayer2();
		} else if (this.getCurrentTurnCharacter() === this.getPlayer2()) {
		
		this.currentTurnCharacter = this.getEnemy();
		} else {
		
		this.currentTurnCharacter = this.getPlayer1();
		}
	}

	getPlayer1 () {

		return this.player1;
	}

	getPlayer2 () {

		return this.player2;
	}

	getWhichPlayerToHeal () {

		return this.whichPlayerToHeal;
	}

	getWhichPlayerToAttack () {

		let rand = Math.random();
		if (rand < 0.5) {
		
			return this.getPlayer1();
		} else {
		
			return this.getPlayer2();
		}
	}

	getEnemy () {

		return this.enemy;
	}

	getCurrentTurnCharacter () {

		return this.currentTurnCharacter;
	}

	playerHeal () {

		this.getWhichPlayerToHeal().heal(this.getCurrentTurnCharacter());
		this.updateCharacterIcons();
		this.whenPlayerHeals();
		this.afterHealButtonClicked();
		this.setCurrentTurnCharacter();
		this.whenCurrentPlayerChanges();
		this.checkIsCurrentTurnEnemy();
	}

	createEnemy (enemyType) {

		this.enemy = new Character(enemyType);
	}

	updateCharacterIcons () {

		this.whenPlayer1StatsUpdate(this.getPlayer1());
		this.whenPlayer2StatsUpdate(this.getPlayer2());
		this.whenEnemyStatsUpdate(this.getEnemy());
	}

	checkEnemyhp () {

		return (!(this.getEnemy().getCurrenthp() > 0));
	}

	checkIsCurrentTurnEnemy () {

		if (this.getCurrentTurnCharacter() === this.getEnemy()) {

			this.enemyAttack();
		}
	}

	playerAttack () {
	
		this.getEnemy().attack(this.getCurrentTurnCharacter()); 
		this.whenPlayerAttacks();
		this.updateCharacterIcons();
		if (this.checkEnemyhp()) {
		
			this.whenEnemyDies();
			return;
		}
		this.setCurrentTurnCharacter();
		this.whenCurrentPlayerChanges();
		this.checkIsCurrentTurnEnemy();
	}



	whenHealButtonIsClicked () {

		this.whenHealButtonClicked();
	}

	enemyAttack () {

		this.getWhichPlayerToAttack().attack(this.getEnemy()); 
		this.whenEnemyAttacks();
		this.updateCharacterIcons();
		this.setCurrentTurnCharacter();
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
		<li>${this.getCurrentTurnCharacter().getName()} attacks ${this.getEnemy().getName()} for ${this.getEnemy().calculateAttackDamage(this.getCurrentTurnCharacter())} points. 
		`
	}

	getPlayerHealDetailsHTML () {

		return `
		<li>${this.getCurrentTurnCharacter().getName()} heals ${this.getWhichPlayerToHeal().getName()} for ${this.getCurrentTurnCharacter().calculateHealAmount()} points.
		`
	}

	getEnemyAttackDetailsHTML () {
		
		return `
		<li>${this.getEnemy().getName()} attacks ${this.getWhichPlayerToAttack().getName()} for ${this.getWhichPlayerToAttack().calculateAttackDamage(this.getEnemy())} points. 
		`
	}

	getCurrentPlayerTurnHTML () {
		
		return `
		<li>It's ${this.getCurrentTurnCharacter().getName()}'s turn.</li>
		`
	} 

	getEnemyHasDiedHTML () {

		return `
		<li>${this.getEnemy().getName()} has died.</li>
		`
	}
}
