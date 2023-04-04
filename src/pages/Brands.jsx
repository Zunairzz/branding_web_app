import {Base} from "../component/Base";
import {Card, Col, Container, Row} from "reactstrap";
import "../styles/Brands.css";
import {Link, useNavigate} from "react-router-dom";
import {ImagesList} from "../images/ImagesList";

export const Brands = () => {

    const navigate = useNavigate();
    const navigateToDetail = () => {
        navigate('/brand/details')
    }
    return (
        <Base>
            <div className="brands">
                <Container>
                    {/* Row 1 */}
                    <Row className="d-flex justify-content-center">
                        <Col lg={5} md={4}>
                            <Card className="card">
                                <div className="card-img text-center">
                                    <img onClick={navigateToDetail} className="image2"
                                         src={ImagesList[0].src}
                                         alt="" width="100%"/>
                                </div>
                                <div className="list">
                                    <div className="list-name mb-2">{ImagesList[0].name}</div>
                                </div>
                                <p className="text-muted">Zaman ki hone wali wife jo Sweden me rehti h</p>
                            </Card>
                        </Col>
                        <Col lg={5} md={4}>
                            <Card className="card">
                                <div className="card-img text-center">
                                    <img className="image2"
                                         src={ImagesList[1].src}
                                         alt="" width="100%"/>
                                </div>
                                <div className="list">
                                    <div className="list-name mb-2">{ImagesList[1].name}</div>
                                </div>
                                <p className="text-muted">Zaman ki hone wali wife jo Sweden me rehti h</p>
                            </Card>
                        </Col>
                    </Row>
                    {/* Row 1 end */}
                    {/* Row 2 */}
                    <Row className="d-flex justify-content-center">
                        <Col lg={5} md={4}>
                            <Card className="card">
                                <div className="card-img text-center">
                                    <img className="image2"
                                         src={ImagesList[2].src}
                                         alt="" width="100%"/>
                                </div>
                                <div className="list">
                                    <div className="list-name mb-2">Zaman ki jaan</div>
                                </div>
                                <p className="text-muted">Zaman ki hone wali wife jo Sweden me rehti h</p>
                            </Card>
                        </Col>
                        <Col lg={5} md={4}>
                            <Card className="card">
                                <div className="card-img text-center">
                                    <img className="image2"
                                         src={ImagesList[3].src}
                                         alt="" width="100%"/>
                                </div>
                                <div className="list">
                                    <div className="list-name mb-2">Zaman ki jaan</div>
                                </div>
                                <p className="text-muted">Zaman ki hone wali wife jo Sweden me rehti h</p>
                            </Card>
                        </Col>
                    </Row>
                    {/* Row 2 end */}
                    {/* Row 3 */}
                    <Row className="d-flex justify-content-center">
                        <Col lg={5} md={4}>
                            <Card className="card">
                                <div className="card-img text-center">
                                    <img className="image2"
                                         src={ImagesList[4].src}
                                         alt="" width="100%"/>
                                </div>
                                <div className="list">
                                    <div className="list-name mb-2">Zaman ki jaan</div>
                                </div>
                                <p className="text-muted">Zaman ki hone wali wife jo Sweden me rehti h</p>
                            </Card>
                        </Col>
                        <Col lg={5} md={4}>
                            <Card className="card">
                                <div className="card-img text-center">
                                    <img className="image2"
                                         src={ImagesList[5].src}
                                         alt="" width="100%"/>
                                </div>
                                <div className="list">
                                    <div className="list-name mb-2">Zaman ki jaan</div>
                                </div>
                                <p className="text-muted">Zaman ki hone wali wife jo Sweden me rehti h</p>
                            </Card>
                        </Col>
                    </Row>
                    {/* Row 3 end */}
                    {/* Row 4 */}
                    <Row className="d-flex justify-content-center">
                        <Col lg={5} md={4}>
                            <Card className="card">
                                <div className="card-img text-center">
                                    <img className="image2"
                                         src={ImagesList[6].src}
                                         alt="" width="100%"/>
                                </div>
                                <div className="list">
                                    <div className="list-name mb-2">Zaman ki jaan</div>
                                </div>
                                <p className="text-muted">Zaman ki hone wali wife jo Sweden me rehti h</p>
                            </Card>
                        </Col>
                        <Col lg={5} md={4}>
                            <Card className="card">
                                <div className="card-img text-center">
                                    <img className="image2"
                                         src={ImagesList[7].src}
                                         alt="" width="100%"/>
                                </div>
                                <div className="list">
                                    <div className="list-name mb-2">Zaman ki jaan</div>
                                </div>
                                <p className="text-muted">Zaman ki hone wali wife jo Sweden me rehti h</p>
                            </Card>
                        </Col>
                    </Row>
                    {/* Row 4 end */}
                </Container>
            </div>
        </Base>
    )
}