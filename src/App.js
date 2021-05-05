import './App.css';
import Navbar from 'react-bootstrap/Navbar'
import { Media, Row, Col, Container, Card, Button } from 'react-bootstrap';

function App() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img
            src="/tracex_logo.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="TraceX App Logo"
          />{' '}
          TraceX
        </Navbar.Brand>
      </Navbar>
      <Container>
        <Row>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Media>
        <img
          width={64}
          height={64}
          className="mr-3"
          src="/tracex_logo.png"
          alt="Generic placeholder"
        />
        <Media.Body>
          <h5>Media Heading</h5>
          <p>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
            ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
            tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
            Donec lacinia congue felis in faucibus.
    </p>
        </Media.Body>
      </Media>
    </div>
  );
}

export default App;
