const initialState = {
    firstSection: {
        title: "Medium length title for a building block",
        image: "https://dummyimage.com/560x500",
        description: [
            {
                text: "A paragraph or two with information on your product/service or describes a problem your product/service is designed to solve."
            },
            {
                text: "Provide your customers a story they would enjoy keeping in mind the objectives of your website. Pay special attention to the tone of voice. Try to win the customers' trust by being positive."
            }
        ]
    },
    secondSection: [
        {
            title: "Medium length title for a building block",
            text: "Provide some assertive title and description that would persuade the customers to take some action, e.g., making a purchase, scheduling a demo, etc.",
            button: {
                flg: true,
                text: "Button"
            }
        },
        {
            title: "Medium length title for a building block",
            text: "Provide some assertive title and description that would persuade the customers to take some action, e.g., making a purchase, scheduling a demo, etc.",
            button: {
                flg: true,
                text: "Button"
            }
        }
    ],
    thirdSection: {
        title: "Medium length title for a building block",
        image: "https://dummyimage.com/560x500",
        description: [
            {
                text: "A paragraph or two with information on your product/service or describes a problem your product/service is designed to solve."
            },
            {
                text: "Provide your customers a story they would enjoy keeping in mind the objectives of your website. Pay special attention to the tone of voice. Try to win the customers' trust by being positive."
            }
        ]
    },
};

const aboutReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return { ...state };
    }
};

export default aboutReducer;
