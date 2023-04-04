import {Base} from "./Base";
import {Card, Container} from "reactstrap";

export const BrandDetails = () => {
    return (
        <Base>
            <Container className="mt-5">
                <h2 style={{color: "lightgrey"}}>
                    How We Made a Bus Ride Feel Like a First Class Flight? The Launch of Cyan Airlines
                </h2>

                <p style={{color: "lightcyan", marginTop: "2rem"}}>
                    Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices
                    your audience to continue reading.
                </p>
                <Card className="card">
                    <div className="card-img text-center" id="slide1">
                        <img className="image1"
                             src="https://images.unsplash.com/photo-1661956600684-97d3a4320e45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                             alt="" width="100%"/>
                    </div>
                    <div className="list">
                        <div className="list-name"> sjaacjcjj ca</div>
                    </div>
                    <p className="text-muted">Contemporary Art Museum, Sweden</p>
                </Card>
                <p>
                    Welcome to your blog post. Use this space to connect with your readers and potential customers in a
                    way that’s current and interesting. Think of it as an ongoing conversation where you can share
                    updates about business, trends, news, and more.
                </p>
            </Container>
        </Base>
    )
}