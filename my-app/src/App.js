import { v4 as uuidv4 } from 'react-uuid'

function id() {
	return uuidv4() // Генерация уникального идентификатора в формате UUID
}

console.log(id()) // Например: "f47ac10b-58cc-4372-a567-0e02b2c3d479"
