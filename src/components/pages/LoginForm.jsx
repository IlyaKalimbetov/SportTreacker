import React from 'react'
import axios from 'axios';
import { Col, Row, Button, Form } from 'react-bootstrap';


export default function Login() {

    const submitHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        console.log(data)
        try {
            const res = await axios.post('/auth/login', data);
            if (res.status === 200) {
                window.location = '/';
            }
        } catch (error) {
            alert(error.response.data.message)
        }
    };
    return (
        <Form onSubmit={submitHandler} style={{margin: '0 auto', width: '500px', display: 'flex', flexDirection: 'column', justifyContent: 'center', marginTop: '100px' }} >
            <h2 style={{ textAlign: 'center' }}>Авторизация</h2>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Пароль</Form.Label>
                <Form.Control type="password" name="password" placeholder="Password" />
            </Form.Group>

            <Row className="justify-content-center mt-3 mb-3 text-center">
                <Col>
                    <Button variant="primary" type="submit">
                        Войти
                    </Button>
                </Col>
            </Row>
        </Form>
    );
}

