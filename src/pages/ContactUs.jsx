import React, {useState} from 'react';
import '../styles/ContactUs.css';
import {Base} from "../component/Base";
import {Col, Form, FormGroup, Input, Label, Row} from "reactstrap";

export const ContactUs = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // handle form submission
    };

    return (
        <Base>
            <section className="ftco-section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-12">
                            <div className="wrapper">
                                <div className="row no-gutters">
                                    <div className="col-lg-8 col-md-7 order-md-last d-flex align-items-stretch">
                                        <div className="contact-wrap w-100 p-md-5 p-4"
                                             style={{borderTopRightRadius: "8px", borderBottomRightRadius: "8px"}}>
                                            <h3 className="mb-4" style={{color: "white"}}>Get in touch</h3>
                                            <div id="form-message-warning" className="mb-4"></div>
                                            <div id="form-message-success" className="mb-4">
                                                Your message was sent, thank you!
                                            </div>
                                            <Form className="mt-5 mb-5">
                                                <Row>
                                                    <Col>
                                                        <FormGroup className="col1">
                                                            <Label>Name</Label>
                                                            <Input type="text" id="input" placeholder=""></Input>
                                                            <span className="focus-border"></span>
                                                        </FormGroup>
                                                    </Col>
                                                    <Col>
                                                        <FormGroup className="col1">
                                                            <Label>Email</Label>
                                                            <Input type="text" id="input1" placeholder=""></Input>
                                                            <span className="focus-border"></span>
                                                        </FormGroup>
                                                    </Col>
                                                </Row>
                                                <FormGroup className="col1">
                                                    <Label>Subject</Label>
                                                    <Input type="email" id="input2" placeholder=""></Input>
                                                    <span className="focus-border"></span>
                                                </FormGroup>
                                                <FormGroup className="col1">
                                                    <Label>Message</Label>
                                                    <Input type="textarea" id="input4" placeholder=""></Input>
                                                    <span className="focus-border"></span>
                                                </FormGroup>
                                                <button type="submit" className="submit">Submit</button>
                                            </Form>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-5 d-flex align-items-stretch">
                                        <div className="info-wrap w-100 p-md-5 p-4" style={{borderTopLeftRadius: "8px", borderBottomLeftRadius: "8px"}}>
                                            <h3>Let's get in touch</h3>
                                            <p className="mb-4">We're open for any suggestion or just to have a chat</p>
                                            <div className="dbox w-100 d-flex align-items-start">
                                                <div className="icon d-flex align-items-center justify-content-center">
                                                    <i className="bi bi-geo-alt-fill"></i><i className="bi loca"></i>
                                                </div>
                                                <div className="text pl-3">
                                                    <p><span>Address:</span> 198 West 21th Street, Suite 721 New York NY
                                                        10016</p>
                                                </div>
                                            </div>
                                            <div className="dbox w-100 d-flex align-items-center">
                                                <div className="icon d-flex align-items-center justify-content-center">
                                                    <i className="bi bi-telephone-fill"></i>
                                                </div>
                                                <div className="text pl-3">
                                                    <p><span>Phone:</span> <a href="tel://1234567920">+ 1235 2355 98</a>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="dbox w-100 d-flex align-items-center">
                                                <div className="icon d-flex align-items-center justify-content-center">
                                                    <i className="bi bi-send-fill"></i>
                                                </div>
                                                <div className="text pl-3">
                                                    <p><span>Email:</span> <a
                                                        href="mailto:info@yoursite.com">info@yoursite.com</a></p>
                                                </div>
                                            </div>
                                            <div className="dbox w-100 d-flex align-items-center">
                                                <div className="icon d-flex align-items-center justify-content-center">
                                                    <i className="bi bi-globe-americas"></i>
                                                </div>
                                                <div className="text pl-3">
                                                    <p><span>Website</span> <a href="#">yoursite.com</a></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Base>
    );
};