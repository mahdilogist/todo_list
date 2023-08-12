const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');

// add todo
const generateTemplate = todo => {
    const html = `
        <li class="list-group-item d-flex justify-content-between alighn-item-center">
        <span>${todo}</span>
        <span class="material-symbols-outlined delete">delete</span>
        </li>
    `;
    list.innerHTML += html;
};

addForm.addEventListener('submit', e => {
    e.preventDefault();
    const todo = addForm.add.value.trim();
    if (todo.length) {
        generateTemplate(todo);
        addForm.reset();
    }
});

// delete todo
list.addEventListener('click', e => {

    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
});

// search in todos

const searchFiltered = (term) => {

    Array.from(list.children)
        .filter(item => !item.textContent.toLowerCase().includes(term))
        .forEach(todo => todo.classList.add("filtered"));

    Array.from(list.children)
        .filter(item => item.textContent.toLowerCase().includes(term))
        .forEach(todo => todo.classList.remove("filtered"));
};

// search in todo  =>  keyUp event

search.addEventListener('keyup', () => {
    const term = search.value.toLowerCase().trim();
    searchFiltered(term);
});