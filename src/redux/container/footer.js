import { imagesArr } from "assets";

const initialState = {
    ftrTitle: "Medical Booking",
    ftrDescription: "Copyright 2021 © Medical Booking company. All right reserved",
    socialMedia: [
        {
            image: <imagesArr.Twitter />,
            route: "#"
        },
        {
            image: <imagesArr.FaceBook />,
            route: "#"
        },
        {
            image: <imagesArr.InstaGram />,
            route: "#"
        },
        {
            image: <imagesArr.YouTube />,
            route: "#"
        },
        {
            image: <imagesArr.PinteRest />,
            route: "#"
        }
    ],
    frtMenus: {
        company: [
            {
                label: "About",
                route: "#"
            },
            {
                label: "FAQ",
                route: "#"
            },
            {
                label: "Blog",
                route: "#"
            },
            {
                label: "Become a partner",
                route: "#"
            }
        ],
        information: [
            {
                label: "Pricing plans",
                route: "#"
            },
            {
                label: "Request demo",
                route: "#"
            },
            {
                label: "Support",
                route: "#"
            },
            {
                label: "Status",
                route: "#"
            }
        ],
        learn: [
            {
                label: "Handbook",
                route: "#"
            },
            {
                label: "Detailed overview",
                route: "#"
            },
            {
                label: "Features",
                route: "#"
            }
        ]
    }
};

const footerReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return { ...state };
    }
};

export default footerReducer;
