function test () {

	console.log("test");

	const character = new Character(5);

	console.assert(character instanceof Character);
	console.assert(character.level === 5);
	console.assert(character.getStrengthStat() === 5);
	console.assert(character.getCurrentHP() === character.getMaxHPStat());


	character.setHP(200)
	console.log("CurrentHP:" + character.getCurrentHP());
	console.log("MaxHP:" + character.getMaxHPStat());
	console.assert(character.getCurrentHP() === character.getMaxHPStat());

	console.log(character.getStatisticsString());

	const character2 = new Character(10);
	character.attack(character2);

	console.log(character.getStatisticsString());
}