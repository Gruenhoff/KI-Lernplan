// controllers/studentsController.js
const { getStudentsFromDB, addStudentToDB, deleteStudentFromDB } = require('../models/studentModel');

// Holt alle Studenten
const getAllStudents = (req, res) => {
    const students = getStudentsFromDB();
    res.status(200).json(students);
};

// Fügt einen neuen Studenten hinzu
const addStudent = (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).json({ error: 'Student name is required' });
    }
    const newStudent = addStudentToDB(name);
    res.status(201).json(newStudent);
};

// Löscht einen Studenten
const deleteStudent = (req, res) => {
    const { id } = req.params;
    const studentDeleted = deleteStudentFromDB(id);
    if (!studentDeleted) {
        return res.status(404).json({ error: 'Student not found' });
    }
    res.status(200).json({ message: 'Student deleted' });
};

module.exports = { getAllStudents, addStudent, deleteStudent };
