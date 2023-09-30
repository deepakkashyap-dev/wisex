import React from "react";

const Partners = (props) => {
    return (
        <section id="partners" style={{ background: "#F5F5F5" }}>
            <div className="container">
                <div className="d-flex justify-content-center head pt-5">
                    PMS <span className="head-aloc" style={{ marginLeft: "10px" }}>Partners</span>
                </div>

                <div className="d-flex ptnr-grp" >
                    {
                        arrlist.map((data, inx) => (
                            <div key={inx}>
                                <div className="partner-text">
                                    {data.text}
                                </div>
                                <div>
                                    <img src={data.icon} className="" alt="icon" />
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
}
export default Partners;

const arrlist = [
    { text: "Custodian & Demat", icon: "/assets/images/icici.png" },
    { text: "Fund Account", icon: "/assets/images/icici-sec.png" },
    { text: "Digital Onboarding", icon: "/assets/images/kfim.png" },
    { text: "Brokerage", icon: "/assets/images/sherkhan.png" },
    { text: "Legal", icon: "/assets/images/universal.png" },
]