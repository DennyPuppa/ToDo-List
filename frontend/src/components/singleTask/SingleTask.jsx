import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';

function SingleTask({_id, name, data, complete}) {

    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <div className='d-flex justify-content-between align-items-center'>
                        <Button>Done</Button>
                        <p>{name}</p>
                        <Button>Modify</Button>
                        <Button>Delete</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SingleTask;