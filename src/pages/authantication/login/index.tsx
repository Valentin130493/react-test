// Login

import React from "react";
import { Link } from 'react-router-dom';

// Images
import { imagesArr } from "assets";

// Slick Slider
import Slider from "react-slick";

export const Login: React.FC = () => {

	const sliderSettings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		arrows: false
	}

	return (
		<React.Fragment>

			<div className="authentication">
				<div className="auth-container">

					<div className="auth-form">

						<div className="auth-logo">
							<imagesArr.Logo />
						</div>

						<div className="auth-header">
							<h2>Welcome back!</h2>
							<p>Welcome to Medical Booking, please put your login credentials below to start using the app</p>
						</div>

						<div className="auth-login">
							<form>
								<div className="form-control">
									<label> Company Email</label>
									<input type="email" className="form-input" placeholder="mary.mary@example.com" />
								</div>

								<div className="form-control">
									<label> Password </label>
									<input type="password" className="form-input" placeholder="Enter password" />
									<div className="form-note">
										<Link to="">Forgot Password?</Link>
									</div>
								</div>

								<div className="form-button">
									<Link to="/appointment">
										<button type="submit" className="m_btn m_btn-black">
											Login
										</button>
									</Link>
								</div>

								<div className="form-note">
									<p> Don't have an account yet?&nbsp;<Link to="/signup">Sign up for free</Link> </p>
								</div>
							</form>
						</div>

					</div>

					<div className="auth-info">
						<Slider {...sliderSettings} className="medical-info-slider">
							<div className="medical-info-block">
								<div className="medical-info-image">
									<img src="https://dummyimage.com/350x265" alt="sample" title="image" />
								</div>
								<div className="medical-info-desc">
									<h4>Sed ut perspiciatis unde omnis</h4>
									<p>A short story about the possibilities of this resource in a few sentences. Sed ut perspiciatis unde omnis sed ut.</p>
								</div>
							</div>
							<div className="medical-info-block">
								<div className="medical-info-image">
									<img src="https://dummyimage.com/350x265" alt="sample" title="image" />
								</div>
								<div className="medical-info-desc">
									<h4>Sed ut perspiciatis unde omnis</h4>
									<p>A short story about the possibilities of this resource in a few sentences. Sed ut perspiciatis unde omnis sed ut.</p>
								</div>
							</div>
							<div className="medical-info-block">
								<div className="medical-info-image">
									<img src="https://dummyimage.com/350x265" alt="sample" title="image" />
								</div>
								<div className="medical-info-desc">
									<h4>Sed ut perspiciatis unde omnis</h4>
									<p>A short story about the possibilities of this resource in a few sentences. Sed ut perspiciatis unde omnis sed ut.</p>
								</div>
							</div>
						</Slider>
					</div>

					<div className="auth-logo-mobile">
						<imagesArr.Logo />
					</div>
				</div>
			</div>

		</React.Fragment>
	);
};
