import express from 'express';
const router = express.Router();

import {
	allRegisteredCourses,
	allRegistrations,
	AssignCourse,
	deleteRegistration,
} from './../controller/registration.js';

router.get('/registrations', allRegistrations);
router.get('/registrations/:student_id', allRegisteredCourses);
router.post('/registrations', AssignCourse);
router.delete('/registrations/:student_id/:course_id', deleteRegistration);

export default router;
