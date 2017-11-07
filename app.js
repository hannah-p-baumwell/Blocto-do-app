function onReady () {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');
  addToDoForm.addEventListener ('submit', event => {
    event.preventDefault();
    // get the text
    let title = newToDoText.value;

    // create a new li
    let newLi = document.createElement('li');

    // create a new input
    let checkbox = document.createElement('input');

    // set the input's type to  checkbox
    checkbox.type = "checkbox";

    // set the title
    newLi.textContent = title;

    // attach the checkbox to the LI
    newLi.appendChild(checkbox);

    // attach the li to the ul
    toDoList.appendChild(newLi);

    //empty the input
    newToDoText.value = '';

    //create deletebutton
    let deleteButton = document.createElement('button');

       deleteButton.textContent = "Delete";

       //Give behavior
       //When you click on it -> It should delete the whole Item (List item)

       deleteButton.addEventListener('click', event => {
         toDoList.removeChild(newLi);
       })

       newLi.appendChild(deleteButton);

     });
    }

window.onload = function (){
  onReady();
}
