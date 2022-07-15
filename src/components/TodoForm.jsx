import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Formik } from 'formik';

const formInitialValues = {
    title: '',
    description: ''
}

const TodoForm = ({handleSubmit}) => {

    const formSubmitHandler = values => handleSubmit(values);

    return (
        <Formik
            initialValues={formInitialValues}
            onSubmit={formSubmitHandler}
        >
            {({
                  values,
                  handleChange,
                  handleBlur,
                  handleSubmit,
              }) => (
                    <Form onSubmit={ handleSubmit}>
                        <Form.Group className="mb-3" controlId="todoFormTitle">
                            <Form.Label>Task title</Form.Label>
                            <Form.Control
                                name='title'
                                type="text"
                                placeholder="Task title"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.title}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="todoFormDescription">
                            <Form.Label>Task description</Form.Label>
                            <Form.Control
                                name='description'
                                as="textarea"
                                placeholder="Task description"
                                style={{
                                    height: '200px'
                                }}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.description}
                            />
                        </Form.Group>

                        <Button type='submit'>Create Task!</Button>
                    </Form>
                )}
        </Formik>
    );
};

export default TodoForm;
