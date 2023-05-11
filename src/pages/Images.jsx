import {Base} from "../component/Base";
import {Card, Col, Container, Row} from "reactstrap";

export function Images() {
    function copyToClipboard(element) {
        var $temp = $("<input>");
        $("body").append($temp);
        $temp.val($(element).text()).select();
        document.execCommand("copy");
        $temp.remove();
    }

    return (
        <div>
            <Base>
                <h1>All Images</h1>
                <Container>
                    <Card>
                        <Row>
                            <Col>
                                <img style={{boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}
                                     src="https://res.cloudinary.com/dyo1h8cbk/image/upload/v1683800293/sdcxrkoyhaarvdtzclf0.jpg"
                                     alt="image here" width="200px"/>
                            </Col>
                            <Col>
                                <div style={{
                                    background: '#494949',
                                    border: '2px solid #3C486B',
                                    borderRadius: '5px',
                                    padding: '10px',
                                    color: 'black',
                                    display: 'flex',
                                    justifyContent: 'space-around'
                                }}>
                                    <p>https://res.cloudinary.com/dyo1h8cbk/image/upload/v1683800293/sdcxrkoyhaarvdtzclf0.jpg</p>
                                    <span></span>
                                    <i onClick={copyToClipboard} className="bi bi-clipboard"></i>
                                </div>
                            </Col>
                        </Row>
                    </Card>
                </Container>
            </Base>
        </div>
    )
}