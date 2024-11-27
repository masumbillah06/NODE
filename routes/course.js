import express from 'express';
const router = express.Router();

import { allCourse, singleCourse } from './../controller/course.js';

router.get('/courses', allCourse);
router.get('/courses/:id', singleCourse);

export default router