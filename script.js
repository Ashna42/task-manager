
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

const input = document.getElementById("task-input");
const list = document.getElementById("list");

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function displayTasks() {
    list.innerHTML = "";

    tasks.forEach((task, index) => {
        let item = document.createElement("li");

        let span = document.createElement("span");
        span.textContent = task.text;

        if (task.completed) {
            span.classList.add("completed");
        }

        let buttons = document.createElement("div");
        buttons.className = "task-buttons";

        let completeBtn = document.createElement("button");
        completeBtn.textContent = task.completed ? "Undo" : "Complete";

        completeBtn.onclick = function () {
            tasks[index].completed = !tasks[index].completed;
            saveTasks();
            displayTasks();
        };

        let editBtn = document.createElement("button");
        editBtn.textContent = "Edit";

        editBtn.onclick = function () {
            let updated = prompt("Edit task:", task.text);

            if (updated !== null && updated.trim() !== "") {
                tasks[index].text = updated.trim();
                saveTasks();
                displayTasks();
            }
        };

        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";

        deleteBtn.onclick = function () {
            tasks.splice(index, 1);
            saveTasks();
            displayTasks();
        };

        buttons.appendChild(completeBtn);
        buttons.appendChild(editBtn);
        buttons.appendChild(deleteBtn);

        item.appendChild(span);
        item.appendChild(buttons);

        list.appendChild(item);
    });
}

function additem() {
    let value = input.value.trim();

    if (value === "") {
        alert("Please enter a task!");
        return;
    }

    tasks.push({
        text: value,
        completed: false
    });

    input.value = "";

    saveTasks();
    displayTasks();
}

input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        additem();
    }
});

displayTasks();
