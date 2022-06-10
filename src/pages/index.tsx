import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { imagesArr } from "assets";

// Components
import { Footer, Carousel } from "components";
import { Header } from "components/header/Header";
import { SearchBox} from "../components/searchBox/searchBox";




const Home: React.FC = () => {

	const navigate = useNavigate();

	const featureSettings = useSelector((state: any) => state?.featureState)
	const shortTitleSettings = useSelector((state: any) => state?.shortTitleState)
	const aboutSettings = useSelector((state: any) => state?.aboutState)
	const shortBlockSettings = useSelector((state: any) => state?.shortBlockState)

	return (
		<React.Fragment>

			{/* Header And Hero section */}
			<Header type={false} logo={<imagesArr.Logo />} />


			<div className="hero-header">
				<div className="container">
					<div className="hero-header-content">
						<span className="hero-header-tagline">Welcome to Medical Booking!</span>
						<h1>Header on two lines Sed ut perspiciatis unde</h1>
						<h5>A small description of what you can offer your clients or why they shoud choose your service.</h5>
					</div>
				</div>



				<SearchBox />

				{/* Appointment Section */}
				<div className="appointment-section">

					<div className="container">
						<div className="appointment-wpr">

							<form className="appointment-form">

								<div className="col">
									<div className="form-group">
										<input type="text" placeholder="Street address" />
									</div>
								</div>
								<div className="col">
									<div className="form-group">
										<input type="text" placeholder="City" />
									</div>
								</div>
								<div className="col">
									<div className="form-group">
										<select>
											<option selected disabled hidden>Chose State</option>
											<option>Arizona</option>
											<option>California</option>
											<option>Colorado</option>
											<option>Florida</option>
											<option>Kentucky</option>
										</select>
									</div>
								</div>
								<div className="col">
									<div className="form-group">
										<select>
											<option selected disabled hidden>Chose Proocedure</option>
											<option>Bone Density/DEXA</option>
											<option>Breast Imaging</option>
											<option>CT/CAT Scan</option>
											<option>Fluoroscopy</option>
											<option>Interventional Radiology (IR)</option>
										</select>
									</div>
								</div>

								<button type="button" className="m_btn m_btn-black" onClick={() => navigate('/clinics')}>Search</button>

							</form>
							{/*<GoogleForm />*/}
							<div className="appointment-labels-sec">
								<p>You may be looking for</p>

								<ul className="appointment-labels">
									<li>
										Bone Density/DEXA
										<span>&#10006;</span>
									</li>
									<li>
										Bone Density/DEXA
										<span>&#10006;</span>
									</li>
									<li>
										Bone Density/DEXA
										<span>&#10006;</span>
									</li>
									<li>
										Bone Density/DEXA
										<span>&#10006;</span>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Sponsor Slider Section */}
			<Carousel
				autoplay
				backgroundColor="black"
				infinite
				onClick={() => {}}
				responsive={[
					{
					breakpoint: 991,
					settings: {
						slidesToScroll: 1,
						slidesToShow: 4
					}
					},
					{
					breakpoint: 767,
					settings: {
						slidesToScroll: 2,
						slidesToShow: 2
					}
					},
					{
					breakpoint: 575,
					settings: {
						slidesToScroll: 1,
						slidesToShow: 2
					}
					}
				]}
				sliderImages={[
					<imagesArr.Bubble />,
					<imagesArr.Amer />,
					<imagesArr.Enhance />,
					<imagesArr.WebPath />,
					<imagesArr.Mediator />,
					<imagesArr.Bubble />,
					<imagesArr.Amer />,
					<imagesArr.Enhance />,
					<imagesArr.WebPath />,
					<imagesArr.Mediator />
				]}
				slidesToScroll={1}
				slidesToShow={5}
				speed={500}
			/>

			{/* Feature Section */}
			<div className='feature'>
				<div className='container'>
					<div className='row'>
						{
							featureSettings.features.map((item) => {
								return (
									<div className='col'>
										<div className='feature-box'>
											<div className='icon'></div>
											<h5>{item.title}</h5>
											<p>{item.description}</p>
										</div>
									</div>
								)
							})
						}
					</div>
				</div>
			</div>

			{/* Short Title */}
			<div className="short-title-section">
				<div className="container">
					<div className="content-header">
						<h2>{shortTitleSettings.sectionTitle}</h2>
						<p>{shortTitleSettings.sectionDescription}</p>
					</div>

					<div className="short-title-features feature">
						{
							shortTitleSettings.features.map((item) => {
								return (
									<div className="feature-box">
										<div className="icon"></div>
										<h5>{item.title}</h5>
										<p>{item.description}</p>
									</div>
								)
							})
						}
					</div>
				</div>
			</div>

			{/* About */}
			<div className="about-site-section">
				<div className="container">
					<div className="about-site-wpr text">
						<div className="about-info-desc">
							<h2>{aboutSettings.firstSection.title}</h2>
							{
								aboutSettings.firstSection.description.map((item) => {
									return (
										<p>{item.text}</p>
									)
								})
							}
						</div>
						<div className="about-info-img">
							<img src={aboutSettings.firstSection.image} alt="Medium length title" title="Medium length title" />
						</div>
					</div>
				</div>
			</div>

			<div className="about-info-section">
				<div className="container">
					<div className="about-info-wpr">
						{
							aboutSettings.secondSection.map((item) => {
								return (
									<div className="about-info-desc">
										<h2>{item.title}</h2>
										<p>{item.text}</p>
										{
											item.button.flg &&
											<button className="btn">{item.button.text}</button>
										}
									</div>
								)
							})
						}
					</div>
				</div>
			</div>

			<div className="about-site-section">
				<div className="container">
					<div className="about-site-wpr image">
						<div className="about-info-desc">
							<h2>{aboutSettings.thirdSection.title}</h2>
							{
								aboutSettings.thirdSection.description.map((item) => {
									return (
										<p>{item.text}</p>
									)
								})
							}
						</div>
						<div className="about-info-img">
							<img src={aboutSettings.thirdSection.image} alt="Medium length title" title="Medium length title" />
						</div>
					</div>
				</div>
			</div>

			{/* ShortBlock */}
			<div className="short-block-section">
				<div className="container">
					<div className="content-header">
						<h2>{shortBlockSettings.sectionTitle}</h2>
					</div>

					<div className="short-block-wpr">
						{
							shortBlockSettings.sectionDetails.map((item) => {
								return (
									<div className="short-block-feature feature-box">
										<div className="short-block-feature-img">
											<img src={item.image} alt="First Feature" title="First Feature" />
										</div>
										<div className="short-block-feature-desc">
											<h5>{item.title}</h5>
											<p>{item.description}</p>
										</div>
									</div>
								)
							})
						}
					</div>
				</div>
			</div>

			<Footer />
		</React.Fragment>
	);
};

export default Home;
