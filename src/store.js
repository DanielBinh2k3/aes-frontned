import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import {
	essayByTopicReducer,
	essayDetailsReducer,
	essayListByBandReducer,
	essayScoringReducer,
	essaySearchReducer,
	essaySampleReducer,
	essayGrammarReducer,
	essayLatestTopicReducer,
	essayDeepScoringReducer,
} from "./ApiRequests/reducers/essayReducers";
import { authReducer, userReducer } from "./ApiRequests/reducers/authSlice"; // Import the authReducer

const reducer = combineReducers({
	essayScoreCreate: essayScoringReducer,
	essayDeepScoreCreate: essayDeepScoringReducer,
	essayGrammarCreate: essayGrammarReducer,
	essayTopicGet: essayByTopicReducer,
	essayDetailGet: essayDetailsReducer,
	essaySearchGet: essaySearchReducer,
	essayBandGet: essayListByBandReducer,
	essaySampleGet: essaySampleReducer,
	essayLatestTopicGet: essayLatestTopicReducer,
	userInfo: authReducer,
	userRegister: userReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
	? JSON.parse(localStorage.getItem("userInfo"))
	: null;

const initialState = {
	userInfo: { userInfo: userInfoFromStorage },
	userRegister: {},
};

const middleware = [thunk];

const store = createStore(
	reducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
