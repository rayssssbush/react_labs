import React, { useState } from 'react'

function App() {
	// Стейты для хранения текста из инпутов
	const [inputText1, setInputText1] = useState('')
	const [inputText2, setInputText2] = useState('')

	// Функции для обновления стейтов
	const handleInput1Change = event => {
		setInputText1(event.target.value)
	}

	const handleInput2Change = event => {
		setInputText2(event.target.value)
	}

	return (
		<div>
			{/* Первый инпут */}
			<input
				type='text'
				value={inputText1}
				onChange={handleInput1Change}
				placeholder='Введите текст 1'
			/>
			<p>{inputText1}</p> {/* Вывод текста из первого инпута */}
			{/* Второй инпут */}
			<input
				type='text'
				value={inputText2}
				onChange={handleInput2Change}
				placeholder='Введите текст 2'
			/>
			<p>{inputText2}</p> {/* Вывод текста из второго инпута */}
		</div>
	)
}

export default App
