import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Toast from 'react-bootstrap/Toast';

function SingleTask({ _id, name, data, complete, deleteValue, deleteValueSet }) {

    //const [showDelete, setShowDelete] = useState(false);

    //const toggleDelete = () => setShowDelete(!showDelete);

    const deleteTask = async () => {
        try {
            const response = await fetch(`http://localhost:5050/task/delete/${_id}`, {
                method: 'DELETE',
            })
            const data = await response.json()
            //toggleDelete();
            deleteValueSet(!deleteValue)
            alert("Task Delete!");


            return data
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <div className='d-flex justify-content-between align-items-center py-2'>
                        <div className='d-flex gap-2'>
                            <Button variant="success">Complete</Button>
                            <p>{name}</p>
                        </div>
                        <div className='d-flex gap-2'>
                            <Button>Modify</Button>
                            <Button onClick={deleteTask} variant="danger">Delete</Button>
                            {/* <Toast show={showDelete} onClose={toggleDelete}>
                                <Toast.Header>
                                    <strong className="me-auto">ToDo List</strong>
                                </Toast.Header>
                                <Toast.Body>Task Deleted!</Toast.Body>
                            </Toast> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SingleTask;