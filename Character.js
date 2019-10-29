class Character {

	constructor (level) {

		this.setLevel(level);
		this.setHP(this.getMaxHPStat());
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

	getLevel () {

		return this.level;
	}

	setLevel (level) {

		this.level = level;
	}

	setHP (hp) {

		this.hp = hp;
	}

	getStatisticsString () {

		const characterStatsString = 
		`
			Character: No name yet
				Level: ${this.getLevel()}
				Hp: ${this.getCurrentHP()} / ${this.getMaxHPStat()}
				Attack: ${this.getAttackStat()}
				Defence: ${this.getDefenceStat()}
		`;

		return characterStatsString;
	}
}

Character.prototype.level = null;
Character.prototype.hp = null;
