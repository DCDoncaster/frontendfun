import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function NotFound() {
  const [joke, setJoke] = React.useState('');

  React.useEffect(() => {
    fetch('https://v2.jokeapi.dev/joke/Any?type=single')
      .then((response) => response.json())
      .then((data) => setJoke(data.joke));
  }, []);

  return (
    <Container fluid className="d-flex flex-column justify-content-center align-items-center" style={{ backgroundColor: '#6f42c1', height: '100vh' }}>
      <Row>
        <Col>
          <h1 style={{ color: 'white' }}>404</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <p style={{ color: 'white' }}>Page Not Found</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p style={{ color: 'white' }}>But Here's a Joke</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p style={{ color: 'white' }}>{joke}</p>
        </Col>
      </Row>
    </Container>
  );
}

export default NotFound;
