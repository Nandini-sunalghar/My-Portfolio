import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './Certifications.css';
import CardComponent from './CardComponent';

function Certifications() {
    return (
        <div className="cert-main">
            <div className="cert-title">
            <h5>Certifications</h5>
            <p>Here are some of my certifications</p>
            </div>
            <CardComponent />
        </div>
    )
}

export default Certifications;
