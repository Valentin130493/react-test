const initialState = {
    sectionTitle: "Short title for a block",
    sectionDescription: "Short text describing a feature of your product/service. Think how it can benefit your potential customer.",
    features: [
        {
            title: "First Feature",
            description: "Short text describing a feature of your product/service. Think how it can benefit your potential customer."
        },
        {
            title: "First Feature",
            description: "Short text describing a feature of your product/service. Think how it can benefit your potential customer."
        },
        {
            title: "First Feature",
            description: "Short text describing a feature of your product/service. Think how it can benefit your potential customer."
        },
        {
            title: "First Feature",
            description: "Short text describing a feature of your product/service. Think how it can benefit your potential customer."
        },
        {
            title: "First Feature",
            description: "Short text describing a feature of your product/service. Think how it can benefit your potential customer."
        },
        {
            title: "First Feature",
            description: "Short text describing a feature of your product/service. Think how it can benefit your potential customer."
        }
    ]
};

const shortTitleReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return { ...state };
    }
};

export default shortTitleReducer;
