function test () {

	console.log("test");

	const character = new Character(1);
	character.setName("Joe");

	console.assert(character instanceof Character);
	//console.assert(character.level === 1);
	console.assert(character.getStrengthStat() === 1);
	console.assert(character.getCurrentHP() === character.getMaxHPStat());


	//character.setHP(200);
	console.log("CurrentHP:" + character.getCurrentHP());
	console.log("MaxHP:" + character.getMaxHPStat());
	console.assert(character.getCurrentHP() === character.getMaxHPStat());


	const character2 = new Character(1);
	character2.setName("Neil");

	console.log(character.getStatisticsString());

	character.attack(character2);

	console.log(character.getStatisticsString());

	character.heal(character2);
	console.assert(character.getCurrentHP() <= character.getMaxHPStat());

	console.log(character.getStatisticsString());
	console.log(character2.getStatisticsString());

	character.attack(character2);

	console.log(character2.getStatisticsString());
		character.attack(character2);
		character.attack(character2);
		character.attack(character2);
		character.attack(character2);
		character.attack(character2);
		character.attack(character2);
		character.attack(character2);
		character.attack(character2);
		character.attack(character2);
		character.attack(character2);
		character.attack(character2);
		character.attack(character2);
		character.attack(character2);
		character.attack(character2);
		character.attack(character2);
		character.attack(character2);
		character.attack(character2);
		character.attack(character2);
		character.attack(character2);
		character.attack(character2);
		character.attack(character2);
		character.attack(character2);
		character.attack(character2);
		character.attack(character2);
		character.attack(character2);
		character.attack(character2);
		character.attack(character2);
		character.attack(character2);
		character.attack(character2);
			character.attack(character2);
		character.attack(character2);
		character.attack(character2);
		character.attack(character2);
		character.attack(character2);
		character.attack(character2);
		character.attack(character2);
		character.attack(character2);
		character.attack(character2);
		character.attack(character2);
		character.attack(character2);
		character.attack(character2);
	
	console.log(character2.getStatisticsString());
}
