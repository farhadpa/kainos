import data from './MOCK_DATA.json' assert { type: "json" };
console.log(data);
let employees = data;
let html = `<tbody>`;
for (let employee of employees) {
    html += "<tr>";
    html += `<td>${employee.employee_number}</td>`;
    html += `<td>${employee.first_name}</td>`;
    html += `<td>${employee.last_name}</td>`;
    html += `<td>${employee.address}</td>`;
    html += `<td>${employee.city}</td>`;
    html += `<td>${employee.country}</td>`;
    html += `<td>${employee.salary}</td>`;
    html += `<td>${employee.role}</td>`;
    html += `</tr>`;
}
html += "</tbody>";
document.getElementById("box").innerHTML = html;