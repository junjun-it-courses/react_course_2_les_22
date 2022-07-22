import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import Container from "react-bootstrap/Container";
import TodoItem from "../components/TodoItem"
import Row from "react-bootstrap/Row";
import Storage from "../utils/Storage";

const SingleTodo = () => {
    const {id} = useParams();
    const [singleItem, setSingleItem] = useState({});

    useEffect(() => {

        const fetchData = async () => {
            const dataFromStorage = await Storage.getItems();
            const item = dataFromStorage.find(item => item.id === +id)
            console.log(item)
            setSingleItem(item);
        }

        fetchData();

    }, [])

    return (
        <div className='mt-5'>
            <Container>
                <Row>
                    {/* Todo edit form goes here */}

                    <TodoItem
                        title={singleItem.title}
                        description={singleItem.description}
                    />
                </Row>
            </Container>
        </div>
    );
};

export default SingleTodo;
