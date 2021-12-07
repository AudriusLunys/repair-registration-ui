import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListOrders from "./components/ListOrders";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CreateOrder from "./components/CreateOrder";
import Home from "./components/Home";
import DisplayOrder from "./components/DisplayOrder";
import EditCustomer from "./components/EditCustomer";
import EditDevice from "./components/EditDevice";


function App() {
    return (
        <div>
            <Router>
                <Header/>
                <div className="container">
                    <Switch>
                        <Route path='/' exact={true} component={Home}></Route>
                        <Route path='/orders' exact={true} component={ListOrders}></Route>
                        <Route path='/register-device' exact={true} component={CreateOrder}></Route>
                        <Route path='/order/:registrationNr' exact={true} component={DisplayOrder}></Route>
                        <Route path='/customer-edit/:uuid' exact={true} component={EditCustomer}></Route>
                        <Route path='/device-edit/:uuid' exact={true} component={EditDevice}></Route>
                    </Switch>
                </div>
                <Footer/>
            </Router>
        </div>

    );
}

export default App;
