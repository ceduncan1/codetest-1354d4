// alert("main.js");

function addTask (list) {
  // console.log('add a tast');
  var taskInput = document.getElementById("newTask");
  console.log(taskInput.value);

  var taskItem = document.createElement("li");
  taskItem.innerText = taskInput.value;
  // taskItem.innerText = "foo";

  list.appendChild(taskItem)
};

var addBtn = document.getElementById("addTask");
addBtn.onclick = function() {
  addTask(document.getElementById("taskList"))
};

