var person = {
    name: "Bruno",
    age: 30,
    hobbies: ["Sports", "Cookie"],
    role: [2, "author"]
};
person.role.push("admin"); // push is a special feature that, unfortunately typescript does not support
var favoriteActivities;
favoriteActivities = ["Sports"];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
