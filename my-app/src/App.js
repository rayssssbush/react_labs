function App() {
	const isAuth = true // Проверка на авторизацию

	return <div>{isAuth && <p>вы авторизованы</p>}</div>
}

export default App
