let personName = "Abdul samad, are you ready for typescript?";
// Method 1
console.log("Lowercase:", personName.toLowerCase());
console.log("Uppercase:", personName.toUpperCase());

// Method 2
let lowercaseName = personName.toLowerCase();
console.log(lowercaseName)
let uppercaseName = personName.toUpperCase();
console.log(uppercaseName);

// Using regular expression. "/\s/" select all the spaces.
// "." period select the first character after spaces.
//"g" will select all spaces; globally.

let result = personName.replace(/\b\w/g, (match) => {
    return match.toUpperCase()
});
console.log("Titlecase:", result)