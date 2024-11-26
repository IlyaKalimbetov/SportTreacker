import React from 'react'
import axios from 'axios';
import { Container, Nav, Navbar } from 'react-bootstrap';

export default function NavBar({ user }) {
  return (
    <Navbar className="!bg-[#0b2d50]" style={{ width: '100%', margin: 0, background: '#0b2d50', }} >

      <Container style={{ color: 'white'}}>
        <Navbar.Brand style={{ color: 'white' }} href="/">SportTracker</Navbar.Brand>
        <Nav className="me-auto flex-grow-1" >
          <Nav.Link className='navigation' style={{ color: 'white' }} href="/">Главная</Nav.Link>
          {user && <Nav.Link href="/main" className='navigation' style={{ color: 'white' }}>Моя активность</Nav.Link>}
        </Nav>
        <Nav className="me-auto flex-grow-0">
          {user ? (
            <Nav.Link
            style={{ color: 'white' }}
              href="/logout"
              onClick={(e) => {
                e.preventDefault();
                axios('/auth/logout')
                  .then(() => (window.location.href = '/login'))
                  .catch(console.log);
              }}
            > Выход

            </Nav.Link>
          ) : (
            <>
              <Nav.Link href="/login" className='navigationLog' style={{ color: 'white' }}>Авторизация</Nav.Link>
              <Nav.Link className='navigation' href="/registration" style={{ color: 'white' }}>Регистрация</Nav.Link>
            </>

          )}
        </Nav>
      </Container>
    </Navbar>
  );

}
