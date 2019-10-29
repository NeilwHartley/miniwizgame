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

	getLevel () {

		return this.level;
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
