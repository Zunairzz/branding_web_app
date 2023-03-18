import {Button, Card, Col, Container, Form, FormGroup, Input, Label, Row} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.css';

export const LoginPage = () => {
    return (
        <div>
            <Container>
                <Row className="d-flex justify-content-center">
                    <Col lg={5}>
                        <Card className="p-4">
                            <Form>
                                <h2>Login</h2>
                                <hr/>
                                <FormGroup>
                                    <Label>Username</Label>
                                    <Input type="text"></Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label>Password</Label>
                                    <Input type="password"></Input>
                                </FormGroup>
                                <Button type="button" color="primary"
                                        className="btn btn-primary btn-block">Login</Button>
                            </Form>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}