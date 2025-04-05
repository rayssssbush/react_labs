function App() {
	const handleClick = event => {
		console.log(event) // Выводим объект события в консоль
	}

	return <button onClick={handleClick}>Click me</button>
}
