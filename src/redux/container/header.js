const initialState = {
    menus: [
        {
            label: "Navigation",
            route: "#"
        },
        {
            label: "Navigation",
            route: "#"
        },
        {
            label: "Navigation",
            route: "#"
        },
        {
            label: "Navigation",
            route: "#"
        }
    ],
    loggedInMenus: [
        {
            label: "Dashboard",
            route: "#"
        },
        {
            label: "Appointments",
            route: "#"
        },
        {
            label: "Clinics",
            route: "#"
        }
    ]
};

const headerReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return { ...state };
    }
};

export default headerReducer;
