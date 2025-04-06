// src/routes/root.jsx
import { useLoaderData } from 'react-router-dom' // Импортируем хук для получения данных загрузчика

function Root() {
	const { students } = useLoaderData() // Получаем данные студентов, переданные загрузчиком

	return (
		<div>
			<h1>Welcome to the Student App</h1>
			<h2>Student List</h2>
			<ul>
				{students.map((student, index) => (
					<li key={index}>
						<p>Name: {student.name}</p>
						<p>Surname: {student.surname}</p>
						<p>Year of Admission: {student.year}</p>
						<p>Specialty: {student.specialty}</p>
					</li>
				))}
			</ul>
		</div>
	)
}

export default Root
