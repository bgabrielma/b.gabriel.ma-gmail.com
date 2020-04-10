type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "Max",
  privileges: ["create-server"],
  startDate: new Date(),
};

type Combinables = string | number;
type Numeric = number | boolean;

type Universal = Combinables & Numeric;

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log("Name:" + emp.name);

  if ("privileges" in emp) {
    console.log("Privileges: " + emp.privileges);
  }

  if ("startDate" in emp) {
    console.log("Privileges: " + emp.startDate);
  }
}

class Car {
  drive() {
    console.log("Driving...");
  }
}

class Truck {
  loadCargo(cargo: number) {
    console.log("Loading cargo..." + cargo);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
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
