// src/forStorage.js
import localforage from 'localforage'

// Функция для получения продуктов из хранилища
export async function getProducts() {
	await someNetwork()
	let products = await localforage.getItem('products')
	if (!products) products = [] // Если продуктов нет, создаем пустой массив
	return products
}
// Функция для получения студентов из хранилища
export async function getStudents() {
	await someNetwork()
	let students = await localforage.getItem('students')
	if (!students) students = [] // Если студентов нет, создаем пустой массив
	return students
}
// Имитация задержки для сети
let someCache = {}

async function someNetwork(key) {
	if (!key) {
		someCache = {} // Очищаем кеш
	}

	if (someCache[key]) {
		return // Если кеширован, возвращаем без задержки
	}

	someCache[key] = true

	return new Promise(res => {
		setTimeout(res, Math.random() * 700) // Имитация задержки до 0.7 секунды
	})
}
