function App() {
	const isAdmin = true // true или false в зависимости от того, является ли пользователь админом

	return (
		<div>
			{isAdmin && (
				<div>
					<p>Вы администратор.</p>
					<p>Доступ к админской панели разрешен.</p>
				</div>
			)}
		</div>
	)
}

export default App
