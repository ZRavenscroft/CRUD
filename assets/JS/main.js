var selectedRow = null;

// function showAlert(message, className) {
//   const div = document.createElement("div");
//   div.className = `alert alert-${className}`;

//   div.appendChild(document.createTextNode(message));
//   const containe = document.querySelector(".container");
//   const main = document.querySelector(".main");
//   container.insertBefore(div, main);

//   setTimeout(() => document.querySelector(".alert").remove(), 3000);
// }

function clearFields() {
  document.querySelector("#firstName").value = "";
  document.querySelector("#email").value = "";
  document.querySelector("#speciality").value = "";
  document.querySelector("#number").value = "";
}

//Add Employee
document.querySelector("#employee-form").addEventListener("submit", (e) => {
  e.preventDefault();

  const firstName = document.querySelector("#firstName").value;
  const email = document.querySelector("#email").value;
  const speciality = document.querySelector("#speciality").value;
  const number = document.querySelector("#number").value;

  if (firstName == "" || email == "" || speciality == "" || number == "") {
  } else {
    if (selectedRow == null) {
      const list = document.querySelector("#employee-list");
      const row = document.createElement("tr");

      row.innerHTML = `
        <td>${firstName}</td>
        <td>${email}</td>
        <td>${speciality}</td>
        <td>${number}</td>
        <td>
        <a href="#" class="btn btn-warning btn-sm edit">Edit</a>
        <a href="#" class="btn btn-danger btn-sm delete">Delete</a>
        </td>   
        `;
      list.appendChild(row);
      selectedRow = null;
    }
    clearFields();
  }
});

//Delete Employee
document.querySelector("#employee-list").addEventListener("click", (e) => {
  target = e.target;
  if (target.classList.contains("delete")) {
    target.parentElement.parentElement.remove();
  }
});

const list = document.querySelector("#employee-list");
const row = document.createElement("tr");
const btn = document.getElementById("btn");
const BASE_URL = "https://jsonplaceholder.typicode.com";

const getData=()=>{
  const fetchData = fetch(`${BASE_URL}/users`)
  .then((x)=>x.json())
  .then((data)=>{
    data?.map((item)=>{
      list.innerHTML+=`
      <td>${item.name}</td>
      <td>${item.email}</td>
      <td>${item.username}</td>
      <td>${item.phone}</td>
      <td>
        <a href="#" class="btn btn-warning btn-sm edit">Edit</a>
        <a href="#" class="btn btn-danger btn-sm delete">Delete</a>
      </td>`
    })
  })  
  return fetchData;
}
btn.addEventListener("click", getData)