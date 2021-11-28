import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav,  Navbar } from 'react-bootstrap';
const {Component} = require("react");


class Navbaras extends Component{
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="/">It Repair ChopShop</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/orders">Orders</Nav.Link>
                        <Nav.Link href="/register-device">New repair order</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
export default Navbaras;
