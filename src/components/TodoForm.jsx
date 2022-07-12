import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {useState} from "react";

const TodoForm = ({handleSubmit}) => {
    const [inputsState, setInputsState] = useState({
        title: '',
        description: '',
    });

    const inputHandler = name => ({target}) => {
        const localInputsState = {...inputsState};
        localInputsState[name] = target.value;
        setInputsState(localInputsState);
    }

    const submitHandler = event => {
        event.preventDefault();
        handleSubmit(inputsState)
    }

    return (
        <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3" controlId="todoFormTitle">
                <Form.Label>Task title</Form.Label>
                <Form.Control
                    name='title'
                    onInput={inputHandler('title')}
                    value={inputsState['title']}
                    type="text"
                    placeholder="Task title"
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="todoFormDescription">
                <Form.Label>Task description</Form.Label>
                <Form.Control
                    name='description'
                    onInput={inputHandler('description')}
                    as="textarea"
                    placeholder="Task description"
                    value={inputsState['description']}
                    style={{
                        height: '200px'
                    }}
                />
            </Form.Group>

            <Button type='submit'>Create Task!</Button>
        </Form>
    );
};

export default TodoForm;