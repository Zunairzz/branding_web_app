import "../styles/CustomFooter.css";
import 'bootstrap-icons/font/bootstrap-icons.css';

export const CustomFooter = () => {
    return (
        <div>
            <div className="footer-dark">
                <footer>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6 col-md-3 item">
                                <h3>Services</h3>
                                <ul>
                                    <li><a href="#">Web design</a></li>
                                    <li><a href="#">Development</a></li>
                                    <li><a href="#">Hosting</a></li>
                                </ul>
                            </div>
                            <div className="col-sm-6 col-md-3 item">
                                <h3>About</h3>
                                <ul>
                                    <li><a href="#">Company</a></li>
                                    <li><a href="#">Team</a></li>
                                    <li><a href="#">Careers</a></li>
                                </ul>
                            </div>
                            <div className="col-md-6 item text">
                                <h3>Company Name</h3>
                                <p>Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus ac sem lacus. Ut
                                    vehicula rhoncus elementum. Etiam quis tristique lectus. Aliquam in arcu eget velit
                                    pulvinar dictum vel in justo.</p>
                            </div>
                            <div className="col item social">
                                <a href="#">
                                    <i className="bi bi-facebook"></i>
                                </a>
                                <a href="#">
                                    <i className="bi bi-twitter"></i>
                                </a>
                                <a href="#">
                                    <i className="bi bi-snapchat"></i>
                                </a>
                                <a href="#">
                                    <i className="bi bi-instagram "></i>
                                </a>
                            </div>
                        </div>
                        <p className="copyright">Company Name © 2018</p>
                    </div>
                </footer>
            </div>
        </div>
    )
}