document.addEventListener('DOMContentLoaded', () => {
    const todoInput = document.getElementById('todo-input');
    const addButton = document.getElementById('add-button');
    const todoList = document.getElementById('todo-list');

    // 클릭하면 addTodo 호출
    addButton.addEventListener('click', addTodo);

    function addTodo() {
        const todoText = todoInput.value.trim();
        if (todoText === '') return;

        const todoItem = document.createElement('li'); // 리스트 생성
        todoItem.className = 'todo-item';
        todoItem.innerHTML = `
            <span>${todoText}</span>
            <input type="checkbox" class="delete-checkbox">
        `;

        // 체크하면 해당 리스트 삭제
        const deleteCheckbox = todoItem.querySelector('.delete-checkbox');
        deleteCheckbox.addEventListener('change', () => {
            if (deleteCheckbox.checked) {
                todoList.removeChild(todoItem);
            }
        });

        todoList.appendChild(todoItem);
        todoInput.value = '';
        todoInput.focus();
    }
});
