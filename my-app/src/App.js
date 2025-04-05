import React, { useState } from 'react'

function App() {
	// Стейт для хранения числа (например, возраста)
	const [age, setAge] = useState(25)

	// Функции для изменения значения
	const increaseAge = () => {
		setAge(age + 1)
	}

	const decreaseAge = () => {
		setAge(age - 1)
	}

	return (
		<div>
			<h1>Возраст: {age}</h1>

			{/* Кнопки для увеличения и уменьшения возраста */}
			<button onClick={increaseAge}>Увеличить возраст</button>
			<button onClick={decreaseAge}>Уменьшить возраст</button>
		</div>
	)
}

export default App
