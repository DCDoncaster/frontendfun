import React, { useState, useEffect } from 'react';
import { Container, ListGroup, Row, Col } from 'react-bootstrap';


function Jokes() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://v2.jokeapi.dev/joke/Programming,Pun?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart&amount=1000')
      .then(response => response.json())
      .then(data => setData(data.jokes));
  }, []);

  return (<>
 <Container fluid>
      <ListGroup>
        {data.map((joke, index) => (
          <ListGroup.Item key={index}>
            <Container fluid>
              <Row>
              <Col md="">{joke.setup}</Col>
              <Col className="square border">{joke.delivery}</Col>
                        </Row>
            </Container>
            </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
    </>
  );
}

export default Jokes;
