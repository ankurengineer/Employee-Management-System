let employees = JSON.parse(localStorage.getItem("employees")) || [];
let editIndex = -1;

displayEmployees();
function addEmployee() {

    let name = document.getElementById("name").value;

    let email = document.getElementById("email").value;

    let department = document.getElementById("department").value;

    let salary = document.getElementById("salary").value;

    let age = document.getElementById("age").value;

    alert(
    "Name: " + name +
    "\nEmail: " + email +
    "\nDepartment: " + department +
    "\nSalary: " + salary +
    "\nAge: " + age
);
let employee = {
    name: name,
    email: email,
    department: department,
    salary: salary,
    age: age
};
if (editIndex === -1) {

    employees.push(employee);

} else {

    employees[editIndex] = employee;

    editIndex = -1;

    document.querySelector("button").innerText = "Add Employee";

}
localStorage.setItem("employees", JSON.stringify(employees));
displayEmployees();

document.getElementById("name").value = "";
document.getElementById("email").value = "";
document.getElementById("department").value = "";
document.getElementById("salary").value = "";
document.getElementById("age").value = "";

}

function displayEmployees(employeeList = employees) {
    let table = document.getElementById("employeeTable");
    table.innerHTML = "";
employeeList.forEach(function(employee, index) {
            table.innerHTML += `
<tr>
    <td>${employee.name}</td>
    <td>${employee.email}</td>
    <td>${employee.department}</td>
    <td>${employee.salary}</td>
    <td>${employee.age}</td>
   <td>
    <button onclick="editEmployee(${index})">Edit</button>
    <button onclick="deleteEmployee(${index})">Delete</button>
    </td>
</tr>
`;
});
}

function deleteEmployee(index) {

    employees.splice(index, 1);
    localStorage.setItem("employees", JSON.stringify(employees));
    displayEmployees();

}

function editEmployee(index) {

    let employee = employees[index];

    document.getElementById("name").value = employee.name;
    document.getElementById("email").value = employee.email;
    document.getElementById("department").value = employee.department;
    document.getElementById("salary").value = employee.salary;
    document.getElementById("age").value = employee.age;

    editIndex = index;

    document.querySelector("button").innerText = "Update Employee";

}

function searchEmployee() {
    let search = document.getElementById("search").value.toLowerCase();
    let filteredEmployees = employees.filter(function(employee) {

    return employee.name.toLowerCase().includes(search);
});
    displayEmployees(filteredEmployees);

}