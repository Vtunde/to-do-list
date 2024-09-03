const inputBox= document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
function addTask(){
    if (inputBox.value === ''){
        alert("Muszáj írnod ide valamit")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span"); //kicsi x
        span.innerHTML= "\u00d7"; 
        li.appendChild(span);
    }
    inputBox.value= "";
    saveData(); 
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked"); //li-re kattintunk bepipál
        saveData();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove(); //x-re kattintuk töröl
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();