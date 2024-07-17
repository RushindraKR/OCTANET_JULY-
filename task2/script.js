function addTask() {
    var input = document.getElementById("taskInput");
    var task = input.value;
    
    if (task === '') {
      alert("Please enter a task");
      return;
    }
    
    var ul = document.getElementById("taskList");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(task));
    ul.appendChild(li);
    
    input.value = '';
  }
  