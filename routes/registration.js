import express from 'express';
const router = express.Router();

import { allRegisteredCourses, AssignCourse, deleteRegistration } from './../controller/registration.js';

router.get('/registration/:student_id', allRegisteredCourses);
router.post('/registration/:student_id', AssignCourse);
router.delete('/registrations/:student_id/:course_id', deleteRegistration);

export default router