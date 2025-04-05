function App() {
	const arr = [1, 2, 3, 4, 5]

	return (
		<ul>
			{arr.map(item => (
				<li key={item}>{item}</li>
			))}
		</ul>
	)
}

export default App
