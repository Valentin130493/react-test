import React from "react";
import { Link } from 'react-router-dom';
import { imagesArr } from "assets";

export const PatientInfo: React.FC = () => {
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
								<li className="form-step completed">
									<h4>Physician information</h4>
									<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</p>
								</li>
								<li className="form-step active">
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

					</div>	

					<div className="auth-form booking-form">
						
						<div className="auth-header">
							<h2>Patient Information</h2>
							<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</p>
						</div>	

						<div className="booking-form-sec">
							<form>
								<div className="form-control-col">
									<div className="form-control">
										<label> First Name</label> 
										<input type="text" className="form-input" placeholder="Esther" />
									</div>
									<div className="form-control">
										<label> Last Name</label> 
										<input type="text" className="form-input" placeholder="Howard" />
									</div>
								</div>
								<div className="form-control-col">
									<div className="form-control">
										<label> Phone Number</label> 
										<input type="text" className="form-input" placeholder="Esther" />
									</div>
									<div className="form-control">
										<label> Date of Birth</label> 
										<input type="date" className="form-input" placeholder="Howard" />
									</div>
								</div>
								<div className="form-control">
									<label> Email Address</label> 
									<input type="email" className="form-input" placeholder="example@example.com" />
								</div>

								<div className="form-control">
									<label> Primary insurance</label> 
									<input type="text" className="form-input" placeholder="example@example.com" />
								</div>

								<div className="form-button">
									<Link to="/examdetails">
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
