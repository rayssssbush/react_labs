function App() {
	const arr = [<li>1</li>, <li>2</li>, <li>3</li>, <li>4</li>, <li>5</li>]

	return (
		<ul>
			{arr.map(item => item)}{' '}
			{/* Мапим элементы массива и отображаем их внутри ul */}
		</ul>
	)
}

export default App
