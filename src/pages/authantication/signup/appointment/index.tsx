import React from "react";
import { Link } from 'react-router-dom';

import { imagesArr } from "assets";

export const Appointment: React.FC = () => {
	return (

		<React.Fragment>

			<div className="booking-section">
				<div className="booking-container">

					<div className="auth-info booking-steps">
						<div className="auth-logo">
							<imagesArr.LogoWhite />
						</div>

						<div className="form-steps">
							<ul>
								<li className="form-step completed">
									<h4>Date &amp; Time of appointment</h4>
									<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</p>
								</li>
								<li className="form-step active">
									<h4>Physician information</h4>
									<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</p>
								</li>
								<li className="form-step">
									<h4>Patient information</h4>
									<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</p>
								</li>
								<li className="form-step">
									<h4>Exam details</h4>
									<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</p>
								</li>
								<li className="form-step">
									<h4>Credit card infromation</h4>
									<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</p>
								</li>
							</ul>
						</div>

						{/* <div className="booking-address">
							<div className="booking-address-name">
								<h3>UCSF Medical Center</h3>
								<ul>
									<li>Fluoroscopy</li>
								</ul>
							</div>
							<div className="booking-address-info">
								<p>326-432-8790</p>
								<p>8:00 AM - 5:00 PM</p>
							</div>
						</div> */}

					</div>

					<div className="auth-form booking-form">

						<div className="auth-header">
							<h2>Select date &amp; time of appointment</h2>
							<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</p>
						</div>

						<div className="booking-form-sec">
							<form>

								<h4 className="form-label-text">Sed perspiciatis omnis natus?</h4>

								<div className="appointment-time">

									<div className="appointment-time-cal">

									</div>

									<ul className="appointment-time-slots">
										<li className="appointment-time-slot">9:00</li>
										<li className="appointment-time-slot">9:30</li>
										<li className="appointment-time-slot">11:00</li>
										<li className="appointment-time-slot">11:45</li>
										<li className="appointment-time-slot">13:00</li>
										<li className="appointment-time-slot">13:30</li>
										<li className="appointment-time-slot">15:00</li>
										<li className="appointment-time-slot">15:45</li>
										<li className="appointment-time-slot">17:00</li>
										<li className="appointment-time-slot">17:30</li>
										<li className="appointment-time-slot">18:00</li>
										<li className="appointment-time-slot">19:00</li>
										<li className="appointment-time-slot">19:30</li>
										<li className="appointment-time-slot">19:45</li>
									</ul>
								</div>

								<div className="form-button">
									<Link to="/physicianinfo">
										<button type="submit" className="m_btn m_btn-black"> Continue </button>
									</Link>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>

	);
};
