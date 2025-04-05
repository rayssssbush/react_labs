function App() {
	const arr = ['a', 'b', 'c', 'd', 'e']

	return (
		<ul>
			{arr.map(item => (
				<li key={item}>{item}</li>
			))}{' '}
			{/* Используем map для генерации li для каждого элемента массива */}
		</ul>
	)
}

export default App
