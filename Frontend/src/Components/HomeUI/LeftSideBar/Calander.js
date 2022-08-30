import "flatpickr/dist/themes/material_green.css";

import Flatpickr from "react-flatpickr";
import { Component } from "react";

class Calander extends Component {
  constructor() {
    super();

    this.state = {
      date: new Date()

    };
  }

  render() {
    const { date } = this.state;
    console.log(date)
    return (
      <div className="flex justify-center items-center mt-12">
        <label className="px-2">Date:</label>
        <Flatpickr
          className="py-2 px-3"
          // data-enable-time
          value={date}
          onChange={([date]) => {
            this.setState({ date });
          }}
        /></div>
    );
  }
}
export default Calander