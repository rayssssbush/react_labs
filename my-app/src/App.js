import React, { useState } from 'react'

function App() {
	// Создаем стейты для имени и фамилии
	const [name, setName] = useState('John')
	const [surname, setSurname] = useState('Doe')

	// Функции для изменения значений
	const changeName = () => {
		setName('Alex')
	}

	const changeSurname = () => {
		setSurname('Smith')
	}

	return (
		<div>
			<h1>Данные пользователя</h1>
			<p>Имя: {name}</p>
			<p>Фамилия: {surname}</p>

			<button onClick={changeName}>Изменить имя</button>
			<button onClick={changeSurname}>Изменить фамилию</button>
		</div>
	)
}

export default App
