import React from 'react'
import ReactDOM from 'react-dom'

// Функция для генерации уникальных ID (можно заменить на библиотеку)
function id() {
	return Math.random().toString(36).substr(2, 9)
}

// Компонент User
function User({ name, surn, age }) {
	return (
		<tr>
			<td>{name}</td>
			<td>{surn}</td>
			<td>{age}</td>
		</tr>
	)
}

// Массив пользователей
const users = [
	{ id: id(), name: 'user1', surn: 'surn1', age: 30 },
	{ id: id(), name: 'user2', surn: 'surn2', age: 31 },
	{ id: id(), name: 'user3', surn: 'surn3', age: 32 },
]

// Компонент App
function App() {
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
								surn={user.surn}
								age={user.age}
							/>
						))
					}
				</tbody>
			</table>
		</div>
	)
}

// Рендерим компонент App
ReactDOM.render(<App />, document.getElementById('root'))
