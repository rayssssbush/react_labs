// src/components/Products.jsx
import { useEffect, useState } from 'react'
import { getProducts } from '../forStorage' // Импортируем нашу функцию

function Products() {
	const [products, setProducts] = useState([])

	useEffect(() => {
		async function fetchProducts() {
			const data = await getProducts() // Получаем данные из хранилища
			setProducts(data)
		}

		fetchProducts()
	}, [])

	return (
		<div>
			<h2>Products</h2>
			<ul>
				{products.map((product, index) => (
					<li key={index}>
						<p>Name: {product.name}</p>
						<p>Cost: {product.cost}</p>
						<p>Amount: {product.amount}</p>
					</li>
				))}
			</ul>
		</div>
	)
}

export default Products
