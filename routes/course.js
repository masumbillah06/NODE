import express from 'express';
const router = express.Router();

import { allCourse, createCourse, singleCourse, deleteACourse } from './../controller/course.js';

router.get('/courses', allCourse);
router.get('/courses/:id', singleCourse);
router.post('/courses', createCourse);
router.delete('/courses/:id', deleteACourse);

export default router