// Массив данных, на основе которого будет строиться список
const products = ['Яблоко', 'Банан', 'Груша', 'Апельсин'];

// Функция для создания списка
function createList(items) {
    const ul = document.getElementById('product-list'); // Получаем элемент <ul> из HTML

    // Очищаем список перед добавлением новых элементов (если нужно)
    ul.innerHTML = '';

    // Проходим по массиву и создаем для каждого элемента li с кнопкой
    items.forEach(item => {
        const li = document.createElement('li');  // Создаем элемент списка <li>
        li.textContent = item;  // Добавляем текст из массива

        const deleteButton = document.createElement('button');  // Создаем кнопку
        deleteButton.textContent = 'Удалить';  // Текст кнопки

        // Добавляем обработчик событий на кнопку
        deleteButton.addEventListener('click', function() {
            ul.removeChild(li);  // Удаляем <li> из списка при нажатии на кнопку
        });

        li.appendChild(deleteButton);  // Добавляем кнопку в элемент списка
        ul.appendChild(li);  // Добавляем элемент <li> в <ul>
    });
}

// Вызовем функцию для создания списка на странице
createList(products);
