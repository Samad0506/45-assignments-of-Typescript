// let guestList =['Usama', 'Usman','Saqib','Ali'];
// console.log(`\n\t${guestList}`);
// console.log(`\n\t${guestList[1]} is unable to join us, therefore need to remove his name.\n`)
// let newList = guestList.splice(1,1);
// console.log(`\n\t${newList} is removed from the list`);
// console.log(`\n\tNew list: ${guestList}\n`);
// console.log("\n\tNaved is a new guest and we need to include him in the list!")
// let updatedlist = guestList.push('Naved');
// console.log(`\n\t${guestList}`);
var guestList = ['Usama', 'Usman', 'Saqib', 'Ali'];
var removingGuest = guestList[1];
console.log("\n\t ".concat(guestList, "\n"));
console.log("\n\t".concat(removingGuest, " is not coming.\n"));
console.log("\tReplacing Usman with Khalid:");
guestList.splice(1, 1, 'Khalid');
console.log("\n\t".concat(guestList, "\n"));
guestList.forEach(function (newGuestList) { return console.log("Hello ".concat(newGuestList, ", I'm pleased to invite you to join me at dinner tonight!")); });
