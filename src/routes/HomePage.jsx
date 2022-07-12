import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import TodoForm from "../components/TodoForm";
import {useState} from "react";
import {useEffect} from "react";
import TodoItem from "../components/TodoItem";


const HomePage = () => {
    const data = JSON.parse(localStorage.getItem('todoForm') ) || []
    const [todoItems, setTodoItems] = useState([...data]);


    const createTodoItem = todoItem => {

        const localTodoItems = [todoItem, ...todoItems];
        setTodoItems(localTodoItems);

        localStorage.setItem('todoForm', JSON.stringify(localTodoItems));
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
                                ({title, description}, index) => (
                                    <TodoItem
                                        key={index}
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