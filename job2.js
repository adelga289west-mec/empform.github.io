class Employee{
    constructor(Fname, Lname, Age, Address, City, ZipCode, State, Country){
        this.Fname = Fname;
        this.Lname = Lname;
        this.Age = Age;
        this.Address = Address;
        this.City = City;
        this.ZipCode = ZipCode;
        this.State = State;
        this.Country = Country;
    }info(){

    } 

}
class Details extends Employee{
    constructor(Fname, Lname, Age, Address, City, ZipCode, State, Country, Title, Dept, Salary, Service){
        super(Fname, Lname, Age, Address, City, ZipCode, State, Country);
        this.Title = Title; 
        this.Dept = Dept; 
        this.Salary = Salary;
        this.Service = Service
       
    }detInfo(){
     
     /*    list.push(Fname, Lname, Age, Address, City, ZipCode, State, Country, Title, Dept, Salary, Service);
        console.log(list) */
    }
}

/* const Emp = new Details(Fname, Lname, Age, Address, City, ZipCode, State, Country, Title, Dept, Salary, Service)
const detInfo = Emp.detInfo */
var list = [];




document.getElementById("btn").addEventListener("click", value)
var employees = document.getElementById("employees")

function value(){
    var Fname = document.getElementById("Fname").value;
    var Lname = document.getElementById("Lname").value;
    var Age = document.getElementById("Age").value;
    var Address = document.getElementById("Address").value;
    var City = document.getElementById("City").value;
    var ZipCode = document.getElementById("ZipCode").value;
    var State = document.getElementById("State").value;
    var Country = document.getElementById("Country").value;
    var Title = document.getElementById("Title").value;
    var Dept = document.getElementById("Dept").value;
    var Salary = document.getElementById("Salary").value;
    var Service = document.getElementById("Service").value;

    let newEmployee = new Details(Fname, Lname, Age, Address, City, ZipCode, State, Country, Title, Dept, Salary, Service)
    list.push(newEmployee)
    console.log(list)
    addEmployee(newEmployee)


}
function addEmployee(emp){
    let div = document.createElement("div")
    div.style.textAlign = "center"
    div.style.border = "5px solid green"
    div.style.width = "90%";
    div.style.color = "white"
    div.style.marginTop = "10px"
    div.style.height = "auto"
    div.innerHTML = `<h1>${emp.Fname} ${emp.Lname}</h1>
    <h3>Age: ${emp.Age}</h3>
    <p>Address: ${emp.Address}</p>
    <p>City: ${emp.City}</p>
    <p>ZipCode: ${emp.ZipCode}</p>
    <p>State: ${emp.State}</p>
    <p>Country: ${emp.Country}</p>
    <p>Job Title: ${emp.Title}</p>
    <p>Department: ${emp.Dept}</p>
    <p>Salary: ${emp.Salary}</p>
    <p>Years in Service: ${emp.Service}</p>
    `
    employees.append(div)
    Fname.value = ""
    Lname.value = ""
    Age.value = ""
    Address.value = ""
    City.value = ""
    ZipCode.value = ""
    State.value = ""
    Country.value = ""
    Title.value = ""
    Dept.value = ""
    Salary.value = ""
    Service.value = ""

}