import React from "react";
import leftarr from '../../assets/leftarr.svg'
import rightarr from '../../assets/rightarr.svg'
const bio = "Ram is the Founder and CEO of Integrow Asset Management and holds experience in all facets of real estate like construction, investment management and banking. He believes in transforming the real estate asset management market by providing knowledge, good governance, tech-enabled solutions, and value growth for all stakeholders."
const PeopleStory = (props) => {
    return (
        <section id="people-story">
            <div className="container">
                <div className="d-flex justify-content-center head">
                    From someone who <span className="head-aloc" style={{ marginLeft: "10px" }}>has done it before</span>
                </div>
                <div className="inner-bg">
                    <div className="d-flex " >
                        <div className="img-div col-4">
                            <div>
                                <img src={"/assets/images/ramesh.png"} className="user-img" alt="owner" />
                            </div>
                            <div className="name">  Ramashrya Yadav </div>
                            <div className="post"> Founder & CEO - Integrow AMC </div>
                        </div>
                        <div className="exp-div col-8">
                            <div className="bio">{bio}</div>
                            <div className="d-flex">
                                <div className="col-4">
                                    <div className="cr">₹ 50,000 <sub>Cr</sub></div>
                                    <div className="bio-txt">Previously managed</div>
                                </div>
                                <div className="col-4">
                                    <div className="cr">20 <sub>Years</sub></div>
                                    <div className="bio-txt">of Expertise</div>
                                </div>
                            </div>
                            <hr className="bio-break" />
                            <div className="right-btm">
                                <p>Post experience:</p>
                                <div className="d-flex">
                                    <div className="d-flex flex-column">
                                        <img src={"/assets/images/edil.png"} className="exp-img1" alt="img" />
                                        <div>CEO-Real Estate Practice (2014 - 2020)</div>
                                    </div>
                                    <div className="d-flex flex-column">
                                        <img src={"/assets/images/orbit.png"} className="exp-img2" alt="img" />
                                        <div>Joint CEO (2013 - 2014)</div>
                                    </div>
                                    <div className="d-flex flex-column">
                                        <img src={"/assets/images/shapoor.png"} className="exp-img3" alt="img" />
                                        <div>EA- Director (2000 - 2002)</div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center arrow-btn">
                    <div className="mx-2">
                        <button className="left-arrow" ><img src={leftarr} className="" alt="img" /></button>
                    </div>
                    <div className="mx-2">
                        <button className="right-arrow"><img src={rightarr} className="" alt="img" /></button>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default PeopleStory;