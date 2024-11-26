import React, { useState } from 'react';
import { Button, Card, ListGroup } from 'react-bootstrap';

function OnePost({ post, onDelete, onEdit }) {
    const [show, setShow] = useState(true);
    const [input, setInput] = useState({
        name: post.name,
        time: post.time,
        desc: post.desc,
        sex: post.sex,
        height: post.height,
        weight: post.weight,
        intensive: post.intensive,
    });

    const clickHandler = () => {
        setShow((prev) => !prev);
    }

    const changeHandler = (e) => {
        setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
    // width: '300px', margin: '30px', marginTop: '50px', 
    function calculateCalories(intensive, time, sport, sex, height, weight) {
        const caloriesPerHour = {
            'Ходьба': 20,
            'Бег': 40,
            'Подъем по лестнице': 52,
            'Футбол': 60,
            'Баскетбол': 70,
            'Волейбол': 50,
            'Теннис': 80,
            'Гандбол': 65,
            'Хоккей': 75,
            'Бейсбол': 55,
            'Регби': 70,
            'Крикет': 60,
            'Гольф': 40,
            'Бокс': 80,
            'Дзюдо': 70,
            'Карате': 75,
            'Тхэквондо': 80,
            'Велоспорт': 60,
            'Лыжи': 70,
            'Сноуборд': 75,
            'Фигурное катание': 50,
            'Плавание': 55,
            'Водное поло': 70,
            'Синхронное плавание': 60,
            'Прыжки в воду': 50,
            'Гимнастика': 70,
            'Легкая атлетика': 60,
            'Парусный спорт': 40,
            'Академическая гребля': 70,
            'Веслевой спорт': 60,
            'Конный спорт': 50,
            'Скалолазание': 80,
            'Скейтбординг': 70,
            'Серфинг': 60,
        };
    
        const intensiveMultiplier = {
            '😴': 1.375,
            '😀': 1.725,
            '😱': 2,
        };

        const sexo = sex?.trim().toLowerCase();

        if (sexo !== 'м' && sexo !== 'ж') {
            throw new Error("Укажите корректный пол ('м' или 'ж')");
        }
    
        // Рассчитываем базовый метаболизм (BMR)
        let bmr;
        if (sexo === 'м') {
            bmr = 88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * 20); // Возраст условно 30
        } else if (sexo === 'ж') {
            bmr = 447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * 20); // Возраст условно 30
        } else {
            throw new Error("Укажите корректный пол ('м' или 'ж')");
        }
    
        // Считаем калории
        const calories = 
            (bmr * intensiveMultiplier[intensive] + caloriesPerHour[sport] * time) / 60;
    
        return Math.round(calories);
    }
    
    return (
        <div className="card mb-3" style={{ width: '500px', margin: '30px auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div className="row g-0">
                <div className="col-md-8">
                    <div className="card-body">
                        {show ? (
                            <Card style={{ width: '450px' }}>
                                <Card.Header> Дата: {new Date(post.createdAt).toLocaleDateString()}</Card.Header>
                                <ListGroup variant="flush">
                                    <ListGroup.Item> Активность: {post.name}</ListGroup.Item>
                                    <ListGroup.Item> Интенсивность: {post.intensive}</ListGroup.Item>
                                    <ListGroup.Item> Длительность: {post.time}</ListGroup.Item>
                                    <ListGroup.Item> Пол: {post.sex}</ListGroup.Item>
                                    <ListGroup.Item> Рост: {post.height}</ListGroup.Item>
                                    <ListGroup.Item> Вес: {post.weight}</ListGroup.Item>
                                    <ListGroup.Item> Комментарий: {post.desc}</ListGroup.Item>
                                    <ListGroup.Item>Потраченные калории: {calculateCalories(post.intensive, post.time, post.name, post.sex, post.weight,post.height )}ккал</ListGroup.Item>

                                </ListGroup>
                            </Card>

                        ) : (

                            <input
                                name="desc"
                                type="text"
                                value={input.desc}
                                onChange={changeHandler}
                                style={{
                                    width: '100%',
                                    padding: '8px',
                                    borderRadius: '4px',
                                    border: '1px solid #ccc',
                                    fontSize: '16px',
                                    margin: '10px 0',
                                }}
                            />


                        )}
                        {show ? (
                            <>
                                {/* <Button
                                    className="btn primary"
                                    onClick={clickHandler}
                                    style={{
                                        backgroundColor: '#978C8A',
                                        color: 'white',
                                        marginRight: '10px',
                                        fontSize: '12px',
                                    }}
                                >
                                    Изменить
                                </Button> */}
                                {/* <Button
                                    className="btn primary"
                                    onClick={() => onDelete(post.id)}
                                    style={{
                                        backgroundColor: '#978C8A',
                                        color: 'white',
                                        fontSize: '12px',
                                    }}
                                >
                                    Удалить
                                </Button> */}
                                <button onClick={() => onDelete(post.id)} className="btn primary" style={{ backgroundColor: '#0b2d50', color: 'white', marginTop: '10px', marginLeft: '180px' }}>Удалить</button>

                            </>
                        ) : (
                            <>
                                <Button
                                    className="btn primary"
                                    onClick={() => {
                                        onEdit(post.id, input);
                                        setShow(true);
                                    }}
                                    style={{
                                        backgroundColor: '#978C8A',
                                        color: 'white',
                                        marginRight: '10px',
                                        fontSize: '12px',
                                    }}
                                >
                                    Сохранить
                                </Button>
                                <Button
                                    className="btn primary"
                                    onClick={clickHandler}
                                    style={{
                                        backgroundColor: '#978C8A',
                                        color: 'white',
                                        fontSize: '12px',
                                    }}
                                >
                                    Отменить
                                </Button>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OnePost;
