import React from "react";
import rupee from '../../assets/rupee.svg';
import growth from '../../assets/growth.svg';
import rotate from '../../assets/rotate.svg';
import secure from '../../assets/secure.svg';
import icon1 from '../../assets/chart-i-1.svg';
import icon2 from '../../assets/chart-i-2.svg';
import icon3 from '../../assets/chart-i-3.svg';
import Chart from 'react-apexcharts';

const GrowthStory = (props) => {
    const [options] = React.useState({
        chart: {
            height: 450,
            toolbar: {
                show: false,
                tools: { zoom: false, },
            }
        },
        colors: ["#31B889"],
        legend: {
            show: false
        },
        stroke: {
            width: [0, 2],
            curve: 'straight',
            colors: ["#132347"],
        },
        labels: ['2017', '2020', '2025F', '2030F'],
        tooltip: {
            enabled: false,
        },
        yaxis: {
            tickAmount: 6,
            axisBorder: {
                show: true,
                color: "#31B889",
                offsetX: 1,
                width: 3
            },
            labels: {
                show: true,
                maxHeight: 120,
                style: {
                    colors: ["#132347"],
                    fontSize: '20px',
                    fontFamily: 'Public Sans',
                    fontWeight: 400,
                    // cssClass: 'apexcharts-xaxis-label',
                },
            }
        },
        xaxis: {
            axisBorder: {
                show: true,
                color: "#31B889",
                offsetX: -1,
                height: 3,
            },
            labels: {
                show: true,
                maxHeight: 120,
                style: {
                    colors: ["#132347"],
                    fontSize: '16px',
                    fontFamily: 'Public Sans',
                    fontWeight: 400,
                    // cssClass: 'apexcharts-xaxis-label',
                },
            }
        },
        markers: {
            size: 4,
            colors: ["#132347"],
        },
        grid: {
            show: false,
        },
        dataLabels: {
            enabled: true,
            enabledOnSeries: [0],
            offsetX: 0,
            offsetY: -10,
            style: {
                fontSize: '15px',
                fontFamily: 'Public Sans',
                fontWeight: '700',
                colors: ["#132347"],
            },
            background: {
                enabled: false,
            }
        },
        plotOptions: {
            bar: {
                columnWidth: '40%',
                dataLabels: {
                    position: 'top'
                }
            },

        }

    });
    const [series] = React.useState([{
        type: 'bar',
        dataLabels: {
            enabled: true,
        },
        data: [120, 180, 650, 1000]
    }, {
        type: 'line',
        dataLabels: {
            enabled: false,
        },
        data: [220, 280, 850, 1100]
    }]);
    return (
        <section id="growth-story">
            <div className="container">
                <div className="growth-head">
                    {headArray.map((data, index) => (
                        <div className=" growth-row" key={index}>
                            <img src={data.icon} className="" alt="img" />
                            {data.text}
                        </div>
                    ))}
                </div>
                <div className="d-flex justify-content-center head">
                    The Indian <span className="head-aloc">Real Estate Growth Story</span>
                </div>
                <div className="row chart-item">
                    <div className="col" >
                        <div className="inner-div">
                            <Chart
                                options={options}
                                series={series}
                                // type="bar"
                                type="line"
                                width={600}
                                height={400}
                            />
                        </div>
                        <div className="inner-div center chart-foot">
                            Market size of Real Estate in India (US$ Billion)
                        </div>
                    </div>
                    <div className="col" id="growth-story-list">
                        {
                            colItem.map((data, index) => (
                                <div className="inner-div">
                                    <div className="d-flex flex-row" key={index}>
                                        <div className=" icon" >
                                            <img src={data.icon} className="" alt="ing" />
                                        </div>
                                        <div className="">
                                            <div className="head">
                                                {data.text1}
                                            </div>
                                            <div className="desc">
                                                {data.text2}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="d-flex justify-content-center" >
                    <button className="btn">Learn More</button>
                </div>
            </div>
        </section >
    );
}
export default GrowthStory;

const headArray = [
    { "icon": rupee, "text": "50 Lacs Minimum Investment" },
    { "icon": secure, "text": "SEBI Regulated" },
    { "icon": rotate, "text": "Instant Liquidity" },
    { "icon": growth, "text": "22%* IRR" },
]

const colItem = [
    { "icon": icon1, text1: "US$ 1 Trillion", text2: "market size by 2030 & 13% Contribution to India's GDP" },
    { "icon": icon2, text1: "18.4% CAGR", text2: "over the last 10 years outperforming other asset classes" },
    { "icon": icon3, text1: "19.5% CAGR", text2: "expected to grow steadily with strong underlying macro fundamentalsP" },
]