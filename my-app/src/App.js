import React, { useState } from 'react'

function App() {
	// Инициализация массива элементов
	const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3'])

	// Функция для добавления нового элемента в конец массива
	const addItem = () => {
		setItems([...items, `Item ${items.length + 1}`])
	}

	// Функция для добавления нового элемента из инпута
	const [inputText, setInputText] = useState('')

	const addItemFromInput = () => {
		if (inputText.trim()) {
			setItems([...items, inputText])
			setInputText('') // Очистка инпута после добавления
		}
	}

	return (
		<div>
			<h1>Список:</h1>
			<ul>
				{items.map((item, index) => (
					<li key={index}>{item}</li>
				))}
			</ul>

			{/* Кнопка для добавления элемента в конец списка */}
			<button onClick={addItem}>Добавить элемент</button>

			{/* Инпут и кнопка для добавления нового элемента из текста инпута */}
			<div>
				<input
					type='text'
					value={inputText}
					onChange={e => setInputText(e.target.value)}
					placeholder='Введите текст'
				/>
				<button onClick={addItemFromInput}>Добавить из инпута</button>
			</div>
		</div>
	)
}

export default App
