import React, {Component, Fragment} from 'react';
import ReactCalendarComponent from 'react-calendar';

export default class ReactCalendar extends Component {
    state = {
        date: [new Date(2019, 2, 12), new Date(2019, 2, 15)]
    };

    render() {
        return (
            <Fragment>
                <ReactCalendarComponent
                    onChange={date => {
                        console.log('react-calendar value:', date);
                        this.setState({date});
                    }}
                    activeStartDate={this.state.date[0]}
                    value={this.state.date}
                    selectRange
                />
                <p>простой, много настроек, не нужен момент, можно стилизовать, диапазон в одном календаре, диапазон из одной даты</p>
            </Fragment>
        )
    }
}