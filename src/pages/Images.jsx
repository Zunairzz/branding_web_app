import {Base} from "../component/Base";
import {Button, Card, Col, Container, Row, Table} from "reactstrap";
import {imageData} from '../component/imagesData';
import {useState} from "react";
import {Image} from "react-bootstrap";

export function Images() {

    const [copySuccess, setCopySuccess] = useState('');

    const handleCopyClick = (imageUrl) => {
        // const textToCopy = "This is the text to copy.";
        const text = imageUrl;
        console.log(imageUrl)
        navigator.clipboard.writeText(imageUrl);
        setCopySuccess('Copied to clipboard!');
    };

    return (
        <div>
            <Base>
                <h1>All Images</h1>
                <Container>
                    <table className="text-center"
                           style={{background: 'none', backgroundColor: '#2d2d2d', border: 'none'}}>
                        <thead style={{color: "white", backgroundColor: '#151515'}}>
                        <tr>
                            <th>Id</th>
                            <th>Image</th>
                            <th>Url</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody style={{color: "white"}}>
                        {imageData &&
                            imageData.map((img) => (

                                <tr key={img.id}>
                                    <td>{img.id}</td>
                                    <td>
                                        <img style={{boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}
                                             src={img.imageUrl}
                                             alt="image here" width="100px"/>
                                    </td>
                                    <td><p onClick={() => navigator.clipboard.writeText(im)}>{img.imageUrl}</p></td>
                                    <td>
                                        <Button type={"button"}></Button>
                                    </td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </table>
                </Container>
                <Container>
                    <Card>
                        <Row>
                            <Col>
                                <Image style={{boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}
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
                                    <Button onClick={() => navigator.clipboard.writeText()}></Button>
                                    <p>https://res.cloudinary.com/dyo1h8cbk/image/upload/v1683800293/sdcxrkoyhaarvdtzclf0.jpg</p>
                                    <span></span>
                                    <i className="bi bi-clipboard"></i>
                                </div>
                            </Col>
                        </Row>
                    </Card>
                </Container>
            </Base>
        </div>
    )
}