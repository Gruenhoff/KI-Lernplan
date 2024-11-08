// models/studentModel.js
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database.sqlite');

// Initialisiere die Datenbank
db.serialize(() => {
    db.run("CREATE TABLE IF NOT EXISTS students (id INTEGER PRIMARY KEY, name TEXT)");
});

// Holt alle Studenten
const getStudentsFromDB = () => {
    return new Promise((resolve, reject) => {
        db.all("SELECT * FROM students", (err, rows) => {
            if (err) {
                reject(err);
            }
            resolve(rows);
        });
    });
};

// Fügt einen neuen Studenten hinzu
const addStudentToDB = (name) => {
    return new Promise((resolve, reject) => {
        db.run("INSERT INTO students (name) VALUES (?)", [name], function(err) {
            if (err) {
                reject(err);
            }
            resolve({ id: this.lastID, name });
        });
    });
};

// Löscht einen Studenten
const deleteStudentFromDB = (id) => {
    return new Promise((resolve, reject) => {
        db.run("DELETE FROM students WHERE id = ?", [id], function(err) {
            if (err) {
                reject(err);
            }
            resolve(this.changes > 0);
        });
    });
};

module.exports = { getStudentsFromDB, addStudentToDB, deleteStudentFromDB };
