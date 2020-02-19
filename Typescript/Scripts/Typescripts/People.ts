interface Person {
    fullName: string;
    age: number;
    getData(): string;
}

class Employee implements Person {
    empID: string;
    fullName: string;
    age: number;
    constructor(eID: string, name: string, age: number) {
        this.empID = eID;
        this.fullName = name;
        this.age = age;
    }
    getData() {
        return `Employee ID of ${this.fullName}: ${this.empID}, Age:  ${this.age}`;
    }
}
class Customer implements Person {
    custID: string;
    fullName: string;
    age: number;
    constructor(cID: string, name: string, age: number) {
        this.custID = cID;
        this.fullName = name;
        this.age = age;
    }
    getData() {
        return `Customer ID of ${this.fullName}: ${this.custID}, Age:  ${this.age}`;
    }
}

function printInfo() {
    let employee: Person = new Employee("E001", "Alberto", Math.floor((Math.random() * 100) + 1));
    let customer: Person = new Customer("C001", "Joel", Math.floor((Math.random() * 100) + 1));
    document.getElementById("p1").innerHTML = "Datos Empleado: " + employee.getData();
    document.getElementById("p2").innerHTML = "Datos Cliente: " + customer.getData();
}
function clearInfo() {
    document.getElementById("p1").innerHTML = "";
    document.getElementById("p2").innerHTML = "";
}

