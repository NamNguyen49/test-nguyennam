import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Story = () => {
    return (
        <div className="storys" style={{ backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '50vh' }}>
            <Container>
                <Row>
                    <Col >
                        <span className='story' style={{ fontSize: '20px', color: '#646464', position: 'relative', left: '55px' }}>
                            A child asked his father, "How were people born?" So his father said, "Adam and Eve made babies, then their <br />
                            babies became adults and made babies, and so on."The child then went to his mother, asked her the same <br />
                            question and she told him, "We were monkeys then we evolved to become like we are now." The child ran back <br />
                            to his father and said, "You lied to me!" His father replied, "No, your mom was talking about her side of the <br /> family."</span>



                    </Col>
                    <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '10vh' }}>
                        <hr style={{ width: '800px', borderWidth: '1px', borderStyle: 'solid', borderColor: '#646464', marginRight: '187px' }} />
                    </span>
                </Row>
                <Row>
                    <Col>
                        <div className='button' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '187px' }}>
                            <button style={{ backgroundColor: '#2C7EDB', color: 'white', margin: '0 10px', width: '250px', border: 'none', padding: '10px 20px' }}>This is a Funny!</button>
                            <button style={{ backgroundColor: '#29B363', color: 'white', margin: '0 10px', width: '250px', border: 'none', padding: '10px 20px' }}>This is not a funny</button>
                        </div>

                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default Story;
