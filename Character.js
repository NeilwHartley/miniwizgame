class Character {

	constructor (level) {

		this.setLevel(level);
		this.setHP(this.getMaxHPStat());
	}

	getStrengthStat () {

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

		const maxHP = this.getMaxHPStat();

		if (hp > maxHP) {

			this.hp = maxHP;
		
		} else {

			this.hp = hp;
		}
	}

	attack (attackingCharacter) {

		console.log("attack");
		var attackDamage = attackingCharacter.getStrengthStat() - this.getDefenceStat();
		this.hp = this.hp - attackDamage;
	}

	getStatisticsString () {

		const characterStatsString = 
		`
			Character: No name yet
				Level: ${this.getLevel()}
				Hp: ${this.getCurrentHP()} / ${this.getMaxHPStat()}
				Attack: ${this.getStrengthStat()}
				Defence: ${this.getDefenceStat()}
		`;

		return characterStatsString;
	}
}

Character.prototype.level = null;
Character.prototype.hp = null;
