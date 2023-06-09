import React, { useState, useEffect } from 'react';
import { Container, ListGroup,Image, Row, Col } from 'react-bootstrap';


function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://baconipsum.com/api/?type=meat-and-filler')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (<>
 <Container >
      <ListGroup>
        {data.map((paragraph, index) => (
          <ListGroup.Item key={index}>
            <Container fluid>
              <Row>
              <Col md="auto"><Image src={`https://picsum.photos/200?random=${Math.floor(Math.random() * 1000)}`}/></Col>
              <Col className="square border">{paragraph}</Col>
                        </Row>
            </Container>
            </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
    </>
  );
}

export default Home;
