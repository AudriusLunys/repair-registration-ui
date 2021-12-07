import React, {Component} from "react";
import DeviceService from "../services/DeviceService";

class EditDevice extends Component {
    constructor(props) {
        super(props);

        this.state = {
            registrationNr : this.props.match.params.registrationNr,
            uuid: this.props.match.params.uuid,
            manufacturer: '',
            model: '',
            serialNumber: '',
            failureDescription: ''

        }
        this.form = React.createRef();
        this.validate = this.validate.bind(this);
        this.handleInputChangeDevice = this.handleInputChangeDevice.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        DeviceService.getDeviceByUUID(this.state.uuid).then((response) => {
            let device = response.data
            this.setState({
                manufacturer: device.manufacturer,
                model: device.model,
                serialNumber: device.serialNumber,
                failureDescription: device.failureDescription,

            });

        });
    }

    handleInputChangeDevice = e => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value

        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        let device = { uuid: this.state.uuid,
            manufacturer: this.state.manufacturer,
            model: this.state.model,
            serialNumber: this.state.serialNumber,
            failureDescription: this.state.failureDescription
        };
        console.log(device)
        DeviceService.updateDevice(device ,this.state.uuid).then(res => {
            this.props.history.push('/orders');
        })
    }

    validate = () => {
        this.form.current.reportValidity();
    };

    render() {
        const {manufacturer, model, serialNumber, failureDescription} = this.state;

        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3 ">
                            <h3 className="text-center">Register for repair</h3>
                            <div className="card-body">
                                <form ref={this.form}>
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

                                    <button type="button" className="btn btn-info" onClick={this.handleSubmit}>Save
                                    </button>
                                     <br/>
                                    <br/>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default EditDevice