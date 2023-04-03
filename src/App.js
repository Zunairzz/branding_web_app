import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {AdminPage} from "./pages/AdminPage";
import {PostPage} from "./pages/PostPage";
import {HomePage} from "./pages/HomePage";
import {AboutPage} from "./pages/About";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage/>}></Route>
                    <Route path="/admin/login" element={<AdminPage/>}></Route>
                    <Route path="/add/post" element={<PostPage/>}></Route>
                    <Route path="/about" element={<AboutPage/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
