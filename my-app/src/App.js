function App() {
	const isAuth = false // Проверка на авторизацию

	return <div>{!isAuth && <p>пожалуйста, авторизуйтесь</p>}</div>
}

export default App
