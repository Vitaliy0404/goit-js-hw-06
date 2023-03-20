const refs = {
    decrementButton: document.querySelector('[data-action="decrement"]'),
    incrementButton: document.querySelector('[data-action="increment"]'),
    value: document.querySelector("#value"),
};


let counterValue = 0;

refs.decrementButton.addEventListener("click", () => {
    counterValue -= 1;
    refs.value.textContent = counterValue;
});

refs.incrementButton.addEventListener("click", () => {
    counterValue += 1;
    refs.value.textContent = counterValue;
});


// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.
