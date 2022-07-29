import { pool } from '../db.js'

const getTasks = async (req, res) => {
    try {
        // throw new Error("Error Connection");
        const [result] = await pool.query("SELECT * FROM tasks");
        res.json(result);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

const getTask = async (req, res) => {
    try {
        const [result] = await pool.query('SELECT * FROM tasks WHERE id = ?', [req.params.id]);
        if (result.length === 0)//if result is a empty or 0
            return res.status(404).json({ message: "Task not found" });
        return res.send(result[0]);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }


}

const CreateTask = async (req, res) => {
    try {
        const { title, description } = req.body
        const [result] = await pool.query('INSERT INTO tasks(title, description) VALUES (?,?)',
            [title, description]);
        res.json({
            id: result.insertId,
            title, description
        });
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

const UpdateTask = async (req, res) => {
    try {
        //we use req.body because the information can be just a one or more data, 
        //it's not strict, that's not specific variable
        const [result] = await pool.query("UPDATE tasks SET ? WHERE id = ?", [req.body, req.params.id]);
        if(result.affectedRows === 0){
            return res.status(404).json({message: "Task Not Found"})
        }
        return res.json(result)
    } catch (error) {
        return res.status(500).json({ message: err.message});
    }
}

const DeleteTask = async (req, res) => {

    try {
        const [result] = await pool.query("DELETE FROM tasks WHERE id = ?",
            [req.params.id]);
        // console.log(result);
        if (result.affectedRows === 0) {//if no one rows is affected
            return res.status(404).json({ message: 'Task Not Found' });
        }
        return res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({ message: err.message });
    }


}

export const methods = {
    getTasks,
    getTask,
    CreateTask,
    UpdateTask,
    DeleteTask
};