const note = require("./note.js");
const yargs = require("yargs");

var title = process.argv[3];
var body = process.argv[5];
var command =process.argv [2];
 console.log(command) 


if (command === "add") {
    console.log("adding note");
    note.addingNote(title, body)
} else if (command === "remove") {
    console.log("removing note");
    note.removeNote(title)
} else if (command === "read") {
	console.log("reading list");
    note.readNote(title)
} else if (command === "list") {
    console.log("listening all note");
    note.getAll()
}
else{
    console.log("Unknown command was used!")
}