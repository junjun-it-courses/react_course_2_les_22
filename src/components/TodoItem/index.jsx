import './style.css';
import React from 'react';
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";

const TodoItem = ({title, description, id}) => {
    const navigate = useNavigate();

    const redirect = () => {
        navigate('single-todo/' + id)
    }

    return (
        <Col xs={4}>
            <div className='taskWrapper'>
                <div className="taskHeading" onClick={redirect}>{title}</div>
                <div className="taskDescription">{description}</div>
            </div>
        </Col>
    );
};

export default TodoItem;
