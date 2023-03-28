import {Card, Col, Container, Row} from "reactstrap";
import "../styles/MainBody.css";
import image3 from "../images/main_body.jpg";
import image4 from "../images/cathy-pham-3jAN9InapQI-unsplash.jpg";
import "../scripts/ImageSlide";
import {useEffect, useState} from "react";


export const MainBody = () => {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleScroll = () => {
        const scrollTop = window.pageYOffset;
        console.log(scrollTop);
        if (scrollTop > 0) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    return (
        <Container>

            {/* 1st Row */}
            <Row className="d-flex justify-content-center">
                <Col lg={6}>
                    <Card className="card">
                        <div className="card-img text-center" id="slide1">
                            <img className="image1"
                                 src="https://images.unsplash.com/photo-1661956600684-97d3a4320e45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                                 alt="" width="100%"/>
                        </div>
                        <ul className="list">
                            <li className="list-name"> sjaacjcjj ca</li>
                        </ul>
                        <p className="text-muted">Contemporary Art Museum, Sweden</p>
                    </Card>
                </Col>
                <Col lg={6}>
                    <Card className="card">
                        <div className="card-img text-center">
                            <img className="image2"
                                 src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80"
                                 alt="" width="100%"/>
                        </div>
                        <ul className="list">
                            <li className="list-name">Zaman ki jaan</li>
                        </ul>
                        <p className="text-muted">Zaman ki hone wali wife jo Sweden me rehti h</p>
                    </Card>
                </Col>
            </Row>
            {/* 1st Row end */}
            {/* 2nd Row */}
            <Row className="d-flex justify-content-center">
                <Col lg={12}>
                    <Card className="card">
                        <div className="card-img text-center">
                            <img style={{opacity: 0.8}}
                                 src={image3}
                                 alt="" width="100%"/>
                        </div>
                        <ul className="list">
                            <li className="list-name"> sjaacjcjj ca</li>
                        </ul>
                        <p className="text-muted">Contemporary Art Museum, Sweden</p>
                    </Card>
                </Col>
            </Row>
            {/* 2nd Row end */}
            {/* 3rd Row */}
            <Row className="d-flex justify-content-center">
                <Col lg={6}>
                    <Card className="card">
                        <div className="card-img text-center">
                            <img className="image3"
                                 src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                                 alt="" width="100%"/>
                        </div>
                        <ul className="list">
                            <li className="list-name"> sjaacjcjj ca</li>
                        </ul>
                        <p className="text-muted">Contemporary Art Museum, Sweden</p>
                    </Card>
                </Col>
                <Col lg={6}>
                    <Card className="card">
                        <div className="card-img text-center">
                            <img
                                src="https://images.unsplash.com/photo-1591035903277-22dbaf845677?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
                                alt="" width="100%"/>
                        </div>
                        <ul className="list">
                            <li className="list-name"> sjaacjcjj ca</li>
                        </ul>
                        <p className="text-muted">Contemporary Art Museum, Sweden</p>
                    </Card>
                </Col>
            </Row>
            {/* 3rd Row end */}
            {/* 4th Row */}
            <Row className="d-flex justify-content-center">
                <Col lg={12}>
                    <Card className="card">
                        <div className="card-img text-center">
                            <img style={{opacity: 0.8}}
                                 src={image4}
                                 alt="" width="100%"/>
                        </div>
                        <ul className="list">
                            <li className="list-name"> sjaacjcjj ca</li>
                        </ul>
                        <p className="text-muted">Contemporary Art Museum, Sweden</p>
                    </Card>
                </Col>
            </Row>
            {/* 4th Row end */}
        </Container>
    )
}