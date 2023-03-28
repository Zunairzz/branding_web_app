import {Base} from "../component/Base";
import {ImageSlider} from "../component/ImageSlider";
import {Container} from "reactstrap";
import {MainBody} from "../component/MainBody";

export const HomePage = () => {
    return (
        <Base>
            {/*<h1>This home page</h1>*/}
            <ImageSlider/>
            <Container>
                <div className="line"></div>
            </Container>
            <MainBody/>
        </Base>
    )
}