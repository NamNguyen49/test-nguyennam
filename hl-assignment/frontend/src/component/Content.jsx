import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Content = () => {
    return (
        <div className="content" style={{ backgroundColor: '#29B363', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '23vh' }}>
            <Container>
                <Row>
                    <Col className="text-center">
                        <span className='line-1' style={{ fontSize: '40px', fontWeight: 'bold', color: 'white' }}>A joke a day keeps the doctor away</span>
                        <br />
                        <span className='line-1' style={{ fontSize: '15px', fontWeight: 'bold', color: 'white' }}>If you joke wrong way, your teeth have to pay. (Serious)</span>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Content;
