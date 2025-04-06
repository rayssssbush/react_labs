// src/main.jsx
import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './routes/root' // Импортируем Root компонент
import ErrorPage404 from './error-page-404' // Импортируем страницу ошибки

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />, // Основной маршрут
		errorElement: <ErrorPage404 />, // Компонент ошибки 404
	},
])

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)
