function test () {

	console.log("test");

	const character = new Character(5);

	console.assert(character instanceof Character);
	console.assert(character.level === 5);
	console.assert(character.getAttackStat() === 5);
	console.assert(character.getCurrentHP() === character.getMaxHPStat());


	character.setHP(200)
	console.log("CurrentHP:" + character.getCurrentHP());
	console.log("MaxHP:" + character.getMaxHPStat());
	console.assert(character.getCurrentHP() === character.getMaxHPStat());



	console.log(character.getStatisticsString());
}