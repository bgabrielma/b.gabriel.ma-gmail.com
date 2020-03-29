function combine(n1, n2, convertMode) {
    var result;
    if ((typeof n1 === "number" && typeof n2 === "number") ||
        convertMode === "as-number") {
        result = +n1 + +n2;
    }
    else {
        result = n1.toString() + n2.toString();
    }
    return result;
    // if (convertMode === "as-number") {
    //   return +result;
    // } else {
    //   return result.toString();
    // }
}
var combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);
var combinedNames = combine("Max", "Anna", "as-text");
console.log(combinedNames);
