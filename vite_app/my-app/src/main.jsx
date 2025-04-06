import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// Создаем роутер с основным маршрутом
const router = createBrowserRouter([
	{
		path: '/', // Главная страница
		element: <p>I'm number one in React!</p>, // Выводим нужный текст
	},
])

// Рендерим приложение
ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} /> {/* Подключаем роутер */}
	</React.StrictMode>
)
