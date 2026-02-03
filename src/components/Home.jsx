import { Container, Row, Col, Carousel } from 'react-bootstrap'

const Home = function () {
  return (
    <Container>
      <Row className="justify-content-center mt-3">
        <Col className="text-center" xs={12} md={8}>
          <h1>Benvenuto su EpiRestaurant</h1>
          <h3>Il ristorante più famoso del web</h3>
          {/* inizio carosello */}
          <Carousel>
            <Carousel.Item>
              <img src="https://placebear.com/500/500" />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src="https://placebear.com/500/500" />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src="https://placebear.com/500/500" />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          {/* fine carosello */}
        </Col>
      </Row>
    </Container>
  )
}

export default Home
