import React, { useState } from 'react'

function App() {
	// Стейт для хранения значений инпутов
	const [values, setValues] = useState({
		input1: '',
		input2: '',
		input3: '',
		input4: '',
		input5: '',
	})

	// Функция для обработки изменения значений инпутов
	const handleChange = event => {
		const { name, value } = event.target
		setValues(prevValues => ({
			...prevValues,
			[name]: value,
		}))
	}

	// Функция для вычисления среднего арифметического
	const getAverage = () => {
		const nums = Object.values(values)
			.map(Number)
			.filter(num => !isNaN(num))
		const sum = nums.reduce((acc, curr) => acc + curr, 0)
		return nums.length > 0 ? sum / nums.length : 0
	}

	return (
		<div>
			{/* Инпуты для ввода чисел */}
			<input
				type='number'
				name='input1'
				value={values.input1}
				onChange={handleChange}
				placeholder='Введите число'
			/>
			<input
				type='number'
				name='input2'
				value={values.input2}
				onChange={handleChange}
				placeholder='Введите число'
			/>
			<input
				type='number'
				name='input3'
				value={values.input3}
				onChange={handleChange}
				placeholder='Введите число'
			/>
			<input
				type='number'
				name='input4'
				value={values.input4}
				onChange={handleChange}
				placeholder='Введите число'
			/>
			<input
				type='number'
				name='input5'
				value={values.input5}
				onChange={handleChange}
				placeholder='Введите число'
			/>

			{/* Абзац для вывода среднего арифметического */}
			<p>Среднее арифметическое: {getAverage()}</p>
		</div>
	)
}

export default App
