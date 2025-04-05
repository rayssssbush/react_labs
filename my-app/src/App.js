import React, { useState } from 'react'

function App() {
	// Стейт для чисел в инпутах
	const [num1, setNum1] = useState('')
	const [num2, setNum2] = useState('')
	const [result, setResult] = useState('')

	// Стейт для дат
	const [date1, setDate1] = useState('')
	const [date2, setDate2] = useState('')
	const [dateDiff, setDateDiff] = useState('')

	// Стейт для числа для вычисления суммы и произведения цифр
	const [num, setNum] = useState('')
	const [sumDigits, setSumDigits] = useState('')
	const [productDivisors, setProductDivisors] = useState('')

	// Функции для вычислений
	const handleSum = () => {
		setResult(Number(num1) + Number(num2))
	}

	const handleProduct = () => {
		setResult(Number(num1) * Number(num2))
	}

	const handleDateDifference = () => {
		const diffTime = new Date(date2) - new Date(date1)
		const diffDays = Math.ceil(diffTime / (1000 * 3600 * 24))
		setDateDiff(diffDays)
	}

	const handleSumDigits = e => {
		const number = e.target.value
		const sum = number.split('').reduce((acc, curr) => acc + Number(curr), 0)
		setSumDigits(sum)
	}

	const handleProductDivisors = e => {
		const number = e.target.value
		const divisors = []
		for (let i = 1; i <= number; i++) {
			if (number % i === 0) divisors.push(i)
		}
		const product = divisors.reduce((acc, curr) => acc * curr, 1)
		setProductDivisors(product)
	}

	// Получаем текущую дату для инпутов
	const currentDate = new Date().toISOString().split('T')[0]

	return (
		<div>
			{/* Задача 1 и 2 */}
			<div>
				<input
					type='number'
					value={num1}
					onChange={e => setNum1(e.target.value)}
					placeholder='Введите число 1'
				/>
				<input
					type='number'
					value={num2}
					onChange={e => setNum2(e.target.value)}
					placeholder='Введите число 2'
				/>
				<button onClick={handleSum}>Сумма</button>
				<button onClick={handleProduct}>Произведение</button>
				<p>Результат: {result}</p>
			</div>

			{/* Задача 2 */}
			<div>
				<input
					type='date'
					value={date1}
					onChange={e => setDate1(e.target.value)}
				/>
				<input
					type='date'
					value={date2}
					onChange={e => setDate2(e.target.value)}
				/>
				<button onClick={handleDateDifference}>Разница в днях</button>
				<p>Разница в днях: {dateDiff}</p>
			</div>

			{/* Задача 3 (с текущей датой по умолчанию) */}
			<div>
				<input
					type='date'
					value={date1 || currentDate}
					onChange={e => setDate1(e.target.value)}
				/>
				<input
					type='date'
					value={date2 || currentDate}
					onChange={e => setDate2(e.target.value)}
				/>
				<button onClick={handleDateDifference}>Разница в днях</button>
				<p>Разница в днях: {dateDiff}</p>
			</div>

			{/* Задача 4 */}
			<div>
				<input
					type='number'
					value={num}
					onChange={e => setNum(e.target.value)}
					onBlur={handleSumDigits}
					placeholder='Введите число'
				/>
				<p>Сумма цифр: {sumDigits}</p>
			</div>

			{/* Задача 5 */}
			<div>
				<input
					type='number'
					value={num}
					onChange={e => setNum(e.target.value)}
					onBlur={handleProductDivisors}
					placeholder='Введите число'
				/>
				<p>Произведение делителей: {productDivisors}</p>
			</div>
		</div>
	)
}

export default App
