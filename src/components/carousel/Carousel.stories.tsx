import { ComponentStory } from '@storybook/react';

import { Carousel } from './Carousel';
import { imagesArr } from "assets";

export default {
  title: 'Carousel/Default',
  component: Carousel,
}

const Template: ComponentStory<typeof Carousel> = (args) => <Carousel {...args} />;

export const Default = Template.bind({});

Default.args = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    responsive: [
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }
    ],
    sliderImages: [<imagesArr.Bubble />, <imagesArr.Amer />, <imagesArr.Enhance />, <imagesArr.WebPath />, <imagesArr.Mediator />,<imagesArr.Bubble />, <imagesArr.Amer />, <imagesArr.Enhance />, <imagesArr.WebPath />, <imagesArr.Mediator />],
    label: 'Slider',
    backgroundColor: 'black',
    size: 'small'
};




