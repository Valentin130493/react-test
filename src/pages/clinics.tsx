// Clinics

import { imagesArr } from 'assets';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

// Components
import { Header } from "components/header/Header";

const Clinics = () => {
    const navigate = useNavigate();
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <React.Fragment>

            {/* Header */}
            <Header type={false} logo={<imagesArr.Logo />}/>

            {/* Clinic */}
            <div className="clinics-section">
                <div className="container">
                    <div className="clinics-list">
                        {
                            [...Array(2)].map(e => {
                                return (
                                    <div className="clinic-sec">

                                        <h3 className="clinic-title">Arizona</h3>

                                        <div className="clinic-info">

                                            <h4 className="clinic-info-name"> Arizona Medical  - Plaza Del Rio </h4>

                                            <div className="clinic-info-wpr">
                                                <div className="clinic-info-address">
                                                    <ul>
                                                        <li>13090 N 94th Dr Ste 103, Peoria</li>
                                                        <li>Tel: 326-432-8790</li>
                                                        <li>Open 8:00 AM to 5:00 PM</li>
                                                        <li>Check-in available: 8:00 Am</li>
                                                    </ul>
                                                    <button className="clinic-info-schedule" onClick={() => setModalOpen(!modalOpen)}> Schedule </button>
                                                </div>
                                                <div className="clinic-info-procedure">
                                                    <h5>Procedures</h5>
                                                    <ul>
                                                        <li>MRI 3T</li>
                                                        <li>X-Ray</li>
                                                    </ul>
                                                </div>
                                            </div>

                                        </div>

                                        <div className="clinic-info">

                                            <h4 className="clinic-info-name"> Arizona Medical  - Laveen </h4>

                                            <div className="clinic-info-wpr">
                                                <div className="clinic-info-address">
                                                    <ul>
                                                        <li>13090 N 94th Dr Ste 103, Peoria</li>
                                                        <li>Tel: 326-432-8790</li>
                                                        <li>Open 8:00 AM to 5:00 PM</li>
                                                        <li>Check-in available: 8:00 Am</li>
                                                    </ul>
                                                    <button className="clinic-info-schedule" onClick={() => setModalOpen(!modalOpen)}> Schedule </button>
                                                </div>
                                                <div className="clinic-info-procedure">
                                                    <h5>Procedures</h5>
                                                    <ul>
                                                        <li>MRI 3T</li>
                                                        <li>Bone Density / DEXA</li>
                                                        <li>Ultrasound (US)</li>
                                                        <li>X-Ray</li>
                                                    </ul>
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                )
                            })
                        }

                    </div>

                    <div className="clinics-info-image">
                        <div className="clinics-info-image-inner">
                            <img src="https://dummyimage.com/500x500" alt="" title="" />
                        </div>
                    </div>
                </div>
            </div>

            {
                modalOpen &&
                <div className="modal">

                    <div className="modal-overlay"></div>

                    <div className="modal-content">

                        <div className="modal-close" onClick={() => setModalOpen(!modalOpen)}>
                            <span>&#10006;</span>
                        </div>

                        <div className="modal-buttons">
                            <button className="m_btn m_btn-black w-full" onClick={() => navigate('/login')}>For Patient</button>
                            <button className="m_btn m_btn-black w-full" onClick={() => navigate('/login')}>For Providers</button>
                        </div>
                    </div>
                </div>
            }

        </React.Fragment>
    )
}

export default Clinics;