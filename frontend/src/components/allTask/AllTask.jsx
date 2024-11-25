import { useState, useEffect } from 'react';
import SingleTask from '../singleTask/SingleTask';

function AllTasks() {

    const [allTasks, setAllTasks] = useState([])

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
    }, [])


    return (
        <div className='col-12 my-5'>
            {allTasks.map((task, index) => (
                <SingleTask
                    key={`singletask-${index}`}
                    _id={task._id}
                    name={task.name}
                    data={task.data}
                    complete={task.complete}
                />

            )).reverse()}
        </div>
    );
}

export default AllTasks;