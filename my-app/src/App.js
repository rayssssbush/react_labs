import React, { useState } from 'react'

function App() {
	// Инициализация массива с числами
	const [numbers, setNumbers] = useState([1, 2, 3, 4, 5])
	const [inputValue, setInputValue] = useState('')

	// Функция для возведения числа в квадрат
	const handleSquare = index => {
		const newNumbers = [...numbers]
		newNumbers[index] = newNumbers[index] ** 2
		setNumbers(newNumbers)
	}

	// Функция для удаления элемента
	const handleDelete = index => {
		const newNumbers = numbers.filter((_, i) => i !== index)
		setNumbers(newNumbers)
	}

	// Функция для переворота порядка списка
	const reverseOrder = () => {
		setNumbers([...numbers].reverse())
	}

	// Функция для установки текста в инпут при клике на li
	const handleClick = text => {
		setInputValue(text)
	}

	// Функция для обновления текста в li при потере фокуса
	const handleBlur = index => {
		const newNumbers = [...numbers]
		newNumbers[index] = inputValue
		setNumbers(newNumbers)
	}

	return (
		<div>
			<h1>Список чисел</h1>
			<ul>
				{numbers.map((number, index) => (
					<li key={index}>
						{number}
						<button onClick={() => handleDelete(index)}>Удалить</button>
						<button onClick={() => handleSquare(index)}>Квадрат</button>
					</li>
				))}
			</ul>

			<button onClick={reverseOrder}>Перевернуть порядок</button>

			<input
				type='text'
				value={inputValue}
				onChange={e => setInputValue(e.target.value)}
				onBlur={() => handleBlur(numbers.indexOf(inputValue))}
				placeholder='Изменить число'
			/>

			<h2>Кликните на число, чтобы изменить его:</h2>
			<ul>
				{numbers.map((number, index) => (
					<li key={index} onClick={() => handleClick(number)}>
						{number}
					</li>
				))}
			</ul>
		</div>
	)
}

export default App
