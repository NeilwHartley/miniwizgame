class Character {

	constructor (level) {

		this.setLevel(level);
		this.setHP(this.getMaxHPStat());
	}

	setExp(attackingCharacter, attackDamage) {

		attackingCharacter.exp = attackingCharacter.exp + attackDamage;

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
		attackingCharacter.setExp(attackingCharacter, attackDamage);
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
				Hp: ${this.getCurrentHP()} / ${this.getMaxHPStat()}
				Attack: ${this.getStrengthStat()}
				Defence: ${this.getDefenceStat()}
				Exp: ${this.getExp()}
		`;

		return characterStatsString;
	}
}

Character.prototype.level = null;
Character.prototype.hp = null;
Character.prototype.exp = null;
