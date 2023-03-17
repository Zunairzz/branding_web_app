import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {AdminPage} from "./pages/AdminPage";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/admin/login" element={<AdminPage/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
