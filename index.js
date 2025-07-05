let inputText = document.getElementsByClassName('inputText')[0];
let addBtn = document.getElementsByClassName('addBtn')[0];
let todoLists = document.getElementsByClassName('todo-lists')[0];

let todos = [];

let renderTodos = () => {
    todoLists.innerText = '';
        for (let i = 0; i < todos.length; i++) {
            
            const liEl = document.createElement("li");
            liEl.classList.add("todo-items");
            if (todos[i].isCompleted) {
                liEl.classList.add("completed");
            }
            const spanEl = document.createElement("span");
            spanEl.classList.add("todoItemText");
            spanEl.innerText = todos[i].title;
            const divEl = document.createElement("div");
            const completeBtnEl = document.createElement("button");
            completeBtnEl.classList.add("btn", "btn-success", "btn-complete")
            completeBtnEl.innerText = todos[i].isCompleted ? "Uncomplete" : "Complete";
            completeBtnEl.addEventListener("click", () => {
                todos[i].isCompleted = !todos[i].isCompleted;
                renderTodos();
            })
            const editBtnEl = document.createElement("button");
            editBtnEl.classList.add("btn", "btn-secondary", "btn-edit")
            editBtnEl.innerText = "Edit";
            editBtnEl.addEventListener("click", () => {
                let newText = prompt('Enter update text', todos[i].title);
                if (newText.trim !== '') {
                    todos[i].title = newText;
                    renderTodos();
                }
            })
            const deleteBtnEl = document.createElement("button");
            deleteBtnEl.classList.add("btn", "btn-danger", "btn-delete")
            deleteBtnEl.innerText = "Delete";
            deleteBtnEl.addEventListener("click", () => {
                todos.splice(i, 1);
                renderTodos();
            })
            divEl.append(completeBtnEl, editBtnEl, deleteBtnEl);
            liEl.append(spanEl, divEl);
            todoLists.append(liEl);

        }
    }

addBtn.addEventListener('click', () => {
    let inputValue = {
        title : inputText.value,
        isCompleted : false
    }
    if (inputValue.title.trim() != '') {
        todos.push(inputValue);
        inputText.value = '';
        renderTodos();
    }
})
    
    
