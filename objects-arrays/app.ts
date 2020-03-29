const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: "Bruno",
  age: 30,
  hobbies: ["Sports", "Cookie"],
  role: [2, "author"]
};

person.role.push("admin"); // push is a special feature that, unfortunately typescript does not support

let favoriteActivities: string[];
favoriteActivities = ["Sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}
