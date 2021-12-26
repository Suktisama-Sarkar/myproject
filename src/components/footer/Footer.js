import React from 'react';
import { Link } from 'react-router-dom';
import './footerStyle.css';
import Fbicon  from '../../assets/images/facebook.jpg';
import Jdicon  from '../../assets/images/justdial.jpg';

const Footer = () => {
    return(
        <>
        <footer>
            <div className="container">
                <div className='row'>
                    <div className="col-md-12 text-center">
                        <Link to="#"> <img src={Fbicon} alt="FB"/></Link>
                        <Link to="#"> <img src={Jdicon} alt="FB"/></Link>
                    </div>
                </div>
                <div className='row'>
                    <div className="col-md-12 text-center">
                        Copyright
                    </div>
                </div>
            </div>
            
            
            
            </footer>
        </>
    );
}

export default Footer;