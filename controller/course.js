import db from './../dbconnect.js';

//=================================================
// Shows all courses
export const  allCourse = (req, res) => {
    db.query("SELECT * FROM courses;", (err, data) => {
        if (err) return res.status(500).json(err);

		return res.status(200).json(data);
    });
}


//=================================================
// Shows a single course
export const singleCourse = (req, res) => {
    const query = `SELECT * FROM courses WHERE course_id = '${req.params.id}';`;

	db.query(query, (err, data) => {
        if (err) return res.status(500).json(err);

		return res.status(200).json(data);
    });
}


//=================================================
// Inserts datas of a single course
export const createCourse = (req, res) => {
	const query = `INSERT INTO Courses (course_id, course_name, course_description, credits) VALUES ('${req.body.course_id}', '${req.body.course_name}', '${req.body.course_description}', '${req.body.credits}');`;

	db.query(query, (err, data) => {
		if (err) return res.status(500).json(err);

		return res.status(201).json(req.body);
	});
};


//=================================================
// Deletes datas of a single course
export const deleteACourse = (req, res) => {
    const query = `DELETE FROM courses WHERE course_id = '${req.params.id}';`;
    
	db.query(query, (err, data) => {
        if (err) return res.status(500).json({ error: "Can't delete a course which is already ongoing. Wait for the smemester to end!" });

		return res.status(204).json(data);
    });
}