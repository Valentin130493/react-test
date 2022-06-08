import React from "react";
import { Link } from 'react-router-dom';
import { imagesArr } from "assets";

export const ExamDetails: React.FC = () => {
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
								<li className="form-step active">
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
							<h2>Exam details</h2>
							<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</p>
						</div>	

						<div className="booking-form-sec">
							<form>
								
								<div className="form-control">
									<label> Priority</label> 
									
									<div className="radio-group">
										<div className="radio-control">
											<input type="radio" name="priority" id="priority_1" value="" />
											<label htmlFor="priority_1">Priority</label>
										</div>
										<div className="radio-control">
											<input type="radio" name="priority" id="priority_2" value="" />
											<label htmlFor="priority_2">Priority</label>
										</div>
										<div className="radio-control">
											<input type="radio" name="priority" id="priority_3" value="" />
											<label htmlFor="priority_3">Priority</label>
										</div>
										<div className="radio-control">
											<input type="radio" name="priority" id="priority_4" value="" />
											<label htmlFor="priority_4">Priority</label>
										</div>
									</div>
								</div>
								
								<div className="form-control">
									<label>Procedure</label> 
									<select>
										<option selected disabled hidden>Choose procedure</option>
										<option>Arizona</option>
										<option>California</option>
										<option>Colorado</option>
										<option>Florida</option>
										<option>Kentucky</option>
									</select>
								</div>
								
								<div className="form-control">
									<label>Diagnosis</label> 
									<textarea name="diagnosis" rows={4} />
								</div> 

								<div className="form-control">
									<label>Additional information</label> 
									<textarea name="additional_information" rows={4} />
								</div> 

								<div className="file-control">
									
									<h4 className="form-label-text">Input photo/pdf of referral form</h4>

									<div className="file-control-wpr">
										<div className="file-control-preview">
											<img src="http://dummyimage.com/145x145" alt="sample" />
										</div>

										<div className="file-control-options">
											<button type="submit" className="m_btn m_btn-black m_btn-flex"> 
												<span><imagesArr.Adobe /></span>
												Upload PDF
											</button>

											<button type="submit" className="m_btn m_btn-black light"> 
												Upload a photo
											</button>
										</div>
									</div>

								</div>						

								<div className="form-button">
									<Link to="/cardinfo">
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
