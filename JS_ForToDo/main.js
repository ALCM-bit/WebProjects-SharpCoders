const buttonAdd = document.querySelector("#button-task");
const task = document.querySelector("#task-writer");

let tasks = [];
function adicionarTarefa(nomeDaTarefa) {
  // Cria um novo elemento HTML para o card
  const taskCard = document.createElement("div");
  taskCard.classList.add("task-card");

  // Cria um elemento para o título da tarefa
  const taskTitle = document.createElement("h1");
  taskTitle.textContent = nomeDaTarefa;
  taskCard.appendChild(taskTitle);

  // Cria um botão para marcar a tarefa como concluída
  const taskButton = document.createElement("button");
  taskButton.textContent = "OK";
  taskCard.appendChild(taskButton);

  // Adiciona o card ao container de tarefas
  const taskContainer = document.getElementById("container");
  taskContainer.appendChild(taskCard);

  // Cria um botão para excluir a tarefa
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Excluir";
  taskCard.appendChild(deleteButton);

  // Adiciona um event listener para o botão de excluir
  deleteButton.addEventListener("click", function () {
    taskCard.remove(); // Remove o card do DOM
  });

  taskButton.addEventListener("click", function () {
    console.log("ok");
  });
}

buttonAdd.addEventListener("click", (event) => {
  if (task.value !== "") {
    adicionarTarefa(task.value);
    task.value = "";
  } else {
    return;
  }
});

buttonAdd;
