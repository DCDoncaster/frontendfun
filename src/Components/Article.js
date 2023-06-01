import React from "react";
import { Container, Image, Row, Col, Accordion } from "react-bootstrap";
import AccordionBody from "react-bootstrap/esm/AccordionBody";

function Article(props) {
  return (
    <article>
      <Container>
        <Row>
          {props.article.over_18 === false ? (
            <>
              <Col md="auto" style={{ width: "15%" }}>
                {props.article.thumbnail[0] === "h" ? (
                  <Image src={props.article.thumbnail} />
                ) : (
                  <Image
                    src="https://logodownload.org/wp-content/uploads/2018/02/reddit-logo-16.png"
                    fluid
                  />
                )}
              </Col>
              <Col>
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey={props.index}>
                    <Accordion.Header>
                      <Col>
                        <Row>
                          {" "}
                          <a
                            href={
                              "https://reddit.com" + props.article.permalink
                            }
                            target="_blank"
                            rel="noreferrer"
                          >
                            {props.article.title}
                          </a>
                        </Row>
                        <Row></Row>
                        <Row>
                          <Col>{props.article.link_flair_text}</Col>
                        </Row>
                      </Col>
                      <Col>
                        Author:{" "}
                        <a
                          href={"https://reddit.com/u/" + props.article.author}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {props.article.author}
                        </a>
                      </Col>
                    </Accordion.Header>
                    {props.article.selftext !== null?<>
                    <AccordionBody>{props.article.selftext}</AccordionBody>
                    <AccordionBody>Upvotes: {props.article.ups}</AccordionBody></>
                    :""}
                  </Accordion.Item>
                </Accordion>
              </Col>
            </>
          ) : (
            ""
          )}
        </Row>
      </Container>
    </article>
  );
}

export default Article;
