import React, { useState } from 'react'

function App() {
	// Состояния для компонентов
	const [fahrenheit, setFahrenheit] = useState('')
	const [value, setValue] = useState('')
	const [nums, setNums] = useState([1, 2, 3])
	const [notes, setNotes] = useState([1, 2, 3, 4, 5])
	const [editNum, setEditNum] = useState(null)

	// Определение переменных для CSS свойств
	const padding = '10px'
	const fontSize = '16px'
	const margin = '10px'
	const borderRadius = '5px'
	const borderColor = '#ccc'
	const fontSizeResult = '20px'
	const fontSizeHeading = '24px'
	const fontWeight = 'bold'

	// Стили для компонентов
	const styles = {
		inputStyle: {
			padding: padding,
			fontSize: fontSize,
			margin: margin,
			borderRadius: borderRadius,
			border: `1px solid ${borderColor}`,
		},
		resultStyle: {
			fontSize: fontSizeResult,
			marginBottom: '20px',
		},
		containerStyle: {
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			marginTop: '20px',
		},
		headingStyle: {
			fontSize: fontSizeHeading,
			fontWeight: fontWeight,
		},
	}

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
		<div style={styles.containerStyle}>
			{/* Конвертер температуры */}
			<div>
				<h2 style={styles.headingStyle}>Temperature Converter</h2>
				<input
					type='number'
					value={fahrenheit}
					onChange={handleFahrenheitChange}
					placeholder='Fahrenheit'
					style={styles.inputStyle}
				/>
				<input
					type='text'
					value={celsius}
					readOnly
					placeholder='Celsius'
					style={styles.inputStyle}
				/>
			</div>

			{/* Калькулятор суммы */}
			<div>
				<h2 style={styles.headingStyle}>Sum Calculator</h2>
				<p style={styles.resultStyle}>Sum: {sum}</p>
				<input
					value={value}
					onChange={handleChange}
					onBlur={handleBlur}
					style={styles.inputStyle}
				/>
			</div>

			{/* Редактирование элементов массива */}
			<div>
				<h2 style={styles.headingStyle}>Edit Notes</h2>
				{notes.map((note, index) => (
					<p key={index} onClick={() => startEdit(index)}>
						{note}
					</p>
				))}
				{editNum !== null && (
					<input
						value={value}
						onChange={changeItem}
						style={styles.inputStyle}
					/>
				)}
			</div>
		</div>
	)
}

export default App
