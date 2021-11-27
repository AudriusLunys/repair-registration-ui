import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import ListOrders from "./components/ListOrders";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
    return (
        <div>
            <Router>
                <Header/>
                <div className="container">
                    <Routes>
                        <Route path='/orders' element={<ListOrders/>}></Route>
                    </Routes>
                </div>
                <Footer/>
            </Router>
        </div>

    );
}

export default App;
