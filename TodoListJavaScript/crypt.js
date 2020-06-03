const inputText = document.getElementById("input");
const ButtonAddToList = document.getElementById("add to list");
const ButtonDeletSelectedItems = document.getElementById("delete selected items")
const ButtonJustDoThis = document.getElementById("do this");
const ButtonAsDoSelectedItems = document.getElementById("check as do");
const ButtonDeleteTask = document.getElementById("delete this");
const ulElement = document.getElementById("list")


var todoList = [];

ButtonAsDoSelectedItems.addEventListener ("click", () => {
    for(const todoItem of todoList){
        if(todoItem.selected){
            todoItem.done = true;
            todoItem.selected = false;
        }
    }
    upgradeViev();
})

ButtonAddToList.addEventListener("click", () => {
    todoList.unshift({
        content: inputText.value,
        done: false,
        selected: false
    })
    inputText.value = '';

    upgradeViev();
})


ButtonDeletSelectedItems.addEventListener("click", () => {
    todoList = todoList.filter(todoItem => !todoItem.selected)
    upgradeViev();
})



inputText.addEventListener("keydown", event => {
    if(event.key === "Enter" || event.keyCode === 13){
        todoList.unshift({
            content: inputText.value,
            done: false,
            selected: false
        })
        inputText.value = '';

        upgradeViev();
    }
})


function upgradeViev(){

    ulElement.innerHTML="";
    //for(const todoItem of todoList){
    for (var index=0; index<todoList.length; index++){
        const todoItem = todoList[index];

        const liElement = document.createElement("li")
        liElement.className = "list-group-item"
        ulElement.append(liElement);

        const divElement = document.createElement("div");
        divElement.className = "form-group form-check";
        liElement.append(divElement);

        const inputElement = document.createElement("input");
        divElement.append(inputElement);
        inputElement.type = "checkbox";
        inputElement.className = "form-check-input";
        inputElement.id = "todoItem" + index;
        inputElement.checked = todoItem.selected;



        const labelElement = document.createElement("label");
        divElement.append(labelElement);
        labelElement.className = "form-check-label";
        if(todoItem.done){
            labelElement.className += " todoDone";
        }
        labelElement.setAttribute("for", "todoItem" + index);
        labelElement.innerText = todoItem.content;

        const buttonDoElement = document.createElement("button");
        divElement.append(buttonDoElement);
        buttonDoElement.type = "button";
        buttonDoElement.className = "btn btn-secondary btn-sm";
        buttonDoElement.innerText = "I just do this";
        //buttonDoElement.style = "float: right";


        const buttonDeleteElement = document.createElement("button");
        divElement.append(buttonDeleteElement);
        buttonDeleteElement.type = "button";
        buttonDeleteElement.className = "btn btn-secondary btn-sm";
        buttonDeleteElement.innerText = "Delete task from list";
        //buttonDeleteElement.style = "float: right";

        buttonDoElement.addEventListener("click", ()=> {
            todoItem.done = !todoItem.done;
            upgradeViev();
        })

        inputElement.addEventListener("change", () => {
            todoItem.selected = inputElement.checked
        })

        buttonDeleteElement.addEventListener("click", ()=> {
            todoList = todoList.filter(currentTodoItem => currentTodoItem !== todoItem)
            upgradeViev();
        })
    }
    

}