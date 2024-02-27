const form = document.getElementById("form");
const value = document.getElementById("value");
const submit = document.getElementById("submit");
const btnDelete= document.getElementById("btnDelete");
const p= document.getElementById("p");
const h= document.getElementById("h");


form.onsubmit = function (e) {
  e.preventDefault();
  localStorage.setItem("name", JSON.stringify(value.value));
  p.textContent=localStorage.getItem("name")
//   value.value=""
};

btnDelete.onclick= function (){
    localStorage.removeItem("name");
    p.textContent=localStorage.getItem("name")
}


/////////////////////////
function contatore() {
    let counter = sessionStorage.getItem('counter');
    if (!counter) {
      counter = 0;
    } else {
      counter = parseInt(counter);
    }

    counter++;
    sessionStorage.setItem('counter', counter);

    h.textContent = counter;
  }

  window.onload = function() {
    contatore();
    setInterval(contatore, 1000);
    p.textContent=localStorage.getItem("name")

  };