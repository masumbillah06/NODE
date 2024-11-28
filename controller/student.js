import db from './../dbconnect.js'

export const  allStudent = (req, res) => {
    db.query("SELECT * FROM `students`;", (err, data) => {
        if (err) return res.status(500).json(err);
        console.log(data);
        return res.status(200).json(data);
    });
}

export const singleStudent = (req, res) => {
    const query = `SELECT * FROM students WHERE student_id = '${req.params.id}';`;
    console.log(query);
    db.query(query, (err, data) => {
        if (err) return res.status(500).json(err);
        console.log(data);
        return res.status(200).json(data);
    });
}

export const createStudent = (req, res) => {
    console.log("req confirm")
    console.log(req.body)
    return res.status(200).send('test')
}

