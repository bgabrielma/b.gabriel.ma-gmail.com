function add(n1, n2, showResult, phrase) {
    var result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else
        return n1 + n2;
}
// any field
var anyValue = "";
anyValue = 0;
anyValue = false;
anyValue = ["1", "2"];
anyValue = { value: 2 };
anyValue = [{ value: 2 }, { value: 4 }];
var number1;
number1 = 5;
var number2 = 2.8;
var printResult = true;
var resultPhrase = "Result is: ";
add(number1, number2, printResult, resultPhrase);
