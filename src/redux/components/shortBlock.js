const initialState = {
    sectionTitle: "Short title for a block",
    sectionDetails: [
        {
            title: "First Feature",
            image: "https://dummyimage.com/260x260",
            description: "Short text describing a feature of your product/service."
        },
        {
            title: "Second Feature",
            image: "https://dummyimage.com/260x260",
            description: "Short text describing a feature of your product/service."
        },
        {
            title: "Third Feature",
            image: "https://dummyimage.com/260x260",
            description: "Short text describing a feature of your product/service."
        },
        {
            title: "Fourth Feature",
            image: "https://dummyimage.com/260x260",
            description: "Short text describing a feature of your product/service."
        }
    ]
};

const aboutReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return { ...state };
    }
};

export default aboutReducer;
