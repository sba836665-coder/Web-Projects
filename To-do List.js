function addTask(){
    const newTask = document.createElement('li')
    const TaskList= document.getElementById("TaskList")
    TaskList.appendChild(newTask)
    newTask.textContent=document.getElementById('inputTask').value
    document.getElementById('inputTask').value = ""
    deleteTask(newTask)
}
function deleteTask(newTask){
    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = "Delete"
    newTask.appendChild(deleteBtn)
        deleteBtn.onclick = function (){
            newTask.remove()
        }
    
}