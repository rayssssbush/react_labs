import React from 'react'

function App() {
	// Массив городов
	const cities = [
		'Москва',
		'Санкт-Петербург',
		'Новосибирск',
		'Екатеринбург',
		'Казань',
	]

	return (
		<div>
			<label>
				Выберите город:
				<select>
					<option value=''>Выберите город</option>
					{/* Используем цикл для отображения городов */}
					{cities.map((city, index) => (
						<option key={index} value={city}>
							{city}
						</option>
					))}
				</select>
			</label>
		</div>
	)
}

export default App
