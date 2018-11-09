import React from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import * as  Actions from '../store/actions';
import { LinearProgress } from '@material-ui/core';
import { connect } from 'react-redux';
import moment from 'moment';


class Chart extends React.Component {
    componentDidMount() {
        this.props.loadChart();
    }

    formatDate(d){
        return moment(d).format('HH:mm');
    }
    render() {
        let droneData = this.props.droneData.data;

        if (this.props.loading) return <LinearProgress />
        return (
            <ResponsiveContainer width={1000} height="80%">
                <LineChart width={1000} height={300} data={droneData}
                    margin={{ top: 30, right: 30, left: 30, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="4 4" />
                    <XAxis dataKey="timestamp"  tickFormatter={this.formatDate} />
                    <YAxis yAxisId="left" label={{ value: 'Temperature', angle: -90, position: 'insideLeft' }} />
                    <YAxis yAxisId="right" orientation="right" label={{ value: 'Accuracy', angle: -90, position: 'outsideRight' }} />
                    <Tooltip />
                    <Legend />
                    <Line yAxisId="left" type="monotone" dataKey="metric" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <Line yAxisId="right" type="monotone" dataKey="accuracy" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>
        );
    }

}

const mapDispatchToProps = dispatch => ({
    loadChart: () =>
        dispatch({
            type: Actions.GET_CHART_DATA
        }),
});
const mapStateToProps = state => {
    return {
        droneData: state.chart.droneData,
        loading: state.chart.loading
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Chart);
