class Character {

	constructor () {

		this.setHP(this.getMaxHPStat());
		this.setExp(0);

	}

	setExp (exp) {

		this.exp = exp;
	}

	increaseExp(inc) {

		this.setExp(this.getExp() + inc);
	}

	getExp () {

		return this.exp;
	}

	setName (name) {

		this.name = name;
	}

	getName () {

		return this.name;
	}

	getStrengthStat () {

		return this.getLevel() * Character.strengthMulti;
	}

	getDefenceStat () {
		
		return this.getLevel() * Character.defenceMulti;;
	}

	getMaxHPStat () {
		
		return this.getLevel() * Character.hpMulti;

	}

	getCurrentHP () {

		return this.hp;
	}

	getLevel () {

		if (this.getExp() == 0) {

			return 1;

		} else {

			return (Math.ceil(this.getExp() / 10));
	}
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
		this.setHP(this.getCurrentHP() - attackDamage);
		attackingCharacter.increaseExp(attackDamage);
	}

	heal (healingCharacter) {
		console.log("heal");
		var healValue = healingCharacter.getStrengthStat() * 0.2;
		var newHP = this.getCurrentHP() + healValue;
		this.setHP(newHP);
	}

	getStatisticsString () {

		const characterStatsString = 
		`
			Character: ${this.getName()}
				Level: ${this.getLevel()}
				HP: ${this.getCurrentHP()} / ${this.getMaxHPStat()}
				Strength: ${this.getStrengthStat()}
				Defence: ${this.getDefenceStat()}
				Exp: ${this.getExp()}
		`;

		return characterStatsString;
	}
}

Character.prototype.hp = null;
Character.prototype.exp = null;
Character.strengthMulti = 1;
Character.defenceMulti = 0.75;
Character.hpMulti = 15;
