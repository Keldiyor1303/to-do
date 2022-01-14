let elForm = document.querySelector(".form");
let elInput = document.querySelector(".form__input");
let resultList = document.querySelector(".result__num");

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

let index = 0;

elForm.addEventListener("submit", function (evt) {
     evt.preventDefault();

     const checkbox = document.createElement("input");
     checkbox.type = "checkbox"
     checkbox.style = "margin-right: 10px;"
     const li = document.createElement("li");
     li.innerText = elInput.value;

     checkbox.id = `${index}-id`;
     li.id = `${index}-id`;
     index++;



     checkbox.addEventListener("click", function () {
          let check = document.getElementById(checkbox.id)
          if (checkbox.checked) check.style = "text-decoration: line-through; color: red"
          else check.style = "text-decoration: solid; color: white"

     })

     li.appendChild(checkbox);
     resultList.appendChild(li);

     elInput.value = ""
})



