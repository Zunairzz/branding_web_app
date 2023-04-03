import {Base} from "../component/Base";
import {ProfilePage} from "../abouts/profile";
import {Col, Container, Row} from "reactstrap";
import "../styles/about.css";

export const AboutPage = ()  => {
    return (
       <Base>
           <Container>
               <Row className="d-flex justify-content-center">
                   <Col lg={12}>
                       <div className="about-container">
                           <h2>About Page</h2>
                           <p>We are a company that specializes in creating amazing web applications using React.</p>
                           <p>A brief history of the company, including when it was founded and by whom.
                               A mission statement or statement of purpose that explains what your company hopes to achieve and what values it holds.
                               An overview of the services your company provides for brand promotion, such as social media marketing, influencer marketing, or content creation.
                           </p>
                       </div>
                       <div>
                           <h2>Team Information</h2>
                           <ProfilePage/>
                       </div>
                   </Col>
               </Row>
           </Container>

          {/*<div>*/}
          {/*    <ProfilePage/>*/}
          {/*</div>*/}
       </Base>
    );
}