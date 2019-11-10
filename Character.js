class Character {

	static strengthMulti = 1;
	static defenceMulti = 0.75;
	static hpMulti = 15;
	static healMulti = 0.2;
	static expDivider = 10;


	constructor () {

		this.setExp(0);
		this.setCurrenthp(this.getMaxhpStat());
	}

	setExp (exp) {

		this.exp = exp;
	}

	increaseExp (inc) {

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

	getMaxhpStat () {

		return this.getLevel() * Character.hpMulti;

	}

	getCurrenthp () {

		return this.currenthp;
	}

	getLevel () {

		if (this.getExp() == 0) {

			return 1;

		} else {

			return (Math.ceil(this.getExp() / Character.expDivider)); 
		}
	}

	setCurrenthp (hp) {

		const maxhp = this.getMaxhpStat();

		if (hp > maxhp) {

			this.currenthp = maxhp;
		
		} else {

			this.currenthp = hp;
		}
	}

	attack (attackingCharacter) {

		console.log("attack");
		let attackDamage = attackingCharacter.getStrengthStat() - this.getDefenceStat();
		this.setCurrenthp(this.getCurrenthp() - attackDamage);
		attackingCharacter.increaseExp(attackDamage);
	}

	heal (healingCharacter) {
		console.log("heal");
		let healValue = healingCharacter.getStrengthStat() * Character.healMulti;
		let newhp = this.getCurrenthp() + healValue;
		this.setCurrenthp(newhp);
	}

	getStatisticsString () {

		const characterStatsString = 
		`
			Character: ${this.getName()}
				Level: ${this.getLevel()}
				HP: ${this.getCurrenthp()} / ${this.getMaxhpStat()}
				Strength: ${this.getStrengthStat()}
				Defence: ${this.getDefenceStat()}
				Exp: ${this.getExp()}
		`;

		return characterStatsString;
	}

	getPlayerStatisticsHTML () {

		return `
				<p>${this.getName()}</p>
				<p>HP: ${this.getCurrenthp()} / ${this.getMaxhpStat()}</p>
				<p>Strength: ${this.getStrengthStat()}</p>
				<p>Defence: ${this.getDefenceStat()}</p>
				<p>Lv: ${this.getLevel()}</p>
		`
	}
}

	Character.prototype.currenthp = null;
	Character.prototype.exp = null;
	Character.prototype.name = null;

