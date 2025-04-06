// src/main.jsx
import { createBrowserRouter } from 'react-router-dom'
import Root, { loader as rootLoader } from './routes/root' // Импортируем компонент Root и его loader
import ErrorPage404 from './routes/ErrorPage404'
import Product from './routes/product'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		errorElement: <ErrorPage404 />,
		loader: rootLoader, // Добавляем загрузчик
		children: [
			{
				path: 'products/:productId',
				element: <Product />,
			},
		],
	},
])

export default router
