import React, {Component} from "react";
import OrderService from "../services/OrderService";

class DisplayOrder extends Component {

    constructor(props) {
        super(props)

        this.state = {
            registrationNr:this.props.match.params.id,
           order: { }
        }
    }
    componentDidMount() {
        OrderService.getOrderByRegNr (this.registrationNr).then((response) =>{
            this.setState({order : response.data});
        });
    }
    render() {
        return (
            <div>

            </div>
        );
    }

}
export default DisplayOrder;