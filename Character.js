class Character {

	constructor (level) {

		this.setLevel(level);
		this.setHP(this.getMaxHPStat());
	}

	setExp(attackDamage) {

		this.exp = this.exp + attackDamage;
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

	increaseLevel() {

		this.setLevel(Math.ceil(this.getExp() / 10));
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
		attackingCharacter.setExp(attackDamage);
		attackingCharacter.increaseLevel();
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

Character.prototype.level = null;
Character.prototype.hp = null;
Character.prototype.exp = null;
