// Is this course already registered in Student or not? if result == 0 then add
import db from './../dbconnect.js';
const courseRegistered = (student_id, course_id) => {
	return new Promise((resolve, reject) => {
		const query = `
            SELECT COUNT(*) AS count
            FROM Registrations
            WHERE student_id = ? AND course_id = ?;
        `;

		db.query(query, [student_id, course_id], (err, results) => {
			if (err) {
				return reject(err);
			}

			resolve(results[0].count > 0);
		});
	});
};

export default courseRegistered;
