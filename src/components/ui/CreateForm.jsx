import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import "..";

function CreateForm({ setPosts }) {

    const formRef = useRef(null);

    const submitHandler = async (e) => {
        e.preventDefault();
        const { data } = await axios.post('/api/main/post', Object.fromEntries(new FormData(e.target)));
        setPosts((prev) => [...prev, data]);
        formRef.current.reset(); // Reset the form using the ref
    };

    const [selectedSmiley, setSelectedSmiley] = useState(null);
    const [selectedGender, setSelectedGender] = useState(null);

    const handleSmileyClick = (index) => {
        setSelectedSmiley(index === selectedSmiley ? null : index);
    };

    const handleGenderClick = (index) => {
        setSelectedGender(index === selectedGender ? null : index);
    };

    const smileys = ['😴', '😀', '😱'];
    const gender = ['м', 'ж'];
    const sports = [
        'Ходьба',
        'Бег',
        'Подъем по лестнице',
        'Футбол',
        'Баскетбол',
        'Волейбол',
        'Теннис',
        'Гандбол',
        'Хоккей',
        'Бейсбол',
        'Регби',
        'Крикет',
        'Гольф',
        'Бокс',
        'Дзюдо',
        'Карате',
        'Тхэквондо',
        'Велоспорт',
        'Лыжи',
        'Сноуборд',
        'Фигурное катание',
        'Плавание',
        'Водное поло',
        'Синхронное плавание',
        'Прыжки в воду',
        'Гимнастика',
        'Легкая атлетика',
        'Парусный спорт',
        'Академическая гребля',
        'Веслевой спорт',
        'Конный спорт',
        'Скалолазание',
        'Скейтбординг',
        'Серфинг',
        'Паралимпийские виды спорта'
    ];
    useEffect(() => {
        setSelectedGender(null);
        setSelectedSmiley(null);
      }, [setPosts]);
    return (
        <form
            ref={formRef}
            onSubmit={submitHandler}
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '70px',
            }}>
            <div className="mb-3">
                <label className="form-label"
                    style={{
                        fontSize: '18px', alignItems: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column', marginTop: '10px'
                    }}>
                    <h1>Моя активность</h1>
                </label>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

                    <div>
                        <p>Название активности</p>
                        <select style={{ width: '500px', marginTop: '-10px' }} type="text" name="name" className="form-control">
                            <option>Выберите вид спорта</option>
                            {sports.map((sport, index) => (
                                <option key={index} value={sport}>{sport}</option>
                            ))}
                        </select>
                    </div>
                    <div style={{ display: 'flex', gap: '40px' }}>
                        <div>
                            <p>Длительность</p>
                            <input style={{ width: '80px', marginTop: '-10px', }} type="number" name="time" className="form-control" />
                        </div>
                        <div style={{ width: '100px' }}>
                            <p style={{ textAlign: 'center' }}>Пол</p>
                            <input type="hidden" name="sex" value={ selectedGender !== null ? gender[selectedGender] : ''} />

                            <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', marginTop: '-10px' }} type="text" name="sex" >
                                {gender.map((sex, index) => (
                                    <p
                                        key={index}
                                        style={{
                                            fontSize: '24px',
                                            width: '25px',
                                            textAlign: 'center',
                                            backgroundColor: selectedGender === index ? '#0b2d50' : 'transparent',
                                            color: selectedGender === index ? 'white' : '#212529',
                                        }}
                                        onClick={() => handleGenderClick(index)}
                                    >
                                        {sex}
                                    </p>
                                ))}
                            </div>
                        </div>
                        <div>
                            <p style={{ textAlign: 'center' }}>Рост</p>
                            <input style={{ width: '80px', marginTop: '-10px', }} type="number" name="height" className="form-control" />
                        </div>
                        <div>
                            <p style={{ textAlign: 'center' }}>Вес</p>
                            <input style={{ width: '80px', marginTop: '-10px', }} type="number" name="weight" className="form-control" />
                        </div>
                    </div>
                    <div>
                        <p style={{ textAlign: 'center' }}>Интенсивность</p>
                        <input type="hidden" name="intensive" value={selectedSmiley !== null ? smileys[selectedSmiley] : ''} />

                        <div style={{ display: 'flex', justifyContent: 'center', gap: '40px' }} type="text" name="intensive" >
                            {smileys.map((smiley, index) => (
                                <p
                                    key={index}
                                    style={{
                                        fontSize: '24px',
                                        backgroundColor: selectedSmiley === index ?  '#0b2d50' : 'transparent',
                                    }}
                                    onClick={() => handleSmileyClick(index)}
                                >
                                    {smiley}
                                </p>
                            ))}
                        </div>
                    </div>
                    <div>
                        <p>Комментарий</p>
                        <input style={{ width: '500px', marginTop: '-10px', }} type="text" name="desc" className="form-control" />
                    </div>

                </div>
            </div>
            <button type="submit" className="btn primary" style={{ backgroundColor: '#0b2d50', color: 'white', marginTop: '10px' }}>Добавить</button>
        </form>
    );
}

export default CreateForm;
