import Root, { loader as rootLoader, action as rootAction } from './routes/root'

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		errorElement: <ErrorPage404 />,
		loader: rootLoader,
		action: rootAction, // Добавляем action
		children: [
			{
				path: 'students/:studentId',
				element: <Student />,
			},
		],
	},
])
