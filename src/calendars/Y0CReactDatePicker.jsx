import React, {Component, Fragment} from 'react';
import { RangeDatePicker } from '@y0c/react-datepicker';
import '@y0c/react-datepicker/assets/styles/calendar.scss';

export default class Y0CReactDatePicker extends Component {
  state = {
    date: [new Date(), new Date(2019, 2, 15)]
  };

  render() {
    return (
      <Fragment>
        <RangeDatePicker multiple/>
        <p>
          нужен node-sass, нужен момент, можно стилизовать, две панели, поле с попапом из коробки,
          выбор нескольких дат, нельзя выбрать диапазон из одной даты
        </p>
      </Fragment>
    )
  }
}