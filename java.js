function addTask() { 
    const taskName = document.getElementById('taskName').value; 
    const taskDeadline = document.getElementById('taskDeadline').value; 
    const taskPriority = document.getElementById('taskPriority').value; 
    
    if (taskName === '' || taskDeadline === '') { 
        alert('Töltsd ki a feladat nevét és határidejét!'); 
        return; 
    } 
    const taskList = document.getElementById('taskList'); 

    const li = document.createElement('li'); 
    li.className = taskPriority;

    const taskInfo = document.createElement('span'); 
    taskInfo.textContent = `${taskName} - Határidő: ${taskDeadline}`; 
    
    const actions = document.createElement('div'); 
    actions.className = 'task-actions'; 
    
    const completeButton = document.createElement('img'); 
    completeButton.src = 'circle.png';  
    completeButton.className = 'complete'; 
    completeButton.addEventListener('click', () => { 
        li.classList.toggle('task-completed'); 
        completeButton.classList.toggle('checked'); 
        completeButton.src = completeButton.classList.contains('checked') ? 'check.png' : 'circle.png'; // Pipa kép és karika kép cseréje 
        }); 
        
    const deleteButton = document.createElement('img'); 
    deleteButton.src = 'delete.png'; 
    deleteButton.addEventListener('click', () => { 
        taskList.removeChild(li); 
    }); 
    actions.appendChild(completeButton); 
    actions.appendChild(deleteButton); 
    li.appendChild(taskInfo); 
    li.appendChild(actions); 
    taskList.appendChild(li); 

    
    document.getElementById('taskName').value = ''; 
    document.getElementById('taskDeadline').value = ''; 
    document.getElementById('taskPriority').value = 'low'; 
}
