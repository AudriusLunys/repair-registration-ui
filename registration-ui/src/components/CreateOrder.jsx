import React, {Component} from 'react';
import OrderService from "../services/OrderService";


class CreateOrder extends Component {

    constructor(props) {
        super(props);

        this.state = {
            customer: {
                firstName: '',
                lastName: '',
                email: '',
                telNumber: ''
            },
            device: {
                manufacturer: '',
                model: '',
                serialNumber: '',
                failureDescription: ''
            }
        };
        this.form = React.createRef();
        this.validate = this.validate.bind(this);
        this.handleInputChangeCustomer = this.handleInputChangeCustomer.bind(this);
        this.handleInputRepairDescription = this.handleInputRepairDescription.bind(this);
        this.handleInputChangeDevice = this.handleInputChangeDevice.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleSubmit = (event) => {
       event.preventDefault();
       this.validate();
            let order = {
                customer: {
                    ...this.state.customer,
                    [event.target.name]: event.target.value
                },
                device: {
                    ...this.state.device,
                    [event.target.name]: event.target.value
                }
            };

            OrderService.createOrder(order).then(res => {
                this.props.history.push('/orders');
            });

    };

    handleInputChangeCustomer = e => {
        this.setState({
            customer: {
                ...this.state.customer,
                [e.target.name]: e.target.value
            }
        });
    };

    handleInputRepairDescription = e => {
        this.setState({
            repairDescription: {
                ...this.state.repairDescription,
                [e.target.name]: e.target.value
            }
        });
    };

    handleInputChangeDevice = e => {
        this.setState({
            device: {
                ...this.state.device,
                [e.target.name]: e.target.value
            }
        });
    };

    validate = () => {
        this.form.current.reportValidity();
    };


    render() {
        const {firstName, lastName, email, telNumber} = this.state.customer;
        const {manufacturer, model, serialNumber, failureDescription} = this.state.device;

        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3 ">
                            <h3 className="text-center">Register for repair</h3>
                            <div className="card-body">
                                <form ref={this.form}>
                                    <div><h3> Customer Data</h3></div>
                                    <div className="form-group">
                                        <label>First Name</label>
                                        <input placeholder="First name"
                                               className="form-control"
                                               value={firstName}
                                               name="firstName"
                                               onChange={this.handleInputChangeCustomer}
                                               required/>
                                    </div>

                                    <div className="form-group">
                                        <label>Last Name</label>
                                        <input placeholder="Last name"
                                               className="form-control"
                                               value={lastName}
                                               name="lastName"
                                               onChange={this.handleInputChangeCustomer}
                                               required/>
                                    </div>

                                    <div className="form-group">
                                        <label>Email</label>
                                        <input
                                            placeholder="Email"
                                            className="form-control"
                                            value={email}
                                            name="email"
                                            onChange={this.handleInputChangeCustomer}
                                            required/>
                                    </div>
                                    <div className="form-group">
                                        <label>Telephone Nr</label>
                                        <input placeholder="Telephone Nr"
                                               className="form-control"
                                               value={telNumber}
                                               name="telNumber"
                                               onChange={this.handleInputChangeCustomer}
                                               required/>
                                    </div>
                                    <div><h3> Device Data</h3></div>

                                    <div className="form-group">
                                        <label>Manufacturer</label>
                                        <input placeholder="Manufacturer"
                                               className="form-control"
                                               value={manufacturer}
                                               name="manufacturer"
                                               onChange={this.handleInputChangeDevice}
                                               required/>
                                    </div>
                                    <div className="form-group">
                                        <label>Device Model</label>
                                        <input placeholder="Device Model"
                                               className="form-control"
                                               value={model}
                                               name="model"
                                               onChange={this.handleInputChangeDevice}
                                               required/>
                                    </div>

                                    <div className="form-group">
                                        <label>Serial Number</label>
                                        <input placeholder="Device serial number"
                                               className="form-control"
                                               value={serialNumber}
                                               name="serialNumber"
                                               onChange={this.handleInputChangeDevice}
                                               required/>
                                    </div>

                                    <div className="form-group">
                                        <label>Failure Description</label>
                                        <input placeholder="Failure description"
                                               className="form-control"
                                               value={failureDescription}
                                               name="failureDescription"
                                               onChange={this.handleInputChangeDevice}
                                               required/>
                                    </div>

                                    <button type="button" className="btn btn-success" onClick={this.handleSubmit}>Submit
                                        Order
                                    </button>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateOrder;