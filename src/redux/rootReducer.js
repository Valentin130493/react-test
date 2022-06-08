import { combineReducers } from "redux";
import headerReducer from "./container/header";
import featureReducer from "./components/feature";
import shortTitleReducer from "./components/shortTitle";
import aboutReducer from "./components/about";
import shortBlockReducer from "./components/shortBlock";
import footerReducer from "./container/footer";

const RootReducer = combineReducers({
    headerState: headerReducer,
    featureState: featureReducer,
    shortTitleState: shortTitleReducer,
    aboutState: aboutReducer,
    shortBlockState: shortBlockReducer,
    footerState: footerReducer
});

export default RootReducer;
