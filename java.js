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
    
    const completeBtn = document.createElement('img'); 
    completeBtn.src = 'circle.png';  
    completeBtn.className = 'complete'; 
    completeBtn.addEventListener('click', () => { 
        li.classList.toggle('task-completed'); 
        completeBtn.classList.toggle('checked'); 
        completeBtn.src = completeBtn.classList.contains('checked') ? 'check.png' : 'circle.png'; // Pipa kép és karika kép cseréje 
        }); 
        
    const deleteBtn = document.createElement('img'); 
    deleteBtn.src = 'delete.png'; 
    deleteBtn.addEventListener('click', () => { 
        taskList.removeChild(li); 
    }); 
    actions.appendChild(completeBtn); 
    actions.appendChild(deleteBtn); 
    li.appendChild(taskInfo); 
    li.appendChild(actions); 
    taskList.appendChild(li); 

    
    document.getElementById('taskName').value = ''; 
    document.getElementById('taskDeadline').value = ''; 
    document.getElementById('taskPriority').value = 'low'; 
}
