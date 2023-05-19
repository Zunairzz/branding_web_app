import {Base} from "../component/Base";
import {Col, Container, Form, FormGroup, Input, Label, Row} from "reactstrap";
import "../styles/Style.css";
// import "../scripts/File";
import "../styles/FileButton.css";
import React, {useEffect, useState} from "react";
import {addPost} from "../service/PostService";
import {isLoggedIn} from "../service/UserService";

export const PostPage = () => {
    const [login, setLogin] = useState(false);

    const [postData, setPostData] = useState({
        post_title: "",
        company_name: "",
        email: "",
        image: "",
        post_description: ""
    });
    const [imageFile, setImageFile] = useState(undefined);

    useEffect(() => {
        setLogin(isLoggedIn());
    })
    const handleChange = (event, field) => {
        let actualValue = event.target.value;
        setPostData({...postData, [field]: actualValue});
    };

    // validate image file
    const handleFileInput = (event) => {
        const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg'];
        const file = event.target.files[0];
        if (!allowedTypes.includes(file.type)) {
            // show an error message or throw an exception
            // toast.error("Only chose jpeg, jpg and png images.")
            alert('Only chose jpeg, jpg and png images.');
            return;
        }

        // continue with file processing
        if (event.target && event.target.files[0]) {
            setImageFile(event.target.files[0]);
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        addPost(postData)
            .then((response) => {
                console.log(response);
            }).catch((error) => {
            console.log(error);
        })
    }
    return (
        <Base>
            {login && (
                <Container>
                    <Row className="d-flex justify-content-center">
                        <Col lg={8}>
                            {JSON.stringify(postData)}
                            <Form onSubmit={handleSubmit} className="mt-5 mb-5 form">
                                <h2>Add Post</h2>
                                <FormGroup className="col1">
                                    <Label>Post Title</Label>
                                    <Input type="text" id="input" placeholder=""
                                           onChange={(e) => handleChange(e, "post_title")}></Input>
                                    <span className="focus-border"></span>
                                </FormGroup>
                                <FormGroup className="col1">
                                    <Label>Company Name</Label>
                                    <Input type="text" id="input1" placeholder=""
                                           onChange={(e) => handleChange(e, "company_name")}></Input>
                                    <span className="focus-border"></span>
                                </FormGroup>
                                <FormGroup className="col1">
                                    <Label>Email</Label>
                                    <Input type="email" id="input2" placeholder=""
                                           onChange={(e) => handleChange(e, "email")}></Input>
                                    <span className="focus-border"></span>
                                </FormGroup>
                                <FormGroup className="col1">
                                    <Label>Post Image</Label>
                                    <Input type="file" id="input3" placeholder="" onChange={handleFileInput}></Input>
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
                                    <Input type="textarea" id="input4" placeholder=""
                                           onChange={(e) => handleChange(e, "post_description")}></Input>
                                    <span className="focus-border"></span>
                                </FormGroup>
                                <button type="submit" className="submit">Submit</button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            )}
            {!login &&
                (
                    <Container>
                        <p>No record</p>
                    </Container>
                )
            }
        </Base>
    )
}
