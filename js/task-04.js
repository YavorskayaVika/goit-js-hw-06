const counterValue = document.querySelector('#value')

const buttonMinus = document.querySelector('[data-action="decrement"]');
const buttonPlus = document.querySelector('[data-action="increment"]');

const counter = {
    count:0,
    descrementCount() {
        this.count -= 1;
        counterValue.textContent =this.count;
    },
    incrementCount() {
        this.count += 1;
        counterValue.textContent = this.count;
    },
};

buttonMinus.addEventListener("click",counter.descrementCount.bind(counter))
buttonPlus.addEventListener("click",counter.descrementCount.bind(counter))


// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.