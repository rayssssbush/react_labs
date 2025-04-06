// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Products from './components/Products'
import Students from './components/Students'

function App() {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<h1>Welcome to our app</h1>} />
				<Route path='products' element={<Products />} />
				<Route path='students' element={<Students />} />
			</Routes>
		</Router>
	)
}

export default App
