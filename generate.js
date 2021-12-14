module.exports = function() {
	const faker = require('faker');
	const _ = require('lodash');
	function ChangeNumToString (num) {
		const strings = ['FunDay', 'Tuesday', 'Reading', 'Math'];
		return strings[num];
	}

	return {
		login: _.times(1, function(n) {
			return {
				id: n,
				email: faker.internet.email(),
				token: "1234567892345678"
			}
		}),
		signup: _.times(1, function(n) {
			return {
				id: n,
				email: faker.internet.email(),
				token: "1234567892345678"
			}
		}),
		schools: _.times(1, function(n) {
			return {
				id: n,
				name: faker.fake("{{name.lastName}} School")
			}
		}),
		students: _.times(4, function(n) {
			return {
				id: n,
				name: faker.name.findName(),
				metrics: [
					{ id: 1, name: 'willingness to help', score: faker.datatype.number({'min': 1, 'max': 4}) },
					{ id: 2, name: 'leadership ability', score: faker.datatype.number({'min': 1, 'max': 4}) },
					{ id: 3, name: 'english score', score: faker.datatype.number({'min': 1, 'max': 4}) }
				]
			}
		}),
		klasses: _.times(3, function(n) {
			return {
				id: n,
				name: faker.fake("{{name.title}} class")
			}
		}),
		seatingcharts: _.times(4, function(m) {
			return {
				id: m,
				name: `${ChangeNumToString(m)} Chart`,
				students: _.times(8, function(x) { //number of tables
					return _.times(4, function(y) { // number of students
						return {
							id: y,
							name: faker.name.findName()
						}
					})
				})
			}
		}),
		metrics: [
			{
				id: 1,
				name: "Willingness to help others"
			},
			{
				id: 2,
				name: "English Language Ability"
			},
			{
				id: 3,
				name: "Leadership Initiative"
			},
		]
	}
}