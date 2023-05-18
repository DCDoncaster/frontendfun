import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Container} from 'react-bootstrap';

function Jokes() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://v2.jokeapi.dev/joke/Programming,Pun?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart&amount=20')
      .then(response => response.json())
      .then(data => setData(data.jokes));
  }, []);

  return (
    //Set a container that fills 80% of the screen width and height
  <Container>
<Row xs={1} md={5} className="g-4">
          {data.map((joke, index) => (
            <Col>
              <Card className="h-100 d-flex flex-column">
              <Card.Img variant="top" src={`https://picsum.photos/200?random=${Math.floor(Math.random() * 1000)}`} />
                <Card.Body>
                <Card.Header>{joke.category}</Card.Header>
                  <Card.Title>{joke.setup}</Card.Title>
                  <Card.Text>{joke.delivery}</Card.Text>
                  
                </Card.Body>
              </Card>
            </Col>
          ))}

    </Row>
    </Container>
  );
}

export default Jokes;
