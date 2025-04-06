// src/routes/student.jsx
function Student() {
	const student = {
		firstName: 'John',
		lastName: 'Doe',
		enrollmentYear: 2020,
		major: 'Computer Science',
	}

	return (
		<div>
			<h2>Student Page</h2>
			<p>
				Name: {student.firstName} {student.lastName}
			</p>
			<p>Enrollment Year: {student.enrollmentYear}</p>
			<p>Major: {student.major}</p>
		</div>
	)
}

export default Student
