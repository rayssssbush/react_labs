function getDigitsSum(number) {
	// Преобразуем число в строку, разделяем на массив цифр, затем суммируем их
	const sum = number
		.toString()
		.split('')
		.reduce((acc, digit) => acc + Number(digit), 0)
	return sum
}

const result = getDigitsSum(12345) // Вызов функции с числом 12345

// Создаем элемент абзаца и выводим в него результат
const pElement = document.createElement('p')
pElement.textContent = `Сумма цифр числа 12345: ${result}`

// Добавляем абзац на страницу
document.body.appendChild(pElement)
