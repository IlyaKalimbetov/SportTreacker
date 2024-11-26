import React from 'react'
import { Nav } from 'react-bootstrap'

export default function MainPage({ user }) {
    return (
        <>
            <div style={{ width: '100%', marginTop: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ width: '80%', maxWidth: '1200px', margin: '0 auto' }}>
                    <h1 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '20px' }}>Добро пожаловать на SportTracker</h1>
                    <p style={{ fontSize: '18px', color: '#666', marginBottom: '40px' }}>Отслеживайте свои тренировки и достигайте своих целей с помощью нашего простого приложения.</p>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
                        <img src="https://i.pinimg.com/originals/fe/76/18/fe76186bb5d21b01918b2c877694b0b2.jpg" alt="Изображение тренировки" style={{ width: '300px', height: '300px', borderRadius: '10px' }} />
                        <div style={{ width: '60%', marginLeft: '20px' }}>
                            <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px' }}>Популярная статья</h2>
                            <p style={{ fontSize: '16px', color: '#666' }}>Старайтесь чаще ходить пешком, подниматься по лестницам, делать зарядку по утрам. Приступая к занятиям спортом, не забывайте, что нагрузку необходимо увеличивать постепенно. Движение- это жизнь! </p>
                            <button style={{ backgroundColor: '#0b2d50', color: '#fff', padding: '10px 20px', borderRadius: '5px', border: 'none' }} onClick={() => window.open('https://infourok.ru/user/kuteckij-ivan-aleksandrovich/blog/rol-sporta-v-zhizni-lyudej-282943.html', '_blank')}
                            >Подробнее</button>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ width: '80%', maxWidth: '1200px', margin: '0 auto' }}>
                    <h1 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '20px' }}>Важность спорта в современной жизни</h1>
                    <p style={{ fontSize: '18px', color: '#666', marginBottom: '40px' }}>Спорт играет очень важную роль в жизни современного человека. Но, тем не менее, различные люди по-разному воспринимают роль спорта в повседневной жизни.</p>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
                        <img src="https://avatars.mds.yandex.net/i?id=f098c360da7fef660d474898f63dc6f5_l-9065974-images-thumbs&n=13" alt="Workout image" style={{ width: '200px', height: '200px', borderRadius: '10px' }} />
                        <div style={{ width: '60%', marginLeft: '20px' }}>
                            <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px' }}>Польза спорта для здоровья</h2>
                            <p style={{ fontSize: '16px', color: '#666' }}>Всевозможные занятия спортом способствуют не только физическому развитию человека, но и моральному. Физические упражнения приводят мышцы в тонус, придают уверенность в себе, развивают выносливость, способствуют улучшению работы внутренних органов и центральной нервной системы.</p>
                        </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
                        <div style={{ width: '60%', marginRight: '20px' }}>
                            <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px' }}>Почему спорт так важен?</h2>
                            <p style={{ fontSize: '16px', color: '#666' }}>Сидячий, малоподвижный образ жизни, нарастающее с каждым днем экологическое загрязнение приводят к печальному исходу. Все чаще в наше время у молодых людей возникают нарушения сердечно-сосудистой системы, нервные расстройства, проблемы с обменом веществ.</p>
                        </div>
                        <img src="https://avatars.mds.yandex.net/i?id=64c52ff8b3f0df6fef541dafc5526eb9_l-5232396-images-thumbs&n=13" alt="Workout image" style={{ width: '200px', height: '200px', borderRadius: '10px' }} />
                    </div>
                    {/* <button style={{ backgroundColor: '#4CAF50', color: '#fff', padding: '10px 20px', borderRadius: '5px', border: 'none' }} onClick={() => history.push('/')}>
                        Начните заниматься спортом уже сегодня!</button> */}
                    {user ?
                        (<Nav.Link href="/" style={{ backgroundColor: '#4CAF50', color: '#fff', padding: '10px 20px', borderRadius: '5px', border: 'none', width: '400px' }}>
                            Начните заниматься спортом уже сегодня!
                        </Nav.Link>)
                        : (

                            <Nav.Link href="/registration" style={{ backgroundColor: '#0b2d50', color: '#fff', padding: '10px 20px', borderRadius: '5px', border: 'none', width: '400px' }}>
                                Начните заниматься спортом уже сегодня!
                            </Nav.Link>)
                    }

                </div>
            </div>
        </>
    )
}
