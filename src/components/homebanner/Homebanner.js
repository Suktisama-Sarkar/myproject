import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel';
//import Bannerimg from '../../assets/images/banner-1.jpg';
//import Bannerimg2 from '../../assets/images/banner-2.jpg';

class Homebanner extends Component{
    constructor(){
        super()

        this.state = {
            bannerArray : [
                {
                    id : 1,
                    title : "banner1",
                    desc : 'Description1',
                    bannerimg : 'banner-1.jpg',
                },
                {
                    id : 2,
                    title : "banner2",
                    desc : 'Description2',
                    bannerimg : 'banner-2.jpg',
                }
            ]
        }        
    }
        render(){
            return(
                <>
                <Carousel fade>
                    {
                        this.state.bannerArray.map((banner) => {
                            return <Carousel.Item interval={1000} key={banner.id}>
                            <img
                            className="d-block w-100"
                            // src= {'/assets/images/' + banner.bannerimg}
                            src={'bannerimage/' + banner.bannerimg}
                            alt="First slide"
                            />
                            <Carousel.Caption>
                            <h3>{banner.title}</h3>
                            <p>{banner.desc}</p>
                            <p>{window.location.origin + '/assets/images/'}{banner.bannerimg}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        })
                    }
                    
                    {/* <Carousel.Item interval={1000}>
                        <img
                        className="d-block w-100"
                        src={Bannerimg2}
                        alt="Second slide"
                        />

                        <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item> */}
                    
                </Carousel>
                </>
            )
        }
}

export default Homebanner;