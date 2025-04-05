import React, { useState } from 'react'

function App() {
	const [list, setList] = useState([
		{ id: 1, name: 'Item 1', description: 'Description 1' },
		{ id: 2, name: 'Item 2', description: 'Description 2' },
		{ id: 3, name: 'Item 3', description: 'Description 3' },
	])

	// Функция для удаления элемента
	const deleteItem = id => {
		setList(list.filter(item => item.id !== id))
	}

	// Функции для редактирования элемента
	const [name, setName] = useState('')
	const [description, setDescription] = useState('')

	const editItem = id => {
		const updatedList = list.map(item => {
			if (item.id === id) {
				return { ...item, name, description }
			}
			return item
		})
		setList(updatedList)
	}

	// Функция для заполнения инпутов данными элемента
	const fillInputs = id => {
		const item = list.find(item => item.id === id)
		if (item) {
			setName(item.name)
			setDescription(item.description)
		}
	}

	return (
		<div>
			<h1>Редактирование и удаление элементов</h1>

			<ul>
				{list.map(item => (
					<li key={item.id}>
						{item.name} - {item.description}
						{/* Кнопка для удаления элемента */}
						<button onClick={() => deleteItem(item.id)}>Удалить</button>
						{/* Кнопка для заполнения инпутов данными элемента */}
						<button onClick={() => fillInputs(item.id)}>Редактировать</button>
					</li>
				))}
			</ul>

			<h2>Редактирование элемента</h2>
			<input
				type='text'
				value={name}
				onChange={e => setName(e.target.value)}
				placeholder='Имя'
			/>
			<input
				type='text'
				value={description}
				onChange={e => setDescription(e.target.value)}
				placeholder='Описание'
			/>
			{/* Кнопка для обновления элемента */}
			<button onClick={() => editItem(1)}>Обновить</button>
		</div>
	)
}

export default App
