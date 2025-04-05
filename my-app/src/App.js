function getDigitsSum(number) {
	// Преобразуем число в строку, разделяем на массив цифр, затем суммируем их
	const sum = number
		.toString()
		.split('')
		.reduce((acc, digit) => acc + Number(digit), 0)
	return sum
}

const result = getDigitsSum(123) // Вызов функции с числом 123
console.log(result) // Выводим результат на экран
