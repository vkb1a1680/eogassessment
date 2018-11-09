import * as actions from "../actions";

const initialState = {
    droneData: [],
    loading: true
};

const chartReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.GET_CHART_DATA:
            return { ...state, loading: false };
        case actions.CHART_DATA_RECEIVED:
            return { ...state, droneData: action.data, loading: false };
        default: return state;
    };
};

export default chartReducer;


