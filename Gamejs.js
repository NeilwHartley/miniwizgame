class Game {

	i = 0;
	current = 0;
	whenPlayerStatsUpdate = null;
	whenCurrentPlayerChanges = null;
	whenPlayerAttacks = null;

	constructor () {

		console.log("gameCreated");
		this.playerList = [];
		this.playerList.push(new Character());
		this.playerList.push(new Character());
	}

	/* createPlayer () {

		this.playerList.push(new Character());
	}
	*/

	setWhenPlayerStatsUpdateCallback (callback) {

		this.whenPlayerStatsUpdate = callback;
	}

	setWhenCurrentPlayerChangesCallback (callback) {

		this.whenCurrentPlayerChanges = callback;
	}

	setWhenPlayerAttacksCallback (callback) {

		this.whenPlayerAttacks = callback;
	}

	setPlayerName (name) {

		this.playerList[this.i].setName(name);
		console.log(this.playerList[this.i]);
		this.i++;
	}

	getPlayer (name) {

		for (let i=0; i<this.playerList.length; i++) {

			if (this.playerList[i].name === name) {

				return this.playerList[i];
			}
		}
	}

	createEnemy () {

		this.playerList.push(new Character());
	}

	controlTurn () {

		this.getCurrentPlayer(this.current);
		this.current++;
		if (this.current > (this.playerList.length - 1)) {
			this.current = 0;
		}
		
		//this.updatePlayerStats(this.getCurrentPlayer(this.current));
	}

	getCurrentPlayer (index) {

		console.log(this.playerList[index]);
		return this.playerList[index];	
			
	}

	updatePlayerIcons () {

		this.whenPlayerStatsUpdate(this.getCurrentPlayer(0), this.getCurrentPlayer(1));
	}

	attack () {

		console.log("attack");

		let attacker = this.getCurrentPlayer(this.current);

		this.playerList[2].attack(attacker); //Only attacks Dragon for test purpose

		this.whenPlayerAttacks();
		this.updatePlayerIcons();
		this.controlTurn();
		this.whenCurrentPlayerChanges()

		
	}

	getPlayerIconsHTML () {

		return `
		<div id="playerIconContainer">
		<div id="player1" class="playerIcon"></div>
		<div id="player2" class="playerIcon"></div>
		<div id="player3" class="playerIcon"></div>
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
		<div id="player1" class="playerIcon"></div>
		<div id="player2" class="playerIcon"></div>
		<div id="player3" class="playerIcon"></div>
		</div>
		<div id="buttonContainer">
		<div id="controlsContainer"></div>
 		<div id="optionsContainer"></div>
 		</div>
 		`
 	}

	getAttackButtonHTML () {

		return `
			<button id="attackButton" onclick="newGame.attack()">Attack!</button>
		`
	}

	getAttackDetailsHTML () {
		return `
		<li>${this.playerList[this.current].getName()} attacks ${this.playerList[2].getName()} for ${this.playerList[this.current].getStrengthStat() - this.playerList[2].getDefenceStat()} points. 
		`
	}

	getCurrentPlayerTurnHTML () {
		
		return `
			<li>It's ${this.playerList[this.current].getName()}'s turn.</li>
		`
	} 
}

Game.prototype.i = null;
Game.prototype.current = null;