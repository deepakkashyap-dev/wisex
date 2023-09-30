import React from "react";
import cream1 from '../../assets/cream-1.svg';
import cream2 from '../../assets/cream-2.svg';
import cream3 from '../../assets/cream-3.svg';
import { Button } from "bootstrap";

const CreamInvestment = (props) => {
    return (
        <section id="cream-inv">
            <div className="container py-5">
                <div className="row ">
                    <div className="d-flex justify-content-center head p-0">  Cream of the Crop:  </div>
                    <div className="d-flex justify-content-center head p-0">The <span className="head-aloc p-0 mx-2">CREAM </span> Investment Strategy</div>
                </div>
                <div className="row data">
                    {creamList.map((data, index) => (
                        <div className={`${data.col} center`} key={index}>
                            <div>
                                <img src={data.icon} className="cream-img" alt="img" />
                            </div>
                            <div className="head">{data.head}</div>
                            <div className="desc">{data.desc}</div>
                        </div>
                    ))}
                </div>
                <div className="d-flex justify-content-center">
                    <button className="btn">Get Started</button>
                </div>
            </div>
        </section >
    );
}
export default CreamInvestment;

const creamList = [
    { icon: cream1, head: "Unprecedented Access", desc: "The first-of-its-kind real estate centric PMS in India. A joint collaboration between Integrow AMC and WiseX.", col: "col-lg-3" },
    { icon: cream2, head: "Downside Protection & Upside Participation", desc: "The CREAM Strategy offers access to a diversified Real Estate portfolio that aims to capture long-term growth through exploiting short-term opportunities. This investment approach combines income generation with the potential for significant gains, specifically tailored for the current volatile market conditions.", col: "col-lg-5" },
    { icon: cream3, head: "Actively Managed Multi-Asset Allocation", desc: "Strategic diversification across listed equities, listed debt, and unlisted debt. The portfolio is actively managed to identify optimal exit and entry scenarios to establish an alpha and outperform the broader market index.", col: "col-lg-4" },
]