import React from 'react';
import { useParams } from 'react-router-dom';
import Container from "react-bootstrap/Container";
import TodoItem from "../components/TodoItem"
import Row from "react-bootstrap/Row";

const SingleTodo = () => {
    const {id} = useParams();
    const data = JSON.parse(localStorage.getItem('todoForm'))
        .find(item => item.title === id);

    return (
        <div className='mt-5'>
            <Container>
                <Row>
                    <TodoItem
                        title={data.title}
                        description={data.description}
                    />
                </Row>
            </Container>
        </div>
    );
};

export default SingleTodo;