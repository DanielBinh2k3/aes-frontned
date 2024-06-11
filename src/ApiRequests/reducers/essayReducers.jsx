import { createEssayGrammar, createEssayScore } from "../actions/essayActions";
import {
	ESSAY_BY_TOPIC_FAIL,
	ESSAY_BY_TOPIC_REQUEST,
	ESSAY_BY_TOPIC_SUCCESS,
	ESSAY_DETAILS_FAIL,
	ESSAY_DETAILS_REQUEST,
	ESSAY_DETAILS_SUCCESS,
	ESSAY_SEARCH_REQUEST,
    ESSAY_SEARCH_SUCCESS,
    ESSAY_SEARCH_FAIL,
	ESSAY_LIST_REQUEST,
	ESSAY_LIST_SUCCESS,
	ESSAY_LIST_FAIL,
    ESSAY_SAMPLE_REQUEST,
    ESSAY_SAMPLE_SUCCESS,
    ESSAY_SAMPLE_FAIL,
    ESSAY_LATEST_TOPIC_REQUEST,
    ESSAY_LATEST_TOPIC_SUCCESS,
    ESSAY_LATEST_TOPIC_FAIL,
} from "../constants/essayConstants";

// const initialState = {
// 	loading: false,
// 	error: null,
// 	essayScore: null,
// };
import { createSlice } from '@reduxjs/toolkit';


const essayGrammarSlice = createSlice({
  name: 'essayGrammar',
  initialState: {
    listing: null,
    loading: false,
    error: null,
    success: false,
  },
  reducers: {
    // Define additional reducers if needed
    // resetState: (state) => initialState, // Example reset state action
  },
  extraReducers: (builder) => {
    builder
      .addCase(createEssayGrammar.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(createEssayGrammar.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.listing = action.payload;
      })
      .addCase(createEssayGrammar.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const essayGrammarReducer = essayGrammarSlice.reducer;

const essayScoreSlice = createSlice({
  name: 'essayGrammar',
  initialState: {
    scoreGeneral: null,
    loading: false,
    error: null,
    success: false,
  },
  reducers: {
    // Define additional reducers if needed
    // resetState: (state) => initialState, // Example reset state action
  },
  extraReducers: (builder) => {
    builder
      .addCase(createEssayScore.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(createEssayScore.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.scoreGeneral = action.payload;
      })
      .addCase(createEssayScore.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const essayScoringReducer = essayScoreSlice.reducer;


export const essayByTopicReducer = (state = { essays: [] }, action) => {
    switch (action.type) {
        case ESSAY_BY_TOPIC_REQUEST:
            return { loading: true, essays: [] };
        case ESSAY_BY_TOPIC_SUCCESS:
            return { loading: false, essays: action.payload };
        case ESSAY_BY_TOPIC_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const essayLatestTopicReducer = (state = { essays: [] }, action) => {
    switch (action.type) {
        case ESSAY_LATEST_TOPIC_REQUEST:
            return { loading: true, essays: [] };
        case ESSAY_LATEST_TOPIC_SUCCESS:
            return { loading: false, essays: action.payload };
        case ESSAY_LATEST_TOPIC_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const essayDetailsReducer = (state = { essay: {} }, action) => {
    switch (action.type) {
        case ESSAY_DETAILS_REQUEST:
            return { loading: true, ...state };
        case ESSAY_DETAILS_SUCCESS:
            return { loading: false, essay: action.payload };
        case ESSAY_DETAILS_FAIL :
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const essaySearchReducer = (state = { essays: [] }, action) => {
    switch (action.type) {
        case ESSAY_SEARCH_REQUEST:
            return { loading: true, essays: [] };
        case ESSAY_SEARCH_SUCCESS:
            return { loading: false, essays: action.payload };
        case ESSAY_SEARCH_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const essayListByBandReducer = (state = { essays: []}, action) => {
    switch (action.type) {
        case ESSAY_LIST_REQUEST:
            return { loading: true, essays: []};
        case ESSAY_LIST_SUCCESS:
            return { loading: false, essays: action.payload };
        case ESSAY_LIST_FAIL 	:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};

export const essaySampleReducer = (state = { essays: [] }, action) => {
    switch (action.type) {
        case ESSAY_SAMPLE_REQUEST:
            return { loading: true, essays: [] };
        case ESSAY_SAMPLE_SUCCESS:
            return { loading: false, essays: action.payload };
        case ESSAY_SAMPLE_FAIL 	:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};