import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function InputTask() {
    return (
        <div className='d-flex gap-2'>
            <Form.Control
                aria-label="Small"
                type="text"
            />
            <Button variant="primary">Create Task</Button>
        </div>
    );
}

export default InputTask;