let person = ["Johnathan", "Samantha"];
let salaries =  [50000, 35000];

function addSalary(){
    let name = document.getElementById("name").value;
    let salary = document.getElementById("salary").value;

    if (name == "") {
        document.getElementById("noName").innerHTML = "No name entered, please enter name.";
        alert("No name entered, please enter name.");
    }

    if (salary == "") {
        document.getElementById("noSalary").innerHTML = "No salary entered, please enter salary.";
        alert("No salary entered, please enter salary.");
    }

    if (name != "" && salary != "") {
        person.push(name);
        salaries.push(salary);
        let confirmation = document.getElementById("confirmed");
        confirmation.innerHTML = "<p> Information added! <p>"
        alert("Information added!");
    }
}

function display(){
    var highest = 0;
    var average = 0;

    for (var j = 0; j < salaries.length; j++) {
        average += salaries[j];
        if (salaries[j] > highest) {
            highest = salaries[j];
        }
    }
    if (salaries.length != 0) {
        average/salaries.length
    }
    let result = document.getElementById("results");
            result.innerHTML = "<h2> Highest Salary: " + highest + "</h2>";
            result.innerHTML += "<h2>Average Salary: " + average + "</h2>";
}

function displaySalary() {
    let table = document.getElementById("tableResults")
    table.innerHTML = "<tr><th>Name</th><th>Salary</th></tr>"
    for (var j = 0; j < person.length; j++){
        table.innerHTML += "<tr><td>" + person[j] + "</td><td>" + salaries[j] + "</td></tr>";
    }
}

function displayEmployees(){
    let employees = document.getElementById("employeeResults");
    employees.innerHTML = "";
    for (var j = 0; j < person.length; j++){
        employees.innerHTML += "<option>" + person[j] + "</option>";
    }      
}