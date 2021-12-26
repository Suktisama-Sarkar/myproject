import React from "react";
import './header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import './style.css';

import Headermenu from '../headermenu/Headermenu';

const Header = () => {
    return(
        <>
        <header>
            <div className="headerTop">
                <div className="container">
                        <div className="row justify-content-md-between">
                        <div className="col-auto">1</div>
                        <div className="col-auto">2</div>
                    </div>
                </div>
            </div>
            <div className="headerBottom">
                    <div className="container">
                        <div className="row justify-content-md-between">
                            <div className="col-auto">1</div>
                            <div className="col-auto">
                                <Headermenu />
                            </div>
                        </div>
                    </div>
            </div>
        </header>
        </>
    );
}

export default Header;