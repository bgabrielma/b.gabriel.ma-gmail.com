var e1 = {
    name: "Max",
    privileges: ["create-server"],
    startDate: new Date()
};
function printEmployeeInformation(emp) {
    console.log("Name:" + emp.name);
    if ("privileges" in emp) {
        console.log("Privileges: " + emp.privileges);
    }
    if ("startDate" in emp) {
        console.log("Privileges: " + emp.startDate);
    }
}
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.drive = function () {
        console.log("Driving...");
    };
    return Car;
}());
var Truck = /** @class */ (function () {
    function Truck() {
    }
    Truck.prototype.loadCargo = function (cargo) {
        console.log("Loading cargo..." + cargo);
    };
    return Truck;
}());
var v1 = new Car();
var v2 = new Truck();
function useVehicle(vehicle) {
    if (vehicle instanceof Car) {
        vehicle.drive();
    }
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}
printEmployeeInformation(e1);
useVehicle(v1);
useVehicle(v2);
