import React, { useState } from 'react'

function App() {
	const [list, setList] = useState([])
	const [inputValue, setInputValue] = useState('')

	// Добавление нового элемента в список
	const addItem = () => {
		setList([...list, inputValue])
		setInputValue('')
	}

	// Функция для добавления элемента с использованием нескольких инпутов
	const [input1, setInput1] = useState('')
	const [input2, setInput2] = useState('')
	const [input3, setInput3] = useState('')

	const addItemWithInputs = () => {
		const newItem = `${input1} ${input2} ${input3}`
		setList([...list, newItem])
		setInput1('')
		setInput2('')
		setInput3('')
	}

	return (
		<div>
			<h1>Добавить элемент в список</h1>

			{/* Кнопка для добавления одного элемента */}
			<input
				type='text'
				value={inputValue}
				onChange={e => setInputValue(e.target.value)}
				placeholder='Введите текст'
			/>
			<button onClick={addItem}>Добавить элемент</button>

			<ul>
				{list.map((item, index) => (
					<li key={index}>{item}</li>
				))}
			</ul>

			<h2>Добавить элемент с тремя инпутами</h2>

			{/* Три инпута для добавления нового элемента */}
			<input
				type='text'
				value={input1}
				onChange={e => setInput1(e.target.value)}
				placeholder='Первое поле'
			/>
			<input
				type='text'
				value={input2}
				onChange={e => setInput2(e.target.value)}
				placeholder='Второе поле'
			/>
			<input
				type='text'
				value={input3}
				onChange={e => setInput3(e.target.value)}
				placeholder='Третье поле'
			/>
			<button onClick={addItemWithInputs}>Добавить с инпутами</button>

			<ul>
				{list.map((item, index) => (
					<li key={index}>{item}</li>
				))}
			</ul>
		</div>
	)
}

export default App
