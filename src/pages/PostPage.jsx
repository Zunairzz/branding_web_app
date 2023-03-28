import {Base} from "../component/Base";
import {Button, Col, Container, Form, FormGroup, Input, Label, Row} from "reactstrap";
import "../styles/Style.css";
// import "../scripts/File";
import "../styles/FileButton.css";

export const PostPage = () => {
    return (
        <Base>
            <Container>
                <Row className="d-flex justify-content-center">
                    <Col lg={8}>
                        <Form className="mt-5 mb-5 form">
                            <h2>Add Post</h2>
                            <FormGroup className="col1">
                                <Label>Post Title</Label>
                                <Input type="text" id="input" placeholder=""></Input>
                                <span className="focus-border"></span>
                            </FormGroup>
                            <FormGroup className="col1">
                                <Label>Company Name</Label>
                                <Input type="text" id="input1" placeholder=""></Input>
                                <span className="focus-border"></span>
                            </FormGroup>
                            <FormGroup className="col1">
                                <Label>Email</Label>
                                <Input type="email" id="input2" placeholder=""></Input>
                                <span className="focus-border"></span>
                            </FormGroup>
                            <FormGroup className="col1">
                                <Label>Post Image</Label>
                                <Input type="file" id="input3" placeholder=""></Input>
                                <span className="focus-border"></span>
                            </FormGroup>
                            {/*<div className="file">*/}
                            {/*    <label htmlFor="inputTag">*/}
                            {/*        Select Image <br/>*/}
                            {/*        <i className="bi bi-camera-fill"></i>*/}
                            {/*        <input id="inputTag" type="file"/>*/}
                            {/*        <br/>*/}
                            {/*        <span id="imageName"></span>*/}
                            {/*    </label>*/}
                            {/*</div>*/}
                            <FormGroup className="col1">
                                <Label>Post Description</Label>
                                <Input type="textarea" id="input4" placeholder=""></Input>
                                <span className="focus-border"></span>
                            </FormGroup>
                            <button type="submit" className="submit">Submit</button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </Base>
    )
}
