import {Base} from "../component/Base";
import {Card, CardBody, CardHeader, CardText, Col, Container, Input, Row} from "reactstrap";
import React, {useEffect, useState} from "react";
import {Image} from "react-bootstrap";
import {deleteImageFromCloud, getAllImages, getAllImagesFromStorage, uploadImage} from "../service/ImagesService";
import '../styles/ImagePage.css';
import {isLoggedIn} from "../service/UserService";
import {useNavigate} from "react-router-dom";

export function ImagePage() {

    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);

    const [login, setLogin] = useState(false);

    const [images, setImages] = useState([]);

    useEffect(() => {
        setLogin(isLoggedIn());
        console.log(getAllImagesFromStorage());
        setImages(JSON.parse(getAllImagesFromStorage()));
    }, []);

    function deleteImage(publicId) {
        console.log(publicId)
        deleteImageFromCloud(publicId)
            .then((response) => {
                console.log(response);
                window.location.reload();
            }).catch((error) => {
            console.log(error);
        })
    }

    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        setLoading(true);
        e.preventDefault();

        const formData = new FormData();
        formData.append('file', file);
        try {
            uploadImage(formData)
                .then((response) => {
                    console.log(response);
                    window.location.reload();
                }).catch((error) => {
                console.log(error);
            })
            // console.log(res.data);
        } catch (err) {
            console.error(err);
        }
    };
    let i = 1;

    return (

        <div>
            <Base>
                {/*{JSON.stringify(loggedIn)}*/}
                {login &&
                    <Container>
                        {/*upload image section*/}
                        <form onSubmit={handleSubmit} style={{
                            border: "2px solid #2d2d2d",
                            borderRadius: '8px',
                            padding: '10px',
                            marginLeft: '50px',
                            marginRight: '50px'
                        }}>
                            <Card>
                                <CardHeader className="text-muted d-flex justify-content-start">
                                    Upload Image
                                </CardHeader>
                                <CardBody>
                                    <Input type="file" onChange={handleFileChange}/>
                                    <button className="btn btn-secondary p-2 d-flex justify-content-end mt-3"
                                            type="submit">Upload
                                    </button>
                                </CardBody>
                            </Card>
                        </form>
                        {/*upload image section end*/}


                        {/*<h3 className="text-center">List of images</h3>*/}
                        {loading &&
                            <div className="d-flex justify-content-center">
                                <div className="spinner-border" role="status">
                                    {/*<p style={{color: 'white'}}>Loading.....</p>*/}
                                    <span className="sr-only"></span>
                                </div>
                            </div>
                        }
                        {/*images list*/}
                        {!loading &&
                            images.map((img) => (

                                <Card className="mb-3"
                                      style={{
                                          border: "2px solid #2d2d2d",
                                          borderRadius: '8px',
                                          padding: '10px',
                                          marginLeft: '50px',
                                          marginRight: '50px'
                                      }}>
                                    <div className="row no-gutters">
                                        <div className="col-md-1">
                                            {i++}
                                        </div>
                                        <div className="col-md-1">
                                            <a href="" target="_blank" style={{cursor: 'pointer'}}>
                                                <Image
                                                    style={{
                                                        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                                                        borderRadius: '8px'
                                                    }}
                                                    src={img.imageUrl}
                                                    alt="image here" width="100px"/>
                                            </a>
                                        </div>
                                        <div className="col-md-10">
                                            <div className="card-body">
                                                <CardBody style={{
                                                    background: '#494949',
                                                    // border: '2px solid #3C486B',
                                                    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                                                    borderRadius: '5px',
                                                    padding: '10px',
                                                    color: 'black',
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                }}>
                                                    <div
                                                        className="mx-5 d-flex align-items-center justify-content-center">
                                                        <CardText>{img.imageUrl}</CardText>
                                                    </div>
                                                    <div>
                                                        <i title="Copy URL"
                                                           onClick={() => navigator.clipboard.writeText(img.imageUrl)}
                                                           className="bi bi-clipboard copy"></i>
                                                        <span style={{
                                                            borderLeft: '1px solid lightgrey',
                                                            height: '10px',
                                                            marginLeft: '15px'
                                                        }}></span>
                                                        <i onClick={() => deleteImage("img.publicId")}
                                                           className="bi bi-trash3 delete mx-3"/>
                                                    </div>
                                                </CardBody>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            ))
                        }
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
        </div>
    )
}