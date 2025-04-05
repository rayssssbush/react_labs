function App() {
	const handleClick = event => {
		console.log(event.target) // Выводим элемент, на который был совершен клик
	}

	return <button onClick={handleClick}>Click me</button>
}
