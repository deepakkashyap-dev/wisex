import React from "react";
import arrow from '../../assets/arrow.svg';
const HeroBlock = (props) => {
    return (
        <section id="hero">
            <div className="col-lg-6">
                <div className="hero-heading">
                    <span >CREAM PMS -</span> Composite Real Estate Enhanced Active Multi-Asset
                </div>
                <div className="hero-heading-2">
                    India’s 1st Sector Specific Real Estate PMS
                </div>
                <div>
                    <button className="hero-btn">
                        Get Start
                        <img src={arrow} className="" alt="arrow" />
                    </button>
                </div>
            </div>
        </section>
    );
}
export default HeroBlock;