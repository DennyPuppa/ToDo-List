import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';

function InputTask() {

    const [formData, setFormData] = useState({})

    const onChangeInput = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
        console.log(formData);
        
    }

    const createTask = async (e) => {
        e.preventDefault();

        const data = new FormData()

        data.append('name', formData)

        console.log(data);
        

        try {
            const response = await fetch(`http://localhost:5050/task/create`, {
                method: 'POST',
                body: JSON.stringify(data),
            })
            return response.data
        } catch (e) {
            console.log(e.message)
        }
    }

    return (
        <div className='d-flex gap-2'>
            <Form.Control
                aria-label="Small"
                type="text"
                name='name'
                onChange={onChangeInput}
            />
            <Button onClick={createTask} variant="primary">Create Task</Button>
        </div>
    );
}

export default InputTask;