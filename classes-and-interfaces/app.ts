class Department {
  private static counter: number;
  protected admins: string[];
  public name: string;

  constructor(private readonly _id: string, n: string, admins: string[]) {
    this.name = n;
    this.admins = admins;
    Department.counter++;
  }

  public getName(this: Department): string {
    return this.name;
  }
}

// Inheritance
class ITDepartment extends Department {
  constructor(id: string, admins: string[]) {
    super(id, "It", admins);
  }

  addAdmins(admins: string[]): void {
    if (admins.length > 0) this.admins = admins;
  }

  showAdmins(): void {
    console.log(this.admins);
  }
}

class AccountingDepartment extends Department {
  private reports: string[];

  constructor(id: string, reports: string[]) {
    super(id, "IT", []);
    this.reports = reports;
  }

  addReport(text: string) {
    this.reports.push(text);
  }

  printReports() {
    console.log(this.reports);
  }
}

const array = ["Bruno", "Sérgio", "João"];

const it = new ITDepartment("ItIsTheBest", [...array]);

const accounting = new AccountingDepartment("ACC", []);

accounting.addReport("Something went wrong...");

accounting.printReports();

it.showAdmins();

// Interfaces
interface Named {
  readonly name?: string;
  outputName?: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  name?: string;
  age: number;

  constructor(age: number, name?: string) {
    if (name) this.name = name;
    this.age = age;
  }

  greet(phrase: string) {
    if (this.name) console.log(this.name);
  }
}

let user1: Person;

user1 = {
  name: "Bruno",
  age: 19,
  greet: (phrase: string): void => console.log(phrase),
};

// Interfaces for functions
interface AddFn {
  (n1: number, n2: number): number;
}

const addFn: AddFn = (n1: number, n2: number) => n1 + n2;
