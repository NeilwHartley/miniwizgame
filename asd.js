class Game {

	players = null;

	constructor () {

		this.players = [];
		this.players.push({name: "joe", age: 28});
		this.players.push({name: "neil", age: 55});
		this.players.push({name: "hannah", age: 23});
		this.players.push({name: "greta", age: 42});
	}

	getPlayer (name) {

		for (let i=0; i<this.player.length; i++) {

			if (this.players[i].name === name) {

				return this.players[i];
			}
		}
	}


}