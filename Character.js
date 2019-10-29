class Character {

	constructor (level) {

		this.level = level;
	}

	getAttackStat () {

		return this.level * 1;
	}

	getDefenceStat () {
		
		return this.level * 0.75;
	}

	getMaxHPStat () {

		return this.level * 15;
	}
}

Character.prototype.level = null;
