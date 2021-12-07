import React, {Component} from 'react';
import CustomerService from "../services/CustomerService";

class EditCustomer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            registrationNr : this.props.match.params.registrationNr,
            uuid: this.props.match.params.uuid,
            firstName: '',
            lastName: '',
            email: '',
            telNumber: ''

        }
        this.form = React.createRef();
        this.validate = this.validate.bind(this);
        this.handleInputChangeCustomer = this.handleInputChangeCustomer.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        CustomerService.getCustomerByUUID(this.state.uuid).then((response) => {
            let customer = response.data
            this.setState({
                firstName: customer.firstName,
                lastName: customer.lastName,
                email: customer.email,
                telNumber: customer.telNumber,

            });

        });
    }

    handleInputChangeCustomer = e => {
        this.setState({
                ...this.state,
                [e.target.name]: e.target.value

        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        let customer = { uuid: this.state.uuid,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            telNumber: this.state.telNumber
        };
        console.log(customer)
        CustomerService.updateCustomer(customer ,this.state.uuid).then(res => {
            this.props.history.push('/orders');
        })
    }

    validate = () => {
        this.form.current.reportValidity();
    };

    render() {
        const {firstName, lastName, email, telNumber} = this.state;

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

                                    <button type="button" className="btn btn-info" onClick={this.handleSubmit}>Save
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

export default EditCustomer