import {Base} from "../component/Base";
import {Col, Container, Row} from "reactstrap";
import React, {useEffect, useState} from "react";
import "../styles/SettingPage.css";
import {useNavigate} from "react-router-dom";
import {isLoggedIn} from "../service/UserService";

export function Settings() {

    const navigate = useNavigate();
    const [login, setLogin] = useState(false);

    useEffect(() => {
        setLogin(isLoggedIn());
    });

    return (
        <Base>
            {login &&
                <Container>
                    <h3><i className="bi bi-gear"></i> Settings</h3>
                    <div style={{borderBottom: '1.5px solid #2d2d2d'}}></div>
                    <Row style={{marginTop: '5rem', marginBottom: "5rem", display: 'flex', justifyContent: 'center'}}>
                        <Col lg={3} md={4} sm={6}>
                            <div
                                style={{
                                    border: "2px solid #2d2d2d",
                                    borderRadius: '8px',
                                    padding: '10px',
                                }}
                                className="cards"
                                onClick={() => navigate("/images")}
                            >
                                <i className="bi bi-image"></i> Image Setting
                            </div>
                        </Col>
                        <Col lg={3} md={4} sm={6}>
                            <div
                                style={{
                                    border: "2px solid #2d2d2d",
                                    borderRadius: '8px',
                                    padding: '10px',
                                }}
                                className="cards"
                                onClick={() => navigate("/add/post")}
                            >
                                <span><i className="bi bi-file-earmark-post"></i> Post Page</span>
                            </div>
                        </Col>
                    </Row>
                </Container>
            }
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