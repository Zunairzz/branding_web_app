import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {AdminPage} from "./pages/AdminPage";
import {PostPage} from "./pages/PostPage";
import {HomePage} from "./pages/HomePage";
import {AboutPage} from "./pages/About";
import {Brands} from "./pages/Brands";
import {BrandDetails} from "./component/BrandDetails";
import {ContactUs} from "./pages/ContactUs";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage/>}></Route>
                    <Route path="/admin/login" element={<AdminPage/>}></Route>
                    <Route path="/add/post" element={<PostPage/>}></Route>
                    <Route path="/brands" element={<Brands/>}></Route>
                    <Route path="/about" element={<AboutPage/>}></Route>
                    <Route path="/brand/details" element={<BrandDetails/>}></Route>
                    <Route path="/contact-us" element={<ContactUs/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
