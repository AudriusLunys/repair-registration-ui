
import React, {Component} from "react";
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


class CarouselComponent extends Component {

    render() {
        return (
            <div>
                <div className='container-fluid' >
                    <div className="row">
                        <div className="col-sm-12 offset-md-5 offset-md-5" >
                            <h3>About Us</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <Carousel>

                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="https://wonderfulengineering.com/wp-content/uploads/2014/07/Hi-Tech-Wallpaper-24.jpg"
                                        width={600} height={600}
                                        alt="First slide"
                                    />
                                    <Carousel.Caption>
                                        <h3>Repaired Brands</h3>
                                        <p>ASUS, LENOVO, DELL, HP, APPLE</p>
                                        <p>SAMSUNG, XIAOMI, CANON, EPSON</p>

                                    </Carousel.Caption>
                                </Carousel.Item>

                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="https://wonderfulengineering.com/wp-content/uploads/2014/07/Hi-Tech-Wallpaper-12.jpg"
                                        width={600} height={600}
                                        alt="Second slide"
                                    />

                                    <Carousel.Caption>
                                        <h3>Contact Us</h3>
                                        <p>Adress: Konstitucijos pr. 55 ,02560, Vilnius</p>
                                        <p>Tel Number: +3708999999</p>
                                        <p>Email: info@chopshop.com</p>
                                    </Carousel.Caption>
                                </Carousel.Item>

                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="https://wonderfulengineering.com/wp-content/uploads/2014/07/Hi-Tech-Wallpaper-29.jpg"
                                        width={600} height={600}
                                        alt="Third slide"
                                    />
                                    <Carousel.Caption>
                                        <h3>Company Info</h3>
                                        <p>It Chop Shop corp.</p>
                                        <p>Reg.Nr: 4699522.</p>
                                        <p>VAT Nr: 4654659999.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>

                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
}

export default CarouselComponent;