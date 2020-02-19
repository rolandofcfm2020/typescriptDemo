var Employee = /** @class */ (function () {
    function Employee(eID, name, age) {
        this.empID = eID;
        this.fullName = name;
        this.age = age;
    }
    Employee.prototype.getData = function () {
        return "Employee ID of " + this.fullName + ": " + this.empID + ", Age:  " + this.age;
    };
    return Employee;
}());
var Customer = /** @class */ (function () {
    function Customer(cID, name, age) {
        this.custID = cID;
        this.fullName = name;
        this.age = age;
    }
    Customer.prototype.getData = function () {
        return "Customer ID of " + this.fullName + ": " + this.custID + ", Age:  " + this.age;
    };
    return Customer;
}());
function printInfo() {
    var employee = new Employee("E001", "Alberto", Math.floor((Math.random() * 100) + 1));
    var customer = new Customer("C001", "Joel", Math.floor((Math.random() * 100) + 1));
    document.getElementById("p1").innerHTML = "Datos Empleado: " + employee.getData();
    document.getElementById("p2").innerHTML = "Datos Cliente: " + customer.getData();
}
function clearInfo() {
    document.getElementById("p1").innerHTML = "";
    document.getElementById("p2").innerHTML = "";
}
//# sourceMappingURL=People.js.map