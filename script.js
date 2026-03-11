// Load employees when page loads
document.addEventListener("DOMContentLoaded", loadEmployees)

function addEmployee(){

let name=document.getElementById("name").value
let email=document.getElementById("email").value
let department=document.getElementById("department").value
let salary=document.getElementById("salary").value
let phone=document.getElementById("phone").value

if(name=="" || email=="" || department=="" || salary=="" || phone==""){
alert("Please fill all fields")
return
}

let employee={
name:name,
email:email,
department:department,
salary:salary,
phone:phone
}

let employees=JSON.parse(localStorage.getItem("employees")) || []

employees.push(employee)

localStorage.setItem("employees",JSON.stringify(employees))

clearForm()

loadEmployees()
}

function loadEmployees(){

let employees=JSON.parse(localStorage.getItem("employees")) || []

let table=""

employees.forEach(function(emp,index){

table+=`

<tr>

<td>${emp.name}</td>
<td>${emp.email}</td>
<td>${emp.department}</td>
<td>${emp.salary}</td>
<td>${emp.phone}</td>

<td>

<button onclick="editEmployee(${index})" class="btn btn-warning btn-sm">
Edit
</button>

<button onclick="deleteEmployee(${index})" class="btn btn-danger btn-sm">
Delete
</button>

</td>

</tr>

`

})

document.getElementById("employeeTable").innerHTML=table

document.getElementById("employeeCount").innerText=employees.length
}

function deleteEmployee(index){

let employees=JSON.parse(localStorage.getItem("employees"))

if(confirm("Delete this employee?")){

employees.splice(index,1)

localStorage.setItem("employees",JSON.stringify(employees))

loadEmployees()

}

}

function editEmployee(index){

let employees=JSON.parse(localStorage.getItem("employees"))

let emp=employees[index]

document.getElementById("name").value=emp.name
document.getElementById("email").value=emp.email
document.getElementById("department").value=emp.department
document.getElementById("salary").value=emp.salary
document.getElementById("phone").value=emp.phone

employees.splice(index,1)

localStorage.setItem("employees",JSON.stringify(employees))

loadEmployees()

}

function searchEmployee(){

let searchText=document.getElementById("searchInput").value.toLowerCase()

let employees=JSON.parse(localStorage.getItem("employees")) || []

let table=""

employees.forEach(function(emp,index){

if(emp.name.toLowerCase().includes(searchText)){

table+=`

<tr>

<td>${emp.name}</td>
<td>${emp.email}</td>
<td>${emp.department}</td>
<td>${emp.salary}</td>
<td>${emp.phone}</td>

<td>

<button onclick="editEmployee(${index})" class="btn btn-warning btn-sm">
Edit
</button>

<button onclick="deleteEmployee(${index})" class="btn btn-danger btn-sm">
Delete
</button>

</td>

</tr>

`

}

})

document.getElementById("employeeTable").innerHTML=table
}

function clearForm(){

document.getElementById("name").value=""
document.getElementById("email").value=""
document.getElementById("department").value=""
document.getElementById("salary").value=""
document.getElementById("phone").value=""

}

