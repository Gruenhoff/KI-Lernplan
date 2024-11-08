// routes/students.js
const express = require('express');
const router = express.Router();
const { getAllStudents, addStudent, deleteStudent } = require('../controllers/studentsController');

// GET: Alle Schüler
router.get('/', getAllStudents);

// POST: Neuer Schüler
router.post('/', addStudent);

// DELETE: Schüler löschen
router.delete('/:id', deleteStudent);

module.exports = router;
