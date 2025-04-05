import React, { useState } from 'react'

// 1. Конвертация температуры между Фаренгейтом и Цельсием
function TemperatureConverter() {
	const [fahrenheit, setFahrenheit] = useState('')

	const fahrenheitToCelsius = f => ((f - 32) * 5) / 9

	const handleFahrenheitChange = event => {
		const value = event.target.value
		setFahrenheit(value)
	}

	const celsius = fahrenheit ? fahrenheitToCelsius(fahrenheit).toFixed(2) : ''

	return (
		<div>
			<input
				type='number'
				value={fahrenheit}
				onChange={handleFahrenheitChange}
				placeholder='Fahrenheit'
			/>
			<input type='text' value={celsius} readOnly placeholder='Celsius' />
		</div>
	)
}

// 2. Калькулятор для вычисления суммы элементов массива
function Calculator() {
	const [value, setValue] = useState('')
	const [nums, setNums] = useState([1, 2, 3])

	function handleChange(event) {
		setValue(event.target.value)
	}

	function handleBlur(event) {
		const newNum = Number(event.target.value)
		if (!isNaN(newNum)) {
			setNums([...nums, newNum])
		}
		setValue('')
	}

	const sum = nums.reduce((acc, elem) => acc + Number(elem), 0)

	return (
		<div>
			<p>Sum: {sum}</p>
			<input value={value} onChange={handleChange} onBlur={handleBlur} />
		</div>
	)
}

// 3. Редактирование элементов массива
function App() {
	const [notes, setNotes] = useState([1, 2, 3, 4, 5])
	const [editNum, setEditNum] = useState(null)
	const [value, setValue] = useState('')

	const result = notes.map((note, index) => (
		<p key={index} onClick={() => startEdit(index)}>
			{note}
		</p>
	))

	function startEdit(index) {
		setEditNum(index)
		setValue(notes[index])
	}

	function changeItem(event) {
		const updatedNotes = [...notes]
		updatedNotes[editNum] = event.target.value
		setNotes(updatedNotes)
		setValue(event.target.value)
	}

	return (
		<div>
			<h2>Notes</h2>
			{result}
			{editNum !== null && <input value={value} onChange={changeItem} />}
		</div>
	)
}

function AppWrapper() {
	return (
		<div>
			<TemperatureConverter />
			<Calculator />
			<App />
		</div>
	)
}

export default AppWrapper
