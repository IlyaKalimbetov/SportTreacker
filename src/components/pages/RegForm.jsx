// import axios from 'axios';
import React, { useState } from 'react';
import axios from 'axios';
import { Col, Nav, Row, Form, Button } from 'react-bootstrap';


export default function SignUpPage() {
    const [formData, setFormData] = useState({
        userName: '',
        email: '',
        pass: '',
    });
    const submitHandler = async (event) => {
        event.preventDefault();
        const response = await axios.post('/auth/registration', formData);
        if (response.status === 200) {
            window.location.href = '/';
        }
    };
    const changeHandler = (e) => setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    return (
        <Form onSubmit={submitHandler} style={{
            margin: '0 auto', width: '500px', display: 'flex', flexDirection: 'column', justifyContent: 'center', marginTop: '100px'
            //  width: '500px', display: 'flex', flexDirection: 'column', justifyContent: 'center', marginLeft: '500px', marginTop: '100px'
        }}>
            <h2 style={{ textAlign: 'center' }}>Регистрация</h2>

            <Form.Group className="mb-3" controlId="formBasicUserName">
                <Form.Label>Имя пользователя</Form.Label>
                <Form.Control
                    value={formData.userName}
                    onChange={changeHandler}
                    type="text"
                    name="userName"
                    placeholder="Введите ваше имя"
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                    value={formData.email}
                    onChange={changeHandler}
                    type="email"
                    name="email"
                    placeholder="Введите email"
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Пароль</Form.Label>
                <Form.Control
                    value={formData.password}
                    onChange={changeHandler}
                    type="password"
                    name="pass"
                    placeholder="Password"
                />
            </Form.Group>

            <Row className="justify-content-center mt-3 mb-3 text-center">
                <Col>
                    <Button variant="primary" type="submit">
                        Зарегистрироваться
                    </Button>
                </Col>
            </Row>
            <Row className="justify-content-center mt-3 mb-3 text-center">
                <Col>
                    <Nav.Link href="/login"> Уже есть аккаунт? Авторизируйтесь</Nav.Link>
                </Col>
            </Row>
        </Form >
    );
}
