import React, { useState } from 'react'
import ReactDOM from 'react-dom'

// Функция для генерации уникальных ID (можно заменить на библиотеку)
function id() {
	return Math.random().toString(36).substr(2, 9)
}

// Компонент User
function User({ name, surname, age }) {
	return (
		<tr>
			<td>{name}</td>
			<td>{surname}</td>
			<td>{age}</td>
		</tr>
	)
}

// Компонент Users
function Users() {
	const [users] = useState([
		{ id: id(), name: 'user1', surname: 'surn1', age: 30 },
		{ id: id(), name: 'user2', surname: 'surn2', age: 31 },
		{ id: id(), name: 'user3', surname: 'surn3', age: 32 },
	])

	return (
		<div>
			<h1>Список пользователей</h1>
			<table border='1'>
				<thead>
					<tr>
						<th>Имя</th>
						<th>Фамилия</th>
						<th>Возраст</th>
					</tr>
				</thead>
				<tbody>
					{
						// Цикл для вывода пользователей
						users.map(user => (
							<User
								key={user.id}
								name={user.name}
								surname={user.surname}
								age={user.age}
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
