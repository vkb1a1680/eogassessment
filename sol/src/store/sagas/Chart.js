import API from "../api";
import * as actions from "../actions";
import { call, put, cancel} from "redux-saga/effects";
import { delay } from 'redux-saga'; 

export default function* watchLoadChartData(action) {
    while (true) {
        try {
            const { data } = yield call(API.getDroneData);
            yield put({ type: actions.CHART_DATA_RECEIVED, data });
            yield call(delay, 4000);
        } catch (err) {
            yield put({ type: actions.API_ERROR, code: err.code });
            yield cancel();
            return;
        }
    }
}
