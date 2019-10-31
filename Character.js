class Character {

	static strengthMulti = 1;
	static defenceMulti = 0.75;
	static hpMulti = 15;
	static healMulti = 0.2;
	static expDivider = 10;
	currenthp = null;
	exp = null;

	constructor () {

		this.exp = 0;
		this.currenthp = this.maxhpStat;
	}

	set exp (exp) {

		this.exp = exp;
	}

	increaseExp (inc) {

		this.exp = (this.exp + inc);
	}

	get exp () {

		return this.exp;
	}

	set name (name) {

		this.name = name;
	}

	get name () {

		return this.name;
	}

	get strengthStat () {

		return this.level * Character.strengthMulti;
	}

	get defenceStat () {
		
		return this.level * Character.defenceMulti;;
	}

	get maxhpStat () {

		return this.level * Character.hpMulti;

	}

	get currenthp () {

		return this.hp;
	}

	get level () {

		if (this.exp == 0) {

			return 1;

		} else {

			return (Math.ceil(this.exp / Character.expDivider)); 
		}
	}
	set currenthp (hp) {

		const maxhp = this.maxhpStat;

		if (hp > maxhp) {

			this.currenthp = maxhp;
		
		} else {

			this.currenthp = hp;
		}
	}

	attack (attackingCharacter) {

		console.log("attack");
		var attackDamage = attackingCharacter.strengthStat - this.defenceStat;
		this.currenthp = (this.currenthp - attackDamage);
		attackingCharacter.increaseExp(attackDamage);
	}

	heal (healingCharacter) {
		console.log("heal");
		var healValue = healingCharacter.strengthStat * Character.healMulti;
		var newhp = this.currenthp + healValue;
		this.currenthp = newhp;
	}

	getStatisticsString () {

		const characterStatsString = 
		`
			Character: ${this.Name}
				Level: ${this.level}
				HP: ${this.currenthp} / ${this.maxhpStat}
				Strength: ${this.strengthStat}
				Defence: ${this.defenceStat}
				Exp: ${this.exp}
		`;

		return characterStatsString;
	}
}



