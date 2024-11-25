import { useState, useEffect } from 'react';
import SingleTask from '../singleTask/SingleTask';

function AllTasks() {

    const [allTasks, setAllTasks] = useState([])
    const [isDelete, setIsDelete] = useState(false)

    // const [showDelete, setShowDelete] = useState(false);
    // const toggleDelete = () => setShowDelete(!showDelete);

    const getAllTasks = async () => {
        try {
            const response = await fetch('http://localhost:5050/tasks')
            const data = await response.json()
            console.log(data);
            setAllTasks(data);

            return data
        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        getAllTasks()
    }, [isDelete])


    return (
        <div className='col-12 my-5'>
            {allTasks.map((task, index) => (
                <SingleTask
                    key={`singletask-${index}`}
                    _id={task._id}
                    name={task.name}
                    data={task.data}
                    complete={task.complete}
                    deleteValue={isDelete}
                    deleteValueSet={setIsDelete}
                />

            )).reverse()}
        </div>
    );
}

export default AllTasks;