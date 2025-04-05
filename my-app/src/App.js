import React, { useState } from 'react'

function App() {
	const initialArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]

	const [numbers, setNumbers] = useState(initialArray)

	// Функция для подсчета среднего арифметического
	const calculateAverage = () => {
		const sum = numbers.reduce((acc, curr) => acc + curr, 0)
		return sum / numbers.length
	}

	// Обработчик для изменения значений массива
	const handleInputChange = (index, value) => {
		const updatedNumbers = [...numbers]
		updatedNumbers[index] = Number(value)
		setNumbers(updatedNumbers)
	}

	return (
		<div>
			<h2>Среднее арифметическое: {calculateAverage()}</h2>

			{numbers.map((num, index) => (
				<div key={index}>
					<label>
						Элемент {index + 1}:
						<input
							type='number'
							value={num}
							onChange={e => handleInputChange(index, e.target.value)}
						/>
					</label>
				</div>
			))}
		</div>
	)
}

export default App
