const taskEl = document.getElementById("task");
const buttonEl = document.querySelector(".btn");
const tasksEl = document.querySelector(".tasks");
let checkBoxes;

buttonEl.addEventListener("click", function () {
  const html = ` 
  <div class = "todo active flex">
  <input type="checkbox" id="tasks" class="todo-tasks" name="tasks" value="tasks" />
    <label for="tasks">${taskEl.value}</label>
    </div>`;
  if (taskEl.value !== "") tasksEl.insertAdjacentHTML("beforeend", html);

  checkBoxes = document.querySelectorAll(".todo-tasks");
  //   console.log(checkBoxes.length);
});
