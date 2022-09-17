//definimos variables
const input=document.querySelector('.input-text');
const addForm=document.querySelector('.add-form');
const taskList=document.querySelector('.task-list');
const deleteBtn=document.querySelector('.deleteAll-btn');


//traigo elementos del storage y si no hay nada traigo array vacio
let tasks=JSON.parse(localStorage.getItem('tasks')) || [];

//a medida que voy agregando tareas las almaceno en local storage
const saveLocalStorage = taskList =>{
    localStorage.setItem('tasks',JSON.stringify(taskList));

};
//cree elemento a renderizar
const createTask = task=>   
    `
        <li>
             <img class="delete-btn" src="/img/delete.svg" alt="boton borrar" id=${task.taskId}>
        </li>
    `;
const renderTaskList = todoList => {
    taskList.innerHTML= todoList.map(task => createTask(task))
}
//crear la logica de esconder el boton de borrar todo
const hideDeleteAll = taskList=>{
    if(!taskList.length)
    {
        deleteBtn.classList.add('hidden');
        return
    }
    deleteBtn.classList.remove('hidden');
    
}

//crear funcion init()
const init=()=>{
    renderTaskList(tasks)

};
