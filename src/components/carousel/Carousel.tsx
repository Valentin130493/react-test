import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './carousel.scss';

interface CarouselProps {
    /**
     * Show/Hide the dots on slider
     */
    dots?: boolean;
    /**
     * Logo of the site
     */
    infinite?: boolean;
    /**
     * speed of slider
     */
    speed?: number,
    /**
     * the number of slider
     */
    slidesToShow?: number,
    slidesToScroll?: number,
    autoplay?: boolean,
    arrows?: boolean,
    responsive?: any,
    sliderImages?: any,
    /**
     * What background color to use
     */
    backgroundColor?: string;
    /**
     * Optional click handler
     */
    onClick?: (e) => any;
}

export const Carousel = (props: CarouselProps) => {
    const { dots, infinite, speed, slidesToShow, slidesToScroll, autoplay, arrows, sliderImages} = props;
    const sliderSettings = {
        dots: dots,
        infinite: infinite,
        speed: speed,
        slidesToShow: slidesToShow,
        slidesToScroll: slidesToScroll,
        autoplay: autoplay,
        arrows: arrows
    }

	return (
		<div className='sponsor'>
			<div className='container'>
				<div className='slider-bg'>
					<Slider {...sliderSettings} >
						{
							sliderImages.map((images) => {
								return (
									<div>
										<div className='logo-box'>
											{images}
										</div>
									</div>
								)
							})
						}
					</Slider>
				</div>
			</div>
		</div>
	);
};
