import db from './../dbconnect.js';
import courseRegistered from './../utils/courseRegistered.js';

// ===============================================================================
// See all courses that a student has registered in
export const allRegisteredCourses = (req, res) => {
	const { student_id } = req.params;

	const query = `
        SELECT c.course_id, c.course_name, c.course_description, c.credits
        FROM Courses c
        JOIN Registrations r ON c.course_id = r.course_id
        WHERE r.student_id = ?;
    `;

	db.query(query, [student_id], (err, results) => {
		if (err) {
			console.error('Error fetching registrations:', err);
			return res
				.status(500)
				.json({ error: 'Database error', details: err });
		}

		if (results.length === 0) {
			return res
				.status(404)
				.json({ message: 'No courses found for this student.' });
		}

		return res.status(200).json({ courses: results });
	});
};

// ================================================================================
// Assign a Course to a Student
export const AssignCourse = async (req, res) => {
	const { student_id, course_id } = req.body;

	if (!student_id || !course_id) {
		return res
			.status(400)
			.json({ error: 'student_id and course_id are required' });
	}

	try {
		const IsCourseRegistered = await courseRegistered(
			student_id,
			course_id
		);

		const query = `
        INSERT INTO Registrations (student_id, course_id)
        VALUES (?, ?);
    `;

		if (!IsCourseRegistered) {
			db.query(query, [student_id, course_id], (err, result) => {
				if (err) {
					console.error('Error registering student:', err);
					return res
						.status(500)
						.json({ error: 'Database error', details: err });
				}

				return res.status(201).json({
					message: 'Registration successful',
					registration_id: result.insertId,
				});
			});
		} else {
			return res.status(409).json({
				message: 'Already registered.',
			});
		}
	} catch (err) {
		console.error('Error checking course registration:', err);
	}
};

//============================================================================================
// Deleting part

export const deleteRegistration = (req, res) => {
	const { student_id, course_id } = req.params;

	const query = `
        DELETE FROM Registrations
        WHERE student_id = ? AND course_id = ?;
    `;

	db.query(query, [student_id, course_id], (err, results) => {
		if (err) {
			console.error('Error deleting registration:', err);
			return res
				.status(500)
				.json({ error: 'Database error', details: err });
		}

		if (results.affectedRows === 0) {
			return res.status(404).json({
				message:
					'No registration found for the specified student and course.',
			});
		}

		return res
			.status(200)
			.json({ message: 'Registration successfully deleted.' });
	});
};
