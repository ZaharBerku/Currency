import {combineReducers} from "redux";
import selectReducer from "./select/selectReducer";
import inputReducer from "./input/inputReducer";
import headerReducer from "./header/headerReducer";
import currencyReducer from "./currency/currencyReducer";

const reducers = combineReducers({
    select: selectReducer,
    currency: currencyReducer,
    header: headerReducer,
    input: inputReducer,
});

export default reducers;