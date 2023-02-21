const buttonAdd = document.querySelector("#button-task");
const task = document.querySelector("#task-writer");

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
}

buttonAdd.addEventListener("click", (event) => {
  console.log("Hello");
  adicionarTarefa(task);
});
