import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import TodoForm from "../components/TodoForm";
import {useState} from "react";
import TodoItem from "../components/TodoItem";
import Storage from "../utils/Storage";


const HomePage = () => {
    const data = Storage.getItems() || []
    const [todoItems, setTodoItems] = useState([...data]);

    const createTodoItem = todoItem => {

        const newState = Storage.setItem(todoItem)

        setTodoItems(newState);
    }


    return (
        <>
            <h1 className='text-center mt-4'>Todo Items</h1>

            <Container>
                <Row>
                    <Col xs={4}>
                        <TodoForm handleSubmit={createTodoItem} />
                    </Col>

                    <Col xs={8}>
                        <Row>
                            {todoItems.map(
                                ({title, description, id}, index) => (
                                    <TodoItem
                                        key={index}
                                        id={id}
                                        title={title}
                                        description={description}
                                    />
                                )
                            )}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default HomePage;
