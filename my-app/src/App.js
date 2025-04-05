import faker from 'faker'

function generateRandomStringWithFaker() {
	// Генерация случайной строки с использованием faker
	const randomName = faker.name.findName()
	const randomEmail = faker.internet.email()

	console.log('Random Name:', randomName)
	console.log('Random Email:', randomEmail)
}

generateRandomStringWithFaker()
