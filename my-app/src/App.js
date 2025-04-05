import React, { useState } from 'react'
import styled from 'styled-components'

// Стили с использованием Styled Components
const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 20px;
`

const Heading = styled.h2`
	font-size: 24px;
	font-weight: bold;
`

const Input = styled.input`
	padding: 10px;
	font-size: 16px;
	margin: 10px;
	border-radius: 5px;
	border: 1px solid #ccc;
`

const Result = styled.p`
	font-size: 20px;
	margin-bottom: 20px;
`

function App() {
	// Состояния для компонентов
	const [fahrenheit, setFahrenheit] = useState('')
	const [value, setValue] = useState('')
	const [nums, setNums] = useState([1, 2, 3])
	const [notes, setNotes] = useState([1, 2, 3, 4, 5])
	const [editNum, setEditNum] = useState(null)

	// Функция для конвертации температуры
	const fahrenheitToCelsius = f => ((f - 32) * 5) / 9

	const handleFahrenheitChange = event => {
		const value = event.target.value
		setFahrenheit(value)
	}

	const celsius = fahrenheit ? fahrenheitToCelsius(fahrenheit).toFixed(2) : ''

	// Функции для калькулятора суммы
	const handleChange = event => {
		setValue(event.target.value)
	}

	const handleBlur = event => {
		const newNum = Number(event.target.value)
		if (!isNaN(newNum)) {
			setNums([...nums, newNum])
		}
		setValue('')
	}

	const sum = nums.reduce((acc, elem) => acc + Number(elem), 0)

	// Функции для редактирования элементов массива
	const startEdit = index => {
		setEditNum(index)
		setValue(notes[index])
	}

	const changeItem = event => {
		const updatedNotes = [...notes]
		updatedNotes[editNum] = event.target.value
		setNotes(updatedNotes)
		setValue(event.target.value)
	}

	return (
		<Container>
			{/* Конвертер температуры */}
			<div>
				<Heading>Temperature Converter</Heading>
				<Input
					type='number'
					value={fahrenheit}
					onChange={handleFahrenheitChange}
					placeholder='Fahrenheit'
				/>
				<Input type='text' value={celsius} readOnly placeholder='Celsius' />
			</div>

			{/* Калькулятор суммы */}
			<div>
				<Heading>Sum Calculator</Heading>
				<Result>Sum: {sum}</Result>
				<Input value={value} onChange={handleChange} onBlur={handleBlur} />
			</div>

			{/* Редактирование элементов массива */}
			<div>
				<Heading>Edit Notes</Heading>
				{notes.map((note, index) => (
					<p key={index} onClick={() => startEdit(index)}>
						{note}
					</p>
				))}
				{editNum !== null && <Input value={value} onChange={changeItem} />}
			</div>
		</Container>
	)
}

export default App
