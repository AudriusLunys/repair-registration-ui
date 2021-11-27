import React, {Component} from 'react';

class Footer extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <div>
               <footer className="footer">
               <span className="text-center text-muted">2021 @ with help from "React For Dummies"</span>
               </footer>
            </div>
        );
    }
}

export default Footer;