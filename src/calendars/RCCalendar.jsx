import React, {Component, Fragment} from 'react';
import CalendarComponent from 'rc-calendar/lib/RangeCalendar';
import 'rc-calendar/assets/index.css';

export default class RCCalendar extends Component {
  state = {
    date: new Date()
  };

  render() {
    return (
      <Fragment>
        <CalendarComponent />
        <p>две панели для диапазона, можно стилизовать, выбор года и месяца отдельно, диапазон из одной даты</p>
      </Fragment>
    )
  }
}