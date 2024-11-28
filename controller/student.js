import db from './../dbconnect.js';

export const allStudent = (req, res) => {
	db.query('SELECT * FROM students;', (err, data) => {
		if (err) return res.status(500).json(err);

		return res.status(200).json(data);
	});
};

export const singleStudent = (req, res) => {
	const query = `SELECT * FROM students WHERE student_id = '${req.params.id}';`;

	db.query(query, (err, data) => {
		if (err) return res.status(500).json(err);

		return res.status(200).json(data);
	});
};

export const createStudent = (req, res) => {
	const query = `INSERT INTO Students (student_id, name, email, phone, batch_no, address) VALUES ('${req.body.student_id}', '${req.body.name}', '${req.body.email}', '${req.body.phone}', '${req.body.batch_no}', '${req.body.address}');`;

	db.query(query, (err, data) => {
		if (err) return res.status(500).json(err);

		return res.status(201).json(req.body);
	});
};
