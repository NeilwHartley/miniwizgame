class Character {

	constructor (level) {

		this.level = level;
		this.hp = this.getMaxHPStat();
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

	getCurrentHP () {
		
		return this.hp;
	}
}

Character.prototype.level = null;
Character.prototype.hp = null;
