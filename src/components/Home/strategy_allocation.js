import React from "react";

const StrategyAndAllocation = (props) => {
    return (
        <section id="strat-alloc" className="background-lines">
            <div className="container ">
                <div className="d-flex justify-content-center head">
                    Strategy & <span className="head-aloc">Allocation</span>
                </div>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col" className="col-3 tbl-head">Investments</th>
                            <th scope="col" className="col-4 tbl-head">Features</th>
                            <th colspan="2" scope="col" className="col-5 tbl-head px-5">
                                Allocation
                                <tr className="row">
                                    <th scope="col" className="col-6">Discretionary</th>
                                    <th scope="col" className="col-6">Non-Discretionary</th>
                                </tr>
                            </th>
                        </tr>

                    </thead>
                    <tbody>
                        {
                            table.map((data, index) => (
                                <tr key={index} className={`t-style-${(index + 1) % 2}`}>
                                    <td>{data.a}</td>
                                    <td>{data.b}</td>
                                    <td>{data.c}</td>
                                    <td>{data.d}</td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
                <div className="d-flex justify-content-center btn-div">
                    <button className="btn">Get Started</button>
                </div>
            </div>
        </section >
    );
}
export default StrategyAndAllocation;

const table = [
    { a: "Listed Equity", b: "Growth Momentum", c: "40%", d: "XX%o" },
    { a: "Listed Equity", b: "Growth Kicker + Regular Distribution", c: "40%", d: "XX%o" },
    { a: "Listed Equity", b: "Credit Enhancement + Regular Distribution", c: "40%", d: "XX%o" },
    { a: "Listed Equity", b: "Managed + Regular Distribution", c: "40%", d: "XX%o" },
]