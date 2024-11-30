import express from 'express';
const router = express.Router();

import { allRegisteredCourses, AssignCourse } from './../controller/registration.js';

router.get('/registration/:student_id', allRegisteredCourses);
router.post('/registration/:student_id', AssignCourse);

export default router