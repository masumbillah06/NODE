import db from './../dbconnect.js';

//==============================================================
//Shows all students
export const allStudent = (req, res) => {
	db.query('SELECT * FROM students;', (err, data) => {
		if (err) return res.status(500).json(err);

		return res.status(200).json(data);
	});
};

//==============================================================
//Shows a single student
export const singleStudent = (req, res) => {
	const query = `SELECT * FROM students WHERE student_id = '${req.params.id}';`;

	db.query(query, (err, data) => {
		if (err) return res.status(500).json(err);

		return res.status(200).json(data);
	});
};

//==============================================================
//Inserts datas of a new student
export const createStudent = (req, res) => {
	const query = `
        INSERT INTO Students (student_id, name, email, phone, batch_no, address) 
        VALUES (?, ?, ?, ?, ?, ?);
    `;

	const { student_id, name, email, phone, batch_no, address } = req.body;

	db.query(
		query,
		[student_id, name, email, phone, batch_no, address],
		(err, data) => {
			if (err) return res.status(500).json(err);

			return res.status(201).json(req.body);
		}
	);
};

//==============================================================
//Deletes datas of a student
export const deleteAStudent = (req, res) => {
	const query = `DELETE FROM students WHERE student_id = '${req.params.id}';`;

	db.query(query, (err, data) => {
		if (err) {
			return res.status(500).json({ error: "Can't delete a student who is already registered" });
		}
		
		return res.status(204).send();
	});
};


//==============================================================
//Updates datas of a student
export const updateStudent = (req, res) => {
	const query = `UPDATE Students 
        SET 
            name = '${req.body.name}', 
            email = '${req.body.email}', 
            phone = '${req.body.phone}', 
            batch_no = '${req.body.batch_no}', 
            address = '${req.body.address}'
        WHERE student_id = '${req.body.student_id}';
    `;

	db.query(query, (err, data) => {
		if (err) return res.status(500).json(err);

		return res.status(200).json({
			message: 'Student updated successfully',
			student: req.body,
		});
	});
};
