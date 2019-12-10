const fs = require("fs");

const fetchNotes = () => {
	try {
		return JSON.parse(fs.readFileSync("notes.txt"));
	} catch (err) {
		return [];
	}
};

const addingNote = (title, body) => {
	var notes = fetchNotes();

	var note = {
		title,
		body
	};
	notes.push(note);
    fs.writeFileSync("notes.txt", JSON.stringify(notes));
    logNote(note)
};

const removeNote = title => {
	var notes = fetchNotes();
	var filteredNotes = notes.filter(note => note.title !== title);
	fs.writeFileSync("notes.txt", JSON.stringify(filteredNotes));
};
const readNote = title => {
	var notes = fetchNotes();
	var filteredNotes = notes.filter(note => note.title === title);
	// console.log(filteredNotes)
    // console.log(filteredNotes[0]);
    logNote(filteredNotes[0])
};

const getAll = () => {
    var notes = fetchNotes();
    notes.forEach((note)=>logNote(note))
	// console.log(notes);
};

const logNote = (note)=>{
    console.log(`Title:${note.title}`)
    console.log(`Body:${note.body}`)
}

module.exports = {
	addingNote,
	removeNote,
	readNote,
	getAll
};





