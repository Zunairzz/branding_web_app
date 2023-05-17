import {Card, Col, Container, Form, FormGroup, Input, Label, Row} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.css';
import {useState} from "react";
import {Login} from "../service/UserService";
import "../styles/Style.css";
import {useNavigate} from "react-router-dom";
import {getAllImages} from "../service/ImagesService";

export const LoginPage = () => {

    const navigate = useNavigate();

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
        Login(user)
            .then((response) => {
                console.log(response);
                if (response === 'User found') {
                    navigate("/add/post");
                } else {
                    alert('User not found!')
                }
            })
            .catch((error) => {
                console.log(error);
            });


        // get all images
        getAllImages()
            .then((response) => {
                console.log(response);
                localStorage.setItem("images", JSON.stringify(response));
            }).catch((error) => {
            console.log(error);
        })
    }

    return (
        <div>
            <Container>
                <Row className="d-flex justify-content-center">
                    <Col lg={6} md={9} sm={9} xs={11}>
                        <Card className="p-4 border-0">
                            <Form onSubmit={handleSubmit} className="form">
                                {/*{JSON.stringify(user)}*/}
                                <h2 className="text-left">Login</h2>
                                <FormGroup className="col1 text-left">
                                    <Label className="label1">Username</Label>
                                    <Input type="text" id="input" placeholder=""
                                           onChange={(e) => handleChange(e, "email")}></Input>
                                    <span className="focus-border"></span>
                                </FormGroup>
                                <FormGroup className="col2 text-left">
                                    <Label className="label2 ">Password</Label>
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