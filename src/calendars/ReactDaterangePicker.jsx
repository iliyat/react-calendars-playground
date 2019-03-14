import React, {Component, Fragment} from 'react';
import CalendarComponent from 'react-daterange-picker';
import 'react-daterange-picker/dist/css/react-calendar.css'

export default class ReactCalendar extends Component {
  state = {
    range: null,
  };

  render() {
    return (
      <Fragment>
        <CalendarComponent
          numberOfCalendars={3}
          value={this.state.range}
          onSelect={range => {
            this.setState({
              range,
            })
          }}
          singleDateRange
        />
        <p>
          нужен moment-range, только диапазон, можно выбрать один день в качестве диапазона, можно стилизовать,
          настраиваемое количество панелей
        </p>
      </Fragment>
    )
  }
}