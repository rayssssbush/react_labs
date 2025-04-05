import React, { useState } from 'react'

function App() {
	// Для первой задачи
	const [isChecked, setIsChecked] = useState(false)
	const [message, setMessage] = useState('')

	// Для второй задачи
	const [htmlChecked, setHtmlChecked] = useState(false)
	const [cssChecked, setCssChecked] = useState(false)
	const [jsChecked, setJsChecked] = useState(false)

	// Обработчик для первой задачи
	const handleGreeting = () => {
		if (isChecked) {
			setMessage('Привет, пользователь!')
		} else {
			setMessage('До свидания!')
		}
	}

	// Обработчик для второй задачи
	const handleHtmlChange = e => setHtmlChecked(e.target.checked)
	const handleCssChange = e => setCssChecked(e.target.checked)
	const handleJsChange = e => setJsChecked(e.target.checked)

	return (
		<div>
			{/* Задача 1: Приветствие и прощание по чекбоксу */}
			<div>
				<input
					type='checkbox'
					checked={isChecked}
					onChange={e => setIsChecked(e.target.checked)}
				/>
				<button onClick={handleGreeting}>Показать сообщение</button>
				<p>{message}</p>
			</div>

			{/* Задача 2: Выбор языков */}
			<div>
				<h3>Выберите языки, которые вы знаете:</h3>
				<label>
					<input
						type='checkbox'
						checked={htmlChecked}
						onChange={handleHtmlChange}
					/>
					HTML
				</label>
				<p>{htmlChecked ? 'Вы знаете HTML' : 'Вы не выбрали HTML'}</p>

				<label>
					<input
						type='checkbox'
						checked={cssChecked}
						onChange={handleCssChange}
					/>
					CSS
				</label>
				<p>{cssChecked ? 'Вы знаете CSS' : 'Вы не выбрали CSS'}</p>

				<label>
					<input
						type='checkbox'
						checked={jsChecked}
						onChange={handleJsChange}
					/>
					JS
				</label>
				<p>{jsChecked ? 'Вы знаете JS' : 'Вы не выбрали JS'}</p>
			</div>
		</div>
	)
}

export default App
