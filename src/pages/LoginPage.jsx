import {Button, Card, Col, Container, Form, FormGroup, Input, Label, Row} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.css';
import {useState} from "react";
import {Login} from "../service/UserService";
import "../styles/Style.css";

export const LoginPage = () => {
    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    const handleChange = (event, field) => {
        let actualValue = event.target.value;
        setUser({...user, [field]: actualValue});
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(user);
        Login(user)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <div>
            <Container>
                {/*{JSON.stringify(user)}*/}
                <Row className="d-flex justify-content-center">
                    <Col lg={6} md={9} sm={9} xs={11}>
                        <Card className="p-4 border-0">
                            <Form onSubmit={handleSubmit} className="form">
                                <h2>Login</h2>
                                <FormGroup className="col1">
                                    <Label className="label1">Username</Label>
                                    <Input type="text" id="input" placeholder=""
                                           onChange={(e) => handleChange(e, "email")}></Input>
                                    <span className="focus-border"></span>
                                </FormGroup>
                                <FormGroup className="col2">
                                    <Label className="label2">Password</Label>
                                    <Input type="password" id="input1" placeholder=""
                                           onChange={(e) => handleChange(e, "password")}></Input>
                                    <span className="focus-border"></span>
                                </FormGroup>
                                <button type="submit" className="submit">Login</button>
                            </Form>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}