import React, {Component} from 'react';
import Navbaras from "./Navbar";

class Header extends Component {
    constructor(props) {
        super(props);

        this.state ={

        }
    }

    render() {
        return (
            <div>
                <header>
                  <Navbaras/>
                </header>
            </div>
        );
    }
}

export default Header;