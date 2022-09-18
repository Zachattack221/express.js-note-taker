// const path = require('path');
// const { application } = require('express');
const fs = require('fs');

// pulled in uuid dependency to assign notes a unique id
const { v4: uuidv4 } = require('uuid');

module.exports = (app) => {

    app.get('/api/notes', (req, res) => {
        console.log('GET notes request sent');

        let note = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));

        res.json(note);
    });

    app.post('/api/notes', (req, res) => {

        const newNote = request.body;

        console.log('POST request sent');

        // pulls in unique id
        newNote.id = uuidv4();

        let note = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));

        // adds new note into db.json 
        note.push(newNote);

        fs.writeFileSync('./db/db.json', JSON.stringify(note));

        console.log('Note added successfully');

        res.json(note);
    });

    app.delete('/api/notes/:id', (req, res) => {
        let noteId = req.params.id.toString();

        console.log('DELETE request sent');

        let existingNotes = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));

        let remainingNotes = existingNotes.filter( item => item.id.toString() !== noteId);

        fs.writeFileSync('db/db.json', JSON.stringify(remainingNotes));
        res.json(remainingNotes);
    });
};