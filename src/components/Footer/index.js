import React from "react";
import { Link } from "react-router-dom"
import rightArrow from "../../assets/rightArrow.svg";

const Footer = (props) => {
    return (
        <footer id="footer">
            <div className="row">
                <div className="d-flex col-6 ">
                    <div className="d-flex flex-column col-4 ">
                        <Link to={{ pathname: "/" }} className="" >  Home   </Link>
                        <Link to={{ pathname: "/" }} className="  ">About</Link>
                        <Link to={{ pathname: "/" }} className="  ">Properties</Link>
                        <Link to={{ pathname: "/" }} className="">FAQs</Link>
                    </div>
                    <div className="d-flex flex-column col-4">
                        <Link to={{ pathname: "/" }} className="" >Register</Link>
                        <Link to={{ pathname: "/" }} className="">Login</Link>
                        <Link to={{ pathname: "/" }} className="">Connect</Link>
                    </div>
                    <div className="d-flex flex-column col-4">
                        <Link to={{ pathname: "/" }} className="" >Privacy Policy</Link>
                        <Link to={{ pathname: "/" }} className="">Terms of Use</Link>
                    </div>
                </div>
                <div className="d-flex flex-column col-4">
                    <Link to={{ pathname: "/" }} className="" >Newsletter</Link>
                    <Link to={{ pathname: "/" }} className="">Stay updated on new investment opportunities</Link>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" aria-describedby="button-addon2" />
                        <button className="btn" type="button" id="button-addon2">
                            <img src={rightArrow} className="" alt="arrow" />
                        </button>
                    </div>
                </div>
            </div>
            <div className="row discl-block">
                <p className="discl">Disclaimer:</p>
                <p className="discl itm">All the information on this website www.yieldwisex.com is published in good faith and for general information purpose only. YieldWiseX does not make any warranties about the completeness, reliability and accuracy of this information. Any action you take upon the information you find on this website www.yieldwisex.com, is strictly at your own risk. YieldWiseX will not be liable for any losses and/or damages in connection with the use of this website.</p>
                <p className="discl itm">YieldWiseX's research team, software, algorithms and analytical processes used have, to the best of its ability, taken into account various factors- both quantitative measures and qualitative assessments, in an unbiased manner, while designing a suitable investment model. However, such assessments carry inherent unknown risks and uncertainties linked to broad markets as well as analysts’ expectations about future events.</p>
                <p className="discl itm">It is further clarified in explicit terms that nothing on this website shall be construed as Direct or Indirect Offer to Invest/Buy/Fund in any of Investment Schemes/Real Estate Schemes/Real Estate Properties/ Financial Schemes, launched by YieldWiseX or it's associate entities. That nothing on this website is for solicitation or invitation to any individual/firm/ company/Association Of Persons/ entity for any Investment schemes pertaining to Real Estate or otherwise, and it is further clarified that any scheme listed on the website involves standard market risks and is neither insured by YieldWiseX, nor we can be held liable for any monetary or other losses the investor may occur due to the same.</p>
                <p className="discl itm">The past performance of any opportunity listed on this website is not necessarily indicative of its future performance. YieldWiseX is not guaranteeing or assuring any return under any of the opportunities listed on this website. You are requested to exercise prudent discretion (including by obtaining expert professional advice with regard to specific legal, tax and financial implications) prior investing in any opportunity listed on this website.</p>
                <p className="discl itm">From our website, you can visit other websites by following hyperlinks to such external sites. While we strive to provide only quality links of useful and ethical websites, we have no control over the content and nature of these sites. These links to other websites do not imply a recommendation for all or any of the content found on these sites. Site owners and content may change without notice and may occur before we have the opportunity to remove a link which may have gone ‘bad’.</p>
                <p className="discl itm">By using our website, you hereby consent to our disclaimer and agree to its</p>
            </div>
            <div className="footer-logo">
                <div className="copy-right">© 2023 YieldWiseX</div>
                <div>
                    <img src={"/assets/images/footerIcon.png"} alt="footer" />
                </div>
            </div>
        </footer >
    );
}
export default Footer;