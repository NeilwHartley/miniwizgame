class Character {

	constructor () {

	}

	getGeneralStatisticsBasedOnLevel (level) {

		return {
			hp: level * 15,
			attack: level * 1,
			defence: level * 0.75
		}
	}
}