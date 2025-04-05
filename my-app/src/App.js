import React, { useState } from 'react'
import ReactDOM from 'react-dom'

// Функция для генерации уникальных ID (можно заменить на библиотеку)
function id() {
	return Math.random().toString(36).substr(2, 9)
}

// Компонент User
function User({ id, name, surname, age, onBan }) {
	const handleBanClick = () => {
		onBan(id) // Вызов функции для бана с передачей id пользователя
	}

	return (
		<tr>
			<td>{name}</td>
			<td>{surname}</td>
			<td>{age}</td>
			<td>
				<p>ID: {id}</p>
			</td>
			<td>
				<button onClick={handleBanClick}>Забанить</button>{' '}
				{/* Кнопка для бана */}
			</td>
		</tr>
	)
}

// Компонент Users
function Users() {
	const [users, setUsers] = useState([
		{ id: id(), name: 'user1', surname: 'surn1', age: 30 },
		{ id: id(), name: 'user2', surname: 'surn2', age: 31 },
		{ id: id(), name: 'user3', surname: 'surn3', age: 32 },
	])

	const handleBanUser = userId => {
		setUsers(users.filter(user => user.id !== userId)) // Удаление пользователя по его id
	}

	return (
		<div>
			<h1>Список пользователей</h1>
			<table border='1'>
				<thead>
					<tr>
						<th>Имя</th>
						<th>Фамилия</th>
						<th>Возраст</th>
						<th>ID</th>
						<th>Действие</th> {/* Новый столбец для кнопки */}
					</tr>
				</thead>
				<tbody>
					{
						// Цикл для вывода пользователей
						users.map(user => (
							<User
								key={user.id}
								id={user.id}
								name={user.name}
								surname={user.surname}
								age={user.age}
								onBan={handleBanUser} // Передача функции для бана
							/>
						))
					}
				</tbody>
			</table>
		</div>
	)
}

// Рендерим компонент Users
ReactDOM.render(<Users />, document.getElementById('root'))
