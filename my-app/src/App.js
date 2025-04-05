import React, { useState } from 'react'

function App() {
	const [ageGroup, setAgeGroup] = useState('')

	const handleChange = event => {
		setAgeGroup(event.target.value)
	}

	return (
		<div>
			<label>
				Выберите вашу возрастную группу:
				<select value={ageGroup} onChange={handleChange}>
					<option value=''>Выберите возрастную группу</option>
					<option value='0-12'>0 - 12 лет</option>
					<option value='13-17'>13 - 17 лет</option>
					<option value='18-25'>18 - 25 лет</option>
					<option value='25+'>старше 25 лет</option>
				</select>
			</label>

			<p>Вы выбрали: {ageGroup}</p>
		</div>
	)
}

export default App
