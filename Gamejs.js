class Game {

	//Havent declared playerList
	i = 0;	// Far too generic a name for a class variable - what does it represent?
	current = 0; // Too generic a name for a class variable - what does it represent?
	whenPlayerStatsUpdate = null;
	whenCurrentPlayerChanges = null;
	whenPlayerAttacks = null;

	constructor () {

		console.log("gameCreated");
		this.playerList = [];
		//You will always create and push two character at the start of every concievable game?
		// Thats a bit too restrictive I think... maybe we should pass the characters in as arguments to the constructor.
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

		/*
			This is a really hooky method.
			We maintain a method specific cursor called i on the object to know which names weve set
			on the characters?
			I think we want to pass those names into the characters directly rather than have game deal with the names.
			Character names are specific to character. Game shouldnt be touching them except maybe at creation (constructor)
			if you rework the way that constructor handles the characters tho, because there are issues there i think too, this may not be necessary.
		*/

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

	//Im ok with this for now, can be build upon.
	createEnemy () {

		this.playerList.push(new Character());
	}

	controlTurn () {

		this.getCurrentPlayer(this.current);
		this.current++;
		if (this.current > (this.playerList.length - 1)) {
			this.current = 0;
		}

		//Im guessing you want to uncomment this?		
		//this.updatePlayerStats(this.getCurrentPlayer(this.current));
	}

	//Good.
	getCurrentPlayer (index) {

		console.log(this.playerList[index]);
		return this.playerList[index];	
			
	}

	updatePlayerIcons () {

		//This implementation assumes an importance of the first two players... too specific for an unbounded player list.
		this.whenPlayerStatsUpdate(this.getCurrentPlayer(0), this.getCurrentPlayer(1));
	}

	attack () {

		console.log("attack");

		let attacker = this.getCurrentPlayer(this.current);

		this.playerList[2].attack(attacker); //Only attacks Dragon for test purpose

		//These look ok for now, except for updatePlayerIcons which looks a bit confused... 
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

		//Hohoho javascript in a string. No thank you.
		return `
			<button id="attackButton" onclick="newGame.attack()">Attack!</button>
		`
	}

	getAttackDetailsHTML () {
		//Youre doing battle specific calculations in a log method, we should probably abstract that calculation to Character somehow, maybe the attack method could return some results for what happened
		//Or there could be another method in character specifically for calculating damage if there isnt already, and you can use that...
		return `
		<li>${this.playerList[this.current].getName()} attacks ${this.playerList[2].getName()} for ${this.playerList[this.current].getStrengthStat() - this.playerList[2].getDefenceStat()} points. 
		`
	}

	getCurrentPlayerTurnHTML () {
		
		//Good
		return `
			<li>It's ${this.playerList[this.current].getName()}'s turn.</li>
		`
	} 
}

//You dont need these if youre declaring in the class
Game.prototype.i = null;
Game.prototype.current = null;