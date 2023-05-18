import React from "react";
import { Container, Image, Row, Col } from "react-bootstrap";

function Article(props) {
  return (
    <article>
      <Container>
        <Row>
          <Col md="auto" style={{width:"15%"}}>
            {props.article.thumbnail[0] == "h" ? (
              <Image src={props.article.thumbnail} />
            ) : (
              <Image src="https://logodownload.org/wp-content/uploads/2018/02/reddit-logo-16.png" fluid/>
            )}
          </Col>
          <Col>
            <a
              href={"https://reddit.com" + props.article.permalink}
              target="_blank"
              rel="noreferrer"
            >
              <h3>{props.article.title}</h3>
              <a href={"https://reddit.com/u/"+props.article.author} target="_blank" rel="noreferrer">{props.article.author}</a>
            </a>  
          </Col>
        </Row>
      </Container>
    </article>
  );
}

export default Article;
