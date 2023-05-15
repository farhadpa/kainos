import data from "./MOCK_DATA.json" assert { type: "json" };
console.log(data);
let employees = data;
let html = "";
for (let employee of employees) {
  html += `<tr>`;
  html += `<td>${employee.employee_number}</td>`;
  html += `<td>${employee.first_name} ${employee.last_name}</td>`;
  html += `<td>${employee.address},${employee.city},${employee.country}</td>`;
  html += `<td>${employee.salary}</td>`;
  html += `<td>${employee.role}</td>`;
  html += `</tr>`;
}

document.getElementById("box").innerHTML = html;
