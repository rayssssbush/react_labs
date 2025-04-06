import localforage from 'localforage'
import { nanoid } from 'nanoid' // Импортируем библиотеку nanoid для генерации уникальных id

// Функция для получения списка студентов из хранилища
export async function getStudents() {
	await someNetwork()
	let students = await localforage.getItem('students')
	if (!students) students = []
	return students
}

// Функция для создания нового студента
export async function createStudent() {
	await someNetwork()
	let id = nanoid(6) // Генерация уникального id для студента
	let student = { id } // Новый студент с уникальным id
	let students = await getStudents() // Получаем текущий список студентов
	students.unshift(student) // Добавляем студента в начало списка
	await setStudents(students) // Обновляем список студентов в хранилище
	return student // Возвращаем новый объект студента
}

// Функция для обновления списка студентов в хранилище
function setStudents(students) {
	return localforage.setItem('students', students) // Сохраняем новый список студентов в хранилище
}

// Для имитации задержки при сетевых запросах
let someCache = {}

async function someNetwork(key) {
	if (!key) {
		someCache = {}
	}

	if (someCache[key]) {
		return
	}

	someCache[key] = true

	return new Promise(res => {
		setTimeout(res, Math.random() * 700) // Имитация задержки
	})
}
