import React from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import {data} from "./Certs";
import './CardComponent.css';

function CardComponent() {
  return (
    <div>
      <Row xs={2} md={4}>
      {data.map((cert) => {
        return (
                <Card className="card">
                  <Card.Img variant="top" src={cert.img} />
                  <Card.Body className="card-body">
                    <Card.Title>{cert.title}</Card.Title>
                    <Card.Text>Issued by: {cert.issuedBy}</Card.Text>
                    <p>Issued on: {cert.date}</p>
                  </Card.Body>
                </Card>
        );
      })}
      </Row>
    </div>
  );
}

export default CardComponent;
