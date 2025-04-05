import React, { useState } from 'react'

function App() {
	// Состояние для хранения выбранного города
	const [selectedCity, setSelectedCity] = useState('')

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
			{/* Выпадающий список городов */}
			<label>
				Выберите город:
				<select
					onChange={e => setSelectedCity(e.target.value)}
					value={selectedCity}
				>
					<option value=''>Выберите город</option>
					{cities.map((city, index) => (
						<option key={index} value={city}>
							{city}
						</option>
					))}
				</select>
			</label>

			{/* Абзац с выбранным городом */}
			{selectedCity && <p>Вы выбрали: {selectedCity}</p>}
		</div>
	)
}

export default App
