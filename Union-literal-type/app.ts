type Combinable = number | string;
type ConversionDescriptor = "as-number" | "as-text";

function combine(
  n1: Combinable,
  n2: Combinable,
  convertMode: ConversionDescriptor
) {
  let result: string | number;
  if (
    (typeof n1 === "number" && typeof n2 === "number") ||
    convertMode === "as-number"
  ) {
    result = +n1 + +n2;
  } else {
    result = n1.toString() + n2.toString();
  }

  return result;
  // if (convertMode === "as-number") {
  //   return +result;
  // } else {
  //   return result.toString();
  // }
}

const combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);

const combinedNames = combine("Max", "Anna", "as-text");
console.log(combinedNames);
