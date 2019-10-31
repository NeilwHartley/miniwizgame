class Character {

		static strengthMulti = 1;
		static defenceMulti = 0.75;
		static hpMulti = 15;
		hp = null;
		exp = null;

	constructor () {

		this.exp = 0;
		this.hp = this.maxhpStat;
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

			return (Math.ceil(this.exp / 10)); 
		}
}
	set hp (hp) {

		const maxhp = this.maxhpStat;

		if (hp > maxhp) {

			this.hp = maxhp;
		
		} else {

			this.hp = hp;
		}
	}

	attack (attackingCharacter) {

		console.log("attack");
		var attackDamage = attackingCharacter.strengthStat - this.defenceStat;
		this.hp = (this.currenthp - attackDamage);
		attackingCharacter.increaseExp(attackDamage);
	}

	heal (healingCharacter) {
		console.log("heal");
		var healValue = healingCharacter.strengthStat * 0.2;
		var newhp = this.currenthp + healValue;
		this.hp = newhp;
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



