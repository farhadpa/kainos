import data from "./MOCK_DATA.json" assert { type: "json" };

let employees = data;
let html = "";
for (let employee of employees) {
  html += `<tr>`;
  html += `<td>${employee.employee_number}</td>`;
  html += `<td>${employee.first_name} ${employee.last_name}</td>`;
  html += `<td>${employee.address},${employee.city},${employee.country}</td>`;
  html += `<td>${employee.salary}</td>`;
  html += `<td>${employee.role}</td>`;
  html += `<td><a href="./editEmployee.html">Edit</a></td>`;
  html += `<td><a href="#" class="delete-link">Delete</a></td>`;
  html += `</tr>`;
}

document.getElementById("box").innerHTML = html;

document.getElementById("box").addEventListener("click", function (event) {
  if (event.target && event.target.matches("a.delete-link")) {
    showAlert();
  }
});

function showAlert() {
  alert("Are you sure you want to delete?");
}
