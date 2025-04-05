import React, { useState } from 'react'

function App() {
	// Создаем стейты для имени, фамилии и возраста
	const [name, setName] = useState('John')
	const [surname, setSurname] = useState('Doe')
	const [age, setAge] = useState(30)

	return (
		<div>
			<h1>Данные пользователя</h1>
			<p>Имя: {name}</p>
			<p>Фамилия: {surname}</p>
			<p>Возраст: {age}</p>
		</div>
	)
}

export default App
