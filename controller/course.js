import db from './../dbconnect.js'

export const  allCourse = (req, res) => {
    db.query("SELECT * FROM courses;", (err, data) => {
        if (err) return res.status(500).json(err);
        console.log(data);
        return res.status(200).json(data);
    });
}

export const singleCourse = (req, res) => {
    const query = `SELECT * FROM courses WHERE course_id = '${req.params.id}';`;
    console.log(query);
    db.query(query, (err, data) => {
        if (err) return res.status(500).json(err);
        console.log(data);
        return res.status(200).json(data);
    });
}