import React, { useState } from 'react'
import Product from './Product' // Если это отдельный компонент

const initProds = [
	{ id: 1, name: 'prod1', cost: 'cost1', catg: 'catg1' },
	{ id: 2, name: 'prod2', cost: 'cost2', catg: 'catg2' },
	{ id: 3, name: 'prod3', cost: 'cost3', catg: 'catg3' },
]

function App() {
	const [prods, setProds] = useState(initProds)

	// Функция для обновления данных
	function changeField(id, field, event) {
		setProds(
			prods.map(prod => {
				if (prod.id === id) {
					prod[field] = event.target.value
				}
				return prod
			})
		)
	}

	const rows = prods.map(prod => (
		<Product
			key={prod.id}
			id={prod.id}
			name={prod.name}
			cost={prod.cost}
			catg={prod.catg}
			changeField={changeField}
		/>
	))

	return (
		<div>
			<table>
				<tbody>{rows}</tbody>
			</table>
		</div>
	)
}

export default App
