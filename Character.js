class Character {

	constructor (level) {

		this.level = level;
	}

	getAttackStat () {

		return level * 1;
	}

	getDefenceStat () {
		
		return level * 0.75;
	}

	getMaxHPStat () {

		return level * 15;
	}
}

Character.prototype.level = null;
