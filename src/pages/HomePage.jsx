import {Base} from "../component/Base";
import {ImageSlider} from "../component/ImageSlider";
import {Container} from "reactstrap";
import {MainBody} from "../component/MainBody";

export const HomePage = () => {
    return (
        <Base>
            <ImageSlider/>
            <Container>
                <div className="line"></div>
            </Container>
            <MainBody/>
        </Base>
    )
}