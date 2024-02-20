import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const contributors = [
    {
        name: 'Pratik Chavhan',
        description: 'Meticulous planning with detailed execution on the back-end, diligently designing the database and giving highly remarkable insights on front-end development.',
        email: 'pratik.chavhan.77@gmail.com',
        // image: 'Pratik.jpg'
    },
    {
        name: 'Atharva Chothave',
        description: 'Handled challenges and complexities of the UI with a clear understanding of the expected results while making the whole working process efficient with hands-on technological knowledge.',
        email: 'atharvachothave3@gmail.com',
        //  image: '/assets/Atharva.jpg',
    },
    {
        name: 'Aniket Gaikwad',
        description: 'Bringing the pieces together of the frontend and backend by excellent routing, mapping, and providing resourceful solutions at every step of the agile working methodology.',
        email: 'aniketgaikwad0195@gmail.com',
        // image: '/assets/Aniket.jpg',
    },
    {
        name: 'Kranti Ranpise',
        description: 'Creativity infused code to meet the user-friendly frontend while making a valuable contribution at the backend and database with attention to details and rigorous testing.',
        email: 'krantiranpise11@gmail.com',
        //  image: '/assets/Kranti.jpg',
    },
    {
        name: 'Harshvardhan Patil',
        description: 'Converting innovative ideas into code at the backend while ensuring productive assistance at the frontend and leading the team to a successful deployment of the project.',
        email: 'harshvardhanpatil070@gmail.com',
        //  image: '/assets/Harsh.jpg',
    }
    // Add more contributors as needed
];

const AboutPage = () => {
    return (
        <Row className="justify-content-center">
            {contributors.map((contributor, index) => (
                <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-4">
                    <Card className="h-100">
                        {/* <Card.Img variant="top" src={`/assets/${contributor.image}`} alt={contributor.name} /> */}
                        <Card.Body>
                            <Card.Title>{contributor.name}</Card.Title>
                            <Card.Text>{contributor.description}</Card.Text>
                            <Card.Text>{contributor.email}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    );
};

export default AboutPage;
