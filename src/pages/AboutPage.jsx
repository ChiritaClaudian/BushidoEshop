import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
function AboutPage()
{
    return(
        <React.Fragment>
            <div style={{padding:"10%", margin:"5%"}}>
                <Container fluid="md" className=" align-self-center justify-content-md-center ">
                    <Row className="justify-content-md-center " style={{alignItems:"center"}}>
                        <Col>
                        <p style={{textAlign:"justify"}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet nisl sit amet mi sagittis ultricies sed vel nisi. Cras semper neque id ullamcorper consequat. Aliquam at mollis lorem. Vestibulum ornare, dolor eu egestas fringilla, nibh ipsum feugiat tellus, vel vulputate eros augue a urna. Aenean et congue quam. Duis pharetra neque ac risus posuere feugiat. Phasellus eleifend risus massa, vel malesuada velit vestibulum id. Vivamus maximus libero sit amet eros dapibus, at congue ex dignissim. Donec dui dolor, aliquet ac commodo non, semper vel odio. Phasellus aliquam faucibus nibh, vel vehicula nunc scelerisque vel. Quisque tempor metus consequat porttitor gravida. Phasellus maximus tristique metus eget malesuada. Nunc ornare ante a ex ullamcorper hendrerit.
                            Aenean erat lectus, maximus eu dolor a, rutrum porta tellus. Nulla eu est et tortor facilisis tincidunt. Nullam quis tristique erat. Nunc efficitur at augue quis placerat. Duis consequat convallis orci eu tristique. Nunc malesuada turpis sed ligula blandit facilisis. Pellentesque et malesuada arcu.
                        </p>
                        </Col>
                        <Col className="d-flex justify-content-center ">
                            <img src="" alt="aici ar trb sa fie log ul"/>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
}

export default AboutPage;