import React from "react";
import x from '../../assets/x.svg'
const TheFactor = (props) => {
    return (
        <section id="the-factor">
            <div className="container">
                <div className="d-flex justify-content-center head">
                    The <img src={x} className="x" alt="img" /> <span className="head-aloc">Factor</span>
                </div>
                <div className="row">
                    <div className="col-6">
                        {arrList.map((data, index) => (
                            <div className="factors">
                                <div className="list-head"> {data.head} </div>
                                <div className="desc"> {data.desc} </div>
                            </div>
                        ))}
                        <button className="btn">Get Started</button>
                    </div>
                    <div className="col-6 right-col">
                        <img src={"/assets/images/factor-phone.png"} className="" alt="x-factor" />
                        <div className="center"> Proprietary Investor Dashboard </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
export default TheFactor;

const arrList = [
    { head: "Asset Evaluation", desc: "The underlying portfolio will comprise a diversified selection of securities. More than 3,500 opportunities are evaluated and only the top 30 are selected in the portfolio. The curation process entails real time evaluation across 100+ data points and stringent selection criteria." },
    { head: "Investment Tracking & Decision Making", desc: "Integration of technology and automation enables optimisation of the portfolio on an ongoing basis. The proprietary technology has demonstrated capability to identify opportunistic entry and exit events." },
    { head: "Investment Tracking & Decision Making", desc: "Integration of technology and automation enables optimisation of the portfolio on an ongoing basis. The proprietary technology has demonstrated capability to identify opportunistic entry and exit events." }
]