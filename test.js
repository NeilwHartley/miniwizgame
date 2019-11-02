function test () {

	console.log("test");

	const character = new Character(1);
	character.setName("Joe");

	console.assert(character instanceof Character);
	//console.assert(character.level === 1);
	//console.assert(character.StrengthStat === 1);
	//console.assert(character.getCurrenthp() === character.MaxhpStat);


	//character.sethp(200);
	console.log("Currenthp:" + character.getCurrenthp());
	console.log("Maxhp:" + character.getMaxhpStat());
	//console.assert(character.Currenthp === character.maxhpStat);


	const character2 = new Character(1);
	character2.setName("Neil");

	console.log(character.getStatisticsString());

	character.attack(character2);

	console.log(character.getStatisticsString());

	character.heal(character2);
	console.assert(character.getCurrenthp() <= character.getMaxhpStat());

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

	document.body.innerHTML = character2.getHTMLString();
}
