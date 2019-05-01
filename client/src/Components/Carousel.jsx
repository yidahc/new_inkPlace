import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class DemoCarousel extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src="https://i.imgur.com/qSEZIyC.jpg" />
                    <p className="legend">Old School</p>
                </div>
                <div>
                    <img src="https://i.imgur.com/ukW8TbO.jpg" />
                    <p className="legend">Old School</p>
                </div>
                <div>
                    <img src="https://i.imgur.com/xA98eCf.jpg" />
                    <p className="legend">Old School</p>
                </div>
                <div>
                    <img src="https://i.imgur.com/tNifkG2.jpg" />
                    <p className="legend">Old School</p>
                </div>
                <div>
                    <img src="https://i.imgur.com/TN8I14G.jpg" />
                    <p className="legend">Japanese</p>
                </div>
                <div>
                    <img src="https://i.imgur.com/vgp4KEv.jpg" />
                    <p className="legend">Japanese</p>
                </div>
                <div>
                    <img src="https://i.imgur.com/SSLxOuW.jpg" />
                    <p className="legend">Japanese</p>
                </div>
                <div>
                    <img src="https://i.imgur.com/5yAu48F.jpg" />
                    <p className="legend">Japanese</p>
                </div>
                <div>
                    <img src="https://i.imgur.com/uRYRjSw.jpg" />
                    <p className="legend">Tribal</p>
                </div>
                <div>
                    <img src="https://i.imgur.com/EBNnB8r.jpg" />
                    <p className="legend">Tribal</p>
                </div>
                <div>
                    <img src="https://i.imgur.com/1RRp4Vs.jpg" />
                    <p className="legend">Tribal</p>
                </div>
                <div>
                    <img src="https://i.imgur.com/MZhs2w7.jpg" />
                    <p className="legend">Tribal</p>
                </div>
                <div>
                    <img src="https://i.imgur.com/Ore4QuL.jpg" />
                    <p className="legend">Blackwork</p>
                </div>
                <div>
                    <img src="https://i.imgur.com/OHzNnJS.jpg" />
                    <p className="legend">Blackwork</p>
                </div>
                <div>
                    <img src="https://i.imgur.com/psfnPnF.jpg" />
                    <p className="legend">Blackwork</p>
                </div>
                <div>
                    <img src="https://i.imgur.com/cZeurNV.jpg" />
                    <p className="legend">Blackwork</p>
                </div>
            </Carousel>
        );
    }


}

export default DemoCarousel;
