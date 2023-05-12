import {Base} from "../component/Base";
import {Card, CardBody, CardHeader, CardText, Col, Container, Input, Row} from "reactstrap";
import {useEffect, useState} from "react";
import {Image} from "react-bootstrap";
import {deleteImageFromCloud, getAllImages, uploadImage} from "../service/ImagesService";
import '../styles/ImagePage.css';

export function ImagePage() {

    const [loading, setLoading] = useState(false);

    const [images, setImages] = useState([]);
    const [id, setId] = useState({
        id: ''
    })

    useEffect(() => {
        getAllImages()
            .then((response) => {
                console.log(response);
                setImages(response);
            }).catch((error) => {
            console.log(error);
        })
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

    const [copySuccess, setCopySuccess] = useState('');

    const handleCopyClick = (imageUrl) => {
        // const textToCopy = "This is the text to copy.";
        const text = imageUrl;
        console.log(imageUrl)
        navigator.clipboard.writeText(imageUrl);
        setCopySuccess('Copied to clipboard!');
    };

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
                                            style={{boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', borderRadius: '8px'}}
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
                                            <div className="mx-5 d-flex align-items-center justify-content-center">
                                                <CardText>{img.imageUrl}</CardText>
                                            </div>
                                            <div>
                                                <i className="bi bi-clipboard copy"></i>
                                                <i onClick={() => deleteImage("img.publicId")}
                                                   className="bi bi-trash3 delete mx-3"/>
                                            </div>
                                        </CardBody>
                                    </div>
                                </div>
                            </div>
                        </Card>


                        // <Card style={{
                        //     border: "2px solid #2d2d2d",
                        //     borderRadius: '8px',
                        //     padding: '10px',
                        //     marginLeft: '50px',
                        //     marginRight: '50px'
                        // }}>
                        //     <Row>
                        //         <Col lg={1}>
                        //             <h5 className="text-muted" style={{margin: "auto 0"}}>{i++}</h5>
                        //         </Col>
                        //         <Col lg={2}>
                        //             <a href={img.imageUrl} target="_blank" style={{cursor: 'pointer'}}>
                        //                 <Image
                        //                     style={{boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', borderRadius: '8px'}}
                        //                     src={img.imageUrl}
                        //                     alt="image here" width="100px"/>
                        //             </a>
                        //         </Col>
                        //         <Col>
                        //             <CardBody style={{
                        //                 background: '#494949',
                        //                 // border: '2px solid #3C486B',
                        //                 boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                        //                 borderRadius: '5px',
                        //                 padding: '10px',
                        //                 color: 'black',
                        //                 display: 'flex',
                        //                 justifyContent: 'space-between',
                        //             }}>
                        //                 <div className="mx-5 d-flex align-items-center justify-content-center">
                        //                     <CardText>{img.imageUrl}</CardText>
                        //                 </div>
                        //                 <div>
                        //                     <i className="bi bi-clipboard copy"></i>
                        //                     <i onClick={() => deleteImage(img.publicId)}
                        //                        className="bi bi-trash3 delete mx-3"/>
                        //                 </div>
                        //             </CardBody>
                        //         </Col>
                        //     </Row>
                        // </Card>
                    ))
                }
            </Base>
        </div>
    )
}