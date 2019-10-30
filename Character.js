class Character {

	constructor () {

		this.setHP(this.getMaxHPStat());
	}

	setExp(exp) {

		this.exp = exp;
	}

	increaseExp(inc) {

		this.setExp(this.exp + inc);
	}

	getExp() {

		return this.exp;
	}

	setName(name) {

		this.name = name;
	}

	getName() {

		return this.name;
	}

	getStrengthStat () {

		return this.getLevel() * 1;
	}

	getDefenceStat () {
		
		return this.getLevel() * 0.75;
	}

	getMaxHPStat () {

		return this.getLevel() * 15;
	}

	getCurrentHP () {

		return this.hp;
	}

	getLevel () {

		if (this.getExp() == null) {

			return 1;

		} else {

			return (Math.ceil(this.getExp() / 10));
	}
}

	/*
	setLevel (level) {

		this.level = level;
	}

	increaseLevel() {

		this.setLevel(Math.ceil(this.getExp() / 10));
	}
	*/

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
		attackingCharacter.increaseExp(attackDamage);
	}

	heal (healingCharacter) {
		console.log("heal");
		var healValue = healingCharacter.getStrengthStat() * 0.2;
		var newHP = this.hp + healValue;
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
