import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import TodoForm from "../components/TodoForm";
import {useEffect, useState} from "react";
import TodoItem from "../components/TodoItem";
import Storage from "../utils/Storage";


const HomePage = () => {
    const [todoItems, setTodoItems] = useState([]);

    useEffect(() => {

        const fetchData = async () => {
            let dataFromStorage = [];

            try {
                dataFromStorage = await Storage.getItems()
            } catch (e) {
                console.log(e)
            }

            if(Array.isArray(dataFromStorage) && dataFromStorage.length) {
                setTodoItems(dataFromStorage)
            }
        }

        fetchData();

    }, [])


    const createTodoItem = async todoItem => {
        const newState = await Storage.setItem(todoItem)
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
