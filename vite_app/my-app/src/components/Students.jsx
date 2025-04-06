// src/components/Students.jsx
import { useEffect, useState } from 'react'
import { getStudents } from '../forStorage' // Импортируем нашу функцию

function Students() {
	const [students, setStudents] = useState([])

	useEffect(() => {
		async function fetchStudents() {
			const data = await getStudents() // Получаем данные из хранилища
			setStudents(data)
		}

		fetchStudents()
	}, [])

	return (
		<div>
			<h2>Students</h2>
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

export default Students
