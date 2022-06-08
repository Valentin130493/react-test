import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { imagesArr } from "assets";

export const CardInfo: React.FC = () => {

	const [modalOpen, setModalOpen] = useState(false);

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
								<li className="form-step completed">
									<h4>Patient information</h4>
									<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</p>
								</li>
								<li className="form-step completed">
									<h4>Exam details</h4>
									<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</p>
								</li>
								<li className="form-step active">
									<h4>Credit card infromation</h4>
									<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</p>
								</li>
							</ul>
						</div>

					</div>	

					<div className="auth-form booking-form">
						
						<div className="auth-header">
							<h2>Credit card Infromation</h2>
							<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</p>
						</div>	

						<div className="booking-form-sec">
							<form>
								<div className="form-control-col">
									<div className="form-control">
										<label> Name</label> 
										<input type="text" className="form-input" placeholder="Esther" />
									</div>
									<div className="form-control">
										<label> Surname</label> 
										<input type="text" className="form-input" placeholder="Howard" />
									</div>
								</div>
								
								<div className="form-control">
									<label> Card Number</label> 
									<input type="text" className="form-input" placeholder="example@example.com" />
								</div>

								<div className="form-control-col m_align-end">
									<div className="form-control">
										<label> Expiration Date</label> 
										<select>
											<option selected disabled hidden>Month</option>
											<option>Month 1</option>
											<option>Month 2</option>
											<option>Month 3</option>
											<option>Month 4</option>
										</select>
									</div>
									<div className="form-control">
										<label> </label> 
										<input type="text" className="form-input" placeholder="Howard" />
									</div>
								</div>

								<div className="form-control">
									<label> CVC</label> 
									<input type="text" className="form-input" placeholder="xxx" />
								</div>

								<div className="form-button">
									<button type="button" className="m_btn m_btn-black" onClick={() => setModalOpen(true)}> Schedule </button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>

			{
				modalOpen &&
				<div className="modal">

					<div className="modal-overlay"></div>

					<div className="modal-content" style={{maxWidth: '445px'}}>

						<div className="modal-close" onClick={() => setModalOpen(false)}>
							<span>&#10006;</span>
						</div>


						<div className="modal-header">
							<h3>Successfully!</h3>
							<p>
								Your registration was successful. We are waiting for you at: <span className="m_color-theme">Washington Ave. Manchester, Kentucky 39495</span>
							</p>
						</div>

						<div className="modal-body">
							<div className="booking-success">
								<ul className="booking-success-info">
									<li>
										<p>Procedure</p>
										<span>Fluoroscopy</span>
									</li>
									<li>
										<p>Date </p>
										<span>11.06.2022</span>
									</li>
									<li>
										<p>Time</p>
										<span>15:00</span>
									</li>
								</ul>

								<div className="booking-success-image">
									<img src="https://dummyimage.com/335x220" alt="Successful" title="Successful" />
								</div>
							</div>
						</div>
							

						<div className="modal-buttons">
							<Link to="/dashboard">
								<button className="m_btn m_btn-black w-full">Back to home</button>
							</Link>
						</div>
					</div>
				</div>
			}

		</React.Fragment>
	);
};
