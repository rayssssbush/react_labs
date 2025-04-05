import React, { useState } from 'react'

function App() {
	// Стейт для хранения температуры в Фаренгейтах
	const [fahrenheit, setFahrenheit] = useState('')

	// Функция для обработки изменения инпута
	const handleFahrenheitChange = event => {
		setFahrenheit(event.target.value)
	}

	// Конвертация в Цельсий
	const celsius = fahrenheit ? ((fahrenheit - 32) * 5) / 9 : ''

	return (
		<div>
			{/* Инпут для ввода температуры в Фаренгейтах */}
			<input
				type='number'
				value={fahrenheit}
				onChange={handleFahrenheitChange}
				placeholder='Введите температуру в Фаренгейтах'
			/>

			{/* Абзац, показывающий температуру в Цельсиях */}
			{fahrenheit && <p>Температура в Цельсиях: {celsius.toFixed(2)}</p>}
		</div>
	)
}

export default App
