const initialState = {
    features: [
        {
            title: "First Feature",
            description: "Short text describing a feature of your product/service. Think about how it can benefit your potential customer. The text should convey the objectives of your product/service. Try being expressive yet concise."
        },
        {
            title: "Second Feature",
            description: "Short text describing a feature of your product/service. Think about how it can benefit your potential customer. The text should convey the objectives of your product/service. Try being expressive yet concise."
        },
        {
            title: "Third Feature",
            description: "Short text describing a feature of your product/service. Think about how it can benefit your potential customer. The text should convey the objectives of your product/service. Try being expressive yet concise."
        }
    ]
};

const featureReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return { ...state };
    }
};

export default featureReducer;
