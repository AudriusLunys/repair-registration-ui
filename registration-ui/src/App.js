import './App.css';
import ListOrders from "./components/ListOrders";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
    return (
        <div>
            <Header/>
            <div className="container">
                <ListOrders/>
            </div>
        <Footer/>
        </div>

    );
}

export default App;
