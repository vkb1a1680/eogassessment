import WeatherSagas from "./Weather";
import ApiErrors from "./ApiErrors";
import watchLoadChartData from "./Chart";

export default [...ApiErrors, ...WeatherSagas,watchLoadChartData];
