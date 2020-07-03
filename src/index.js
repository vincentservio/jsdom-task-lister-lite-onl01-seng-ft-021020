document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const submitTask = document.getElementById("create-task-form")
  const listTask = document.getElementById("tasks")

  submitTask.addEventListener("submit", (event){
    event.preventDefault()
    const taskInput = submitTask["new-task-description"].value
    
    listTask["new-task-description"].value = 
  )}
  listTask.addEventListener("click", (e) => {
    //e.preventDefault()
    clickMe(e);
});
