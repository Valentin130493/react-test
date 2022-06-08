// Portal - Dashboard

import React, { useState } from "react";

// Components
import { Header } from "components/header/Header";
import { Link } from "react-router-dom";

import { imagesArr } from "assets";

export const Dashboard: React.FC = () => {
    const [user,] = useState({
        avtar: "https://dummyimage.com/50x50",
        name: 'Esther Howard',
        email: 'estherhoward@example.com'
    });

    return (
        <React.Fragment>

            <div className="m_portal">

                {/* Portal Header */}
                <Header type={true} logo={<imagesArr.Logo />} user={user} />

                <div className="m_portal-layout">

                    <div className="mp_container">

                        <div className="m_portal-widgets">

                            <div className="m_portal-dash m_portal-widget">

                                <div className="m_portal-dash-user-text">

                                    <span className="m_portal-dash-date">Feb 19, 2022</span>
                                    <h3>Welcome back, Esther!</h3>
                                    <p>A small description of what you can offer your clients or why they shoud choose your service.</p>

                                    <button className="m_btn m_btn-black small">
                                        Search Clinic
                                    </button>
                                </div>

                                <div className="m_portal-dash-user-img">
                                    <img src="https://dummyimage.com/235x235" alt="dummy" />
                                </div>

                            </div>

                            <div className="m_flex m_portal-widget-col">
                                <div className="m_portal-reports m_portal-widget">

                                    <div className="m_portal-widget-header">
                                        <div className="m_portal-widget-title">
                                            <h4> Report Document </h4>
                                            <Link to="/dashboard">
                                                View All
                                            </Link>
                                        </div>
                                        <p>1-20 May 2022</p>
                                    </div>

                                    <div className="m_portal-widget-body">

                                        {
                                            [...Array(5)].map(e => {
                                                return (
                                                    <div className="mp_file-report">

                                                        <div className="mp_file-report-info">
                                                            <div className="mp_file-report-icon">
                                                                <img src={imagesArr.PDF} alt="icon" />
                                                            </div>
                                                            <div className="mp_file-report-name">
                                                                <p className="m_one-line">Medical Check Up Report.pdf</p>
                                                                <span>2 Mb</span>
                                                            </div>
                                                        </div>

                                                        <div className="mp_file-report-download">
                                                            <imagesArr.Download />
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }


                                    </div>

                                </div>

                                <div>
                                    <div className="m_portal-reports m_portal-widget">

                                        <div className="m_portal-widget-body">
                                            <div className="m_portal-blood-type">
                                                <div className="m_portal-blood-type-icon">
                                                    <imagesArr.BloodType />
                                                </div>
                                                <ul>
                                                    <li>
                                                        <span>Blood Type</span>
                                                        <p>AB (III) Rh-</p>
                                                    </li>
                                                    <li>
                                                        <span>Research date</span>
                                                        <p>12.05.2022</p>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="m_portal-reports m_portal-widget">
                                        <div className="m_portal-widget-header">
                                            <div className="m_portal-widget-title">
                                                <h4> Body mass index </h4>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>

                        <div className="m_portal-cal m_portal-widget dark">
                            <div className="m_portal-cal-appointments">
                                <div className="m_portal-widget-header">
                                    <div className="m_portal-widget-title dark">
                                        <h4> Upcoming appointments </h4>
                                    </div>
                                </div>

                                <div className="m_portal-widget-body">
                                    {
                                        [...Array(5)].map(e => {
                                            return (
                                                <div className="m_portal-appointment">
                                                    <div className="m_portal-appointment-name">
                                                        <h5>Bone Density/DEXA</h5>
                                                        <p>16.04.2022 at 16:10</p>
                                                    </div>
                                                    <div className="m_portal-appointment-options">
                                                        <svg width="2" height="14" viewBox="0 0 2 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M1 13.6666C0.722222 13.6666 0.486111 13.5694 0.291666 13.3749C0.0972217 13.1805 0 12.9444 0 12.6666C0 12.3888 0.0972217 12.1527 0.291666 11.9583C0.486111 11.7638 0.722222 11.6666 1 11.6666C1.27778 11.6666 1.51389 11.7638 1.70833 11.9583C1.90278 12.1527 2 12.3888 2 12.6666C2 12.9444 1.90278 13.1805 1.70833 13.3749C1.51389 13.5694 1.27778 13.6666 1 13.6666ZM1 7.99992C0.722222 7.99992 0.486111 7.9027 0.291666 7.70825C0.0972217 7.51381 0 7.2777 0 6.99992C0 6.72214 0.0972217 6.48603 0.291666 6.29158C0.486111 6.09714 0.722222 5.99992 1 5.99992C1.27778 5.99992 1.51389 6.09714 1.70833 6.29158C1.90278 6.48603 2 6.72214 2 6.99992C2 7.2777 1.90278 7.51381 1.70833 7.70825C1.51389 7.9027 1.27778 7.99992 1 7.99992ZM1 2.33325C0.722222 2.33325 0.486111 2.23603 0.291666 2.04159C0.0972217 1.84714 0 1.61103 0 1.33325C0 1.05547 0.0972217 0.819363 0.291666 0.624919C0.486111 0.430474 0.722222 0.333252 1 0.333252C1.27778 0.333252 1.51389 0.430474 1.70833 0.624919C1.90278 0.819363 2 1.05547 2 1.33325C2 1.61103 1.90278 1.84714 1.70833 2.04159C1.51389 2.23603 1.27778 2.33325 1 2.33325Z" fill="white" fill-opacity="0.8" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>

                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </React.Fragment>
    );

};
