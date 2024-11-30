import express from 'express';
const router = express.Router();

import { allStudent, singleStudent, createStudent, deleteAStudent, updateStudent } from './../controller/student.js';

router.get('/students', allStudent);
router.get('/students/:id', singleStudent);
router.post('/students', createStudent);
router.delete('/students/:id', deleteAStudent);
router.put('/students/:id', updateStudent);

export default router