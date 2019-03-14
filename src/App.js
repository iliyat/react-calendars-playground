import React, {Component} from 'react';
import './App.css';
import ReactCalendar from './calendars/ReactCalendar';
import RCCalendar from './calendars/RCCalendar'
import Y0CReactDatePicker from './calendars/Y0CReactDatePicker'
import ReactDaterangePicker from './calendars/ReactDaterangePicker'

class App extends Component {
  render() {
    return (
      <div className="App">
        <section>
          <h3>
            <a
              href="https://github.com/wojtekmaj/react-calendar"
              target="_blank"
            >
              react-calendar
            </a>
          </h3>
          <ReactCalendar/>
        </section>
        <section>
          <h3>
            <a
              href="https://github.com/react-component/calendar"
              target="_blank"
            >
              rc-calendar
            </a>
          </h3>
          <RCCalendar />
        </section>
        <section>
          <h3>
            <a
              href="https://github.com/y0c/react-datepicker"
              target="_blank"
            >
              @y0c/react-datepicker
            </a>
          </h3>
          <Y0CReactDatePicker />
        </section>
        <section>
          <h3>
            <a
              href="https://github.com/onefinestay/react-daterange-picker"
              target="_blank"
            >
              react-daterange-picker
            </a>
          </h3>
          <ReactDaterangePicker />
        </section>
      </div>
    );
  }
}

export default App;
