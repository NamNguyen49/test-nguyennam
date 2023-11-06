import React from 'react';
import './header.css';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
    return (
        <div className="header">
            <Container>
                <Row className="align-items-center">
                    <Col>
                        <div className="logo">
                            <img src="/logo.jpg" alt="Logo" className="logo-image" />
                        </div>
                    </Col>


                    <Col className="user-profile">
                        <div className="text">
                            <span className="text-line1">Handicrafted by</span>
                            <span className="text-line2">Jim HLS</span>
                        </div>
                        <img src="/avatar.jpg" alt="Avatar" className="avatar-image" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Header;
