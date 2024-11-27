import express from 'express';
const router = express.Router();

import { allStudent, singleStudent, createStudent } from './../controller/student.js';

router.get('/students', allStudent);
router.get('/students/:id', singleStudent);

router.post('/students', createStudent)

export default router