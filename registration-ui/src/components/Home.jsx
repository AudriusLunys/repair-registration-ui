import React, {Component} from 'react';
import { useNavigate } from 'react-router-dom';
import Navbaras from "./Navbar";
import Carousel from "./Carousel";

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <Carousel/>
            </div>
        );
    }
}

export default Home;