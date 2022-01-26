let elForm = document.querySelector(".form");
let elInput = document.querySelector(".form__input");
let resultList = document.querySelector(".result__num");

//2. COUNT SPANLARNI TANLAB OLISH:
let elAllCount = document.querySelector(".all-count");
let elCompletedCount = document.querySelector(".completed-count");
let elUnCompletedCount = document.querySelector(".uncompleted-count");

document.body.style.height = "100vh";
document.body.style.width = "100%";
document.body.style.fontFamily = "Roboto, sans-serif";

const newResult = document.querySelector(".result");
const newResultHeader = document.querySelector(".result__header");

elForm.style.width = "100vw";
elForm.style.height = "150px";
elForm.style.padding = "30px";

newResult.style.width = "100vw";
newResult.style.height = "calc(100vh - 150px)";
newResult.style.padding = "30px";
newResult.style.borderRadius = "20px 20px 0 0";
newResult.style.backgroundColor = "dodgerblue";
newResult.style.boxShadow = "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"

newResultHeader.style.marginBottom = "30px";
newResultHeader.style.fontSize = "25px";
newResultHeader.style.color = "#fff";
newResultHeader.style.textAlign = "center"


const renderTodos = function (arr, element) {

     arr.forEach(function (todo) {
          let newLi = document.createElement("li");
          let newP = document.createElement("p");
          let newCheckbox = document.createElement("input");
          let newDeleteBtn = document.createElement("button");
          newDeleteBtn.classList.add("form__button2")

          newCheckbox.type = "checkbox";

          newDeleteBtn.classList.add("delete-btn");
          newCheckbox.classList.add("checkbox-btn");

          newP.textContent = todo.title;
          newDeleteBtn.textContent = "Delete";

          //11. DATASET QO'SHDIK
          newDeleteBtn.dataset.todoId = todo.id;
          newCheckbox.dataset.checkId = todo.id;

          if (todo.isCompleted) {
               newCheckbox.checked = true;
               newP.style.textDecoration = "line-through";
               newP.style.color = "red";
          }

          element.appendChild(newLi);
          newLi.append(newCheckbox, newP, newDeleteBtn);
     });
};


let index = 0;
const todos = JSON.parse(window.localStorage.getItem("todos")) || [];

renderTodos(todos, resultList)

elForm.addEventListener("submit", function (evt) {
     evt.preventDefault();

     // 4. input value
     let inputValue = elInput.value;

     // 5. Har bir todo uchun yangi object yaratib oldik
     let newTodo = {
          id: todos[todos.length - 1]?.id + 1 || 0,
          title: inputValue,
          isCompleted: false,
     };

     // 6. Har bit todo objecttini todos arrayiga push qilyabdi
     todos.push(newTodo);

     window.localStorage.setItem("todos", JSON.stringify(todos))

     resultList.innerHTML = null;
     elInput.value = null;

     // 9. todolarni render qilyabmiz
     renderTodos(todos, resultList);
});





// 10. Ul quloq solyabmiz chunki bu EVENT DELEGATION:
resultList.addEventListener("click", function (evt) {
     if (evt.target.matches(".delete-btn")) {
          let btnTodoId = evt.target.dataset.todoId * 1;
          let foundIndex = todos.findIndex((todo) => todo.id === btnTodoId);

          todos.splice(foundIndex, 1);

          window.localStorage.setItem("todos", JSON.stringify(todos))


          resultList.innerHTML = null;

          renderTodos(todos, resultList);
     } else if (evt.target.matches(".checkbox-btn")) {
          let checkTodoId = evt.target.dataset.checkId * 1;

          let foundCheckTodo = todos.find((todo) => todo.id === checkTodoId);

          foundCheckTodo.isCompleted = !foundCheckTodo.isCompleted;

          window.localStorage.setItem("todos", JSON.stringify(todos))


          resultList.innerHTML = null;

          renderTodos(todos, resultList);
     }
});