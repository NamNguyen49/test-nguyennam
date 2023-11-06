import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className="footer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '15vh' }}>
            <Container>
                <Row>
                    <Col className="text-center" style={{ paddingBottom: "15px" }}>
                        <span className='line-1' style={{ fontSize: '15px', color: '#AFAFAF' }}>This website is created as part of Hlsolutions program. The materials contained on this website are provided for general
                            <br /> information only and do not constitute any form of advice. HLS assumes no responsibility for the accuracy of any particular statement and
                            <br /> accepts no liability for any loss or damage which may arise from reliance on the information contained on this site.</span>
                        <br />
                        <span className='line-1' style={{ fontSize: '20px', color: 'black' }}>Copyright 2021 HLS</span>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;
