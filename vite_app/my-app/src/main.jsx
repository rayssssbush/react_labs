import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import {
	createBrowserRouter,
	RouterProvider,
	createRoutesFromElements,
	Route,
} from 'react-router-dom'

// Новый код с использованием JSX
const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<p>I'm number one in React!</p>} />
	)
)

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)
