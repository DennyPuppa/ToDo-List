import Input from './components/input/input'
import AllTask from './components/allTask/AllTask'
import Card from 'react-bootstrap/Card';

function App() {
  return (
    <section className='container my-4'>
            <div className='row'>
                <div className='col-6 offset-3'>
                    <Card>
                        <Card.Header>To Do List</Card.Header>
                        <Card.Body>
                          <Input/>
                          <AllTask/>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </section>
  );
}

export default App;
