import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import ListOrders from "./components/ListOrders";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CreateOrder from "./components/CreateOrder";
import Home from "./components/Home";
import Kazkas from "./components/Kazkas";

function App() {
    return (
        <div>
            <Router>
                <Header/>
                <div className="container">
                    <Routes>
                        <Route path='/' exact={true} element={<Home/>}></Route>
                        <Route path='/orders' exact={true} element={<ListOrders/>}></Route>
                        <Route path='/register-device' exact={true} element={<CreateOrder/>}></Route>
                    </Routes>
                </div>
                <Footer/>
            </Router>
        </div>

    );
}

export default App;
